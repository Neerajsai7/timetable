// app.js
// Version 5.1: Balanced Overdrive (No Bonus XP, Purely for Schedule Flexibility)

const container = document.getElementById('days-container');
const XP_BASE = 50; const XP_LATE = 25; const PENALTY_PER_DAY = 10;

let appState = JSON.parse(localStorage.getItem('pathState')) || { 
    startDate: null, progress: {}, lastLogin: null, manualUnlocks: 0 
};

function getPastDateString(daysAgo) { let d = new Date(); d.setDate(d.getDate() - daysAgo); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
function getTodayString() { return getPastDateString(0); }
function daysBetween(date1, date2) { return Math.floor((new Date(date2) - new Date(date1)) / (1000 * 60 * 60 * 24)); }

function calculateStreak() {
    let activeDates = new Set(Object.values(appState.progress).map(t => t.completedAt));
    let streak = 0, todayStr = getTodayString(), yesterdayStr = getPastDateString(1);
    if (activeDates.has(todayStr) || activeDates.has(yesterdayStr)) {
        let daysAgo = activeDates.has(todayStr) ? 0 : 1;
        while(activeDates.has(getPastDateString(daysAgo))) { streak++; daysAgo++; }
    }
    return streak;
}

function getMaxAllowedDay() {
    const todayStr = getTodayString();
    const calendarDay = daysBetween(appState.startDate, todayStr) + 1;
    return calendarDay + (appState.manualUnlocks || 0);
}

function init() {
    const today = getTodayString();
    if (!appState.startDate) appState.startDate = today;
    appState.lastLogin = today; saveState();
    document.getElementById('date-display').innerText = `System Time: ${new Date().toLocaleTimeString()} | ${today}`;
    totalTasksInCurriculum = learningPath.reduce((acc, day) => acc + day.subtopics.length, 0);
    renderApp(); renderChart();
}

function saveState() { localStorage.setItem('pathState', JSON.stringify(appState)); }

function renderApp() {
    const todayStr = getTodayString();
    const calendarDay = daysBetween(appState.startDate, todayStr) + 1;
    const maxAllowedDay = getMaxAllowedDay();
    
    let totalXP = 0; let completedTasksCount = 0; container.innerHTML = '';

    let currentDayFinished = true;
    const currentDayData = learningPath.find(d => d.day === maxAllowedDay);
    if (currentDayData) {
        currentDayData.subtopics.forEach((_, i) => {
            if (!appState.progress[`day${maxAllowedDay}-task${i}`]) currentDayFinished = false;
        });
    }

    learningPath.forEach((dayData) => {
        const card = document.createElement('div'); card.className = 'day-card';
        let status = ''; let statusText = ''; let badgeColor = 'var(--accent)'; let isLocked = false;
        
        if (dayData.day > maxAllowedDay) { 
            status = 'locked'; statusText = '(Locked)'; isLocked = true; badgeColor = 'var(--text-muted)'; 
        } else if (dayData.day > calendarDay) {
            status = 'today'; statusText = '⚡ OVERDRIVE'; badgeColor = 'var(--warning)';
            card.style.borderColor = 'var(--warning)'; card.classList.add('active');
        } else if (dayData.day === calendarDay) {
            status = 'today'; statusText = '(Today)'; badgeColor = 'var(--success)'; card.classList.add('active');
        } else {
            let allDone = true;
            dayData.subtopics.forEach((_, i) => { if (!appState.progress[`day${dayData.day}-task${i}`]) allDone = false; });
            if (!allDone) { status = 'overdue'; statusText = '⚠️ OVERDUE'; badgeColor = 'var(--danger)'; card.classList.add('active'); } 
            else status = 'completed';
        }
        card.classList.add(status);

        const header = document.createElement('div'); header.className = 'day-header';
        header.innerHTML = `<h3><span class="day-badge" style="background-color: ${badgeColor};">Day ${dayData.day}</span> ${dayData.topic} <span style="margin-left: 10px; font-size: 0.8rem; font-weight: bold; color: ${badgeColor};">${statusText}</span></h3>`;
        header.addEventListener('click', () => { if(!isLocked) card.classList.toggle('active'); });

        const subList = document.createElement('div'); subList.className = 'subtopics-list';

        dayData.subtopics.forEach((sub, i) => {
            const taskId = `day${dayData.day}-task${i}`;
            const taskData = appState.progress[taskId];
            const isChecked = taskData ? 'checked' : '';
            
            let taskDisplay = '';
            if (taskData) {
                completedTasksCount++;
                // Removed the +20 bonus logic here. Standard XP applies.
                const earnedXP = taskData.status === 'on-time' ? XP_BASE : XP_LATE;
                totalXP += earnedXP;
                taskDisplay = `<span class="xp-tag">+${earnedXP} XP</span>`;
            } else if (status === 'overdue') {
                const penalty = (calendarDay - dayData.day) * PENALTY_PER_DAY;
                totalXP -= penalty;
                taskDisplay = `<span class="penalty-tag">-${penalty} XP</span>`;
            } else if (isLocked) {
                taskDisplay = `<span class="xp-tag" style="color: var(--text-muted); background: transparent;">🔒</span>`;
            } else {
                taskDisplay = `<span class="xp-tag">+${XP_BASE} XP</span>`;
            }

            let linkHTML = (sub.url && !isLocked) ? `<a href="${sub.url}" target="_blank" class="inline-link">📖 Study</a>` : '';

            const item = document.createElement('div'); item.className = 'subtopic-item';
            item.innerHTML = `<input type="checkbox" id="${taskId}" ${isChecked} ${isLocked ? 'disabled' : ''}> <label for="${taskId}" class="task-label ${isChecked ? 'completed-text' : ''}">${sub.title}</label> ${linkHTML} ${taskDisplay}`;

            item.querySelector('input').addEventListener('change', (e) => {
                if (e.target.checked) {
                    appState.progress[taskId] = { 
                        completedAt: getTodayString(), 
                        status: (dayData.day <= calendarDay || dayData.day > calendarDay) ? 'on-time' : 'late',
                    };
                } else delete appState.progress[taskId];
                saveState(); renderApp(); updateChart(); 
            });
            subList.appendChild(item);
        });
        card.appendChild(header); card.appendChild(subList); container.appendChild(card);
    });

    if (currentDayFinished && maxAllowedDay < learningPath.length) {
        const overdriveBtn = document.createElement('button');
        // Removed the text mentioning the bonus XP
        overdriveBtn.innerText = "🚀 Finish line reached! Unlock Next Day?";
        overdriveBtn.style = "width: 100%; padding: 1rem; margin-top: 1rem; background: var(--warning); color: var(--bg-color); border: none; border-radius: 8px; font-weight: bold; cursor: pointer;";
        overdriveBtn.onclick = () => {
            appState.manualUnlocks = (appState.manualUnlocks || 0) + 1;
            saveState(); renderApp();
        };
        container.appendChild(overdriveBtn);
    }

    updateGamificationUI(totalXP, calculateStreak()); updateProgressUI(completedTasksCount);
}

function updateGamificationUI(xp, streak) {
    let currentLevel = xp > 0 ? Math.floor(xp / 500) + 1 : 1;
    document.getElementById('xp-display').innerText = xp;
    document.getElementById('level-display').innerText = currentLevel;
    document.getElementById('streak-display').innerText = `${streak} 🔥`;
}
function updateProgressUI(completed) {
    let percentage = totalTasksInCurriculum > 0 ? ((completed / totalTasksInCurriculum) * 100).toFixed(1) : 0;
    document.getElementById('percentage-display').innerText = `${percentage}%`;
    document.getElementById('main-progress-bar').style.width = `${percentage}%`;
}
function renderChart() {
    const ctx = document.getElementById('progressChart').getContext('2d');
    chartInstance = new Chart(ctx, { type: 'line', data: { labels: learningPath.map(d => `Day ${d.day}`), datasets: [{ label: 'Tasks', data: calculateCumulativeProgress(), borderColor: '#3b82f6', backgroundColor: 'rgba(59, 130, 246, 0.2)', borderWidth: 2, fill: true, tension: 0.3, pointRadius: 0 }] }, options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, suggestedMax: totalTasksInCurriculum, grid: { color: '#334155' }, ticks: { color: '#94a3b8' } }, x: { display: false } }, plugins: { legend: { display: false } } } });
}
function updateChart() { if (chartInstance) { chartInstance.data.datasets[0].data = calculateCumulativeProgress(); chartInstance.update(); } }
function calculateCumulativeProgress() {
    let cumulative = [], currentTotal = 0;
    learningPath.forEach(day => { let dayTasksCompleted = 0; day.subtopics.forEach((sub, index) => { if (appState.progress[`day${day.day}-task${index}`]) dayTasksCompleted++; }); currentTotal += dayTasksCompleted; cumulative.push(currentTotal); }); return cumulative;
}
init();
