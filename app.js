// app.js
// Version 4.0: Knowledge Base & Auto-Links

const container = document.getElementById('days-container');
const notesArea = document.getElementById('personal-notes');
const activeDayTitle = document.getElementById('active-day-title');
const resourceLinksContainer = document.getElementById('resource-links-container');
const saveIndicator = document.getElementById('save-indicator');

const XP_BASE = 50;
const XP_LATE = 25;
const PENALTY_PER_DAY = 10;

// State Management (Added 'notes' object)
let appState = JSON.parse(localStorage.getItem('pathState')) || {
    startDate: null, progress: {}, lastLogin: null, notes: {}
};

let chartInstance = null;
let totalTasksInCurriculum = 0;
let currentActiveDayId = null; // Tracks which day is currently open in the side panel

// --- Time Utilities ---
function getPastDateString(daysAgo) {
    let d = new Date(); d.setDate(d.getDate() - daysAgo);
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function getTodayString() { return getPastDateString(0); }
function daysBetween(date1, date2) { return Math.floor((new Date(date2) - new Date(date1)) / (1000 * 60 * 60 * 24)); }

// --- Streaks & Overdrive Logic ---
function calculateStreak() {
    let activeDates = new Set(Object.values(appState.progress).map(t => t.completedAt));
    let streak = 0, todayStr = getPastDateString(0), yesterdayStr = getPastDateString(1);

    if (activeDates.has(todayStr) || activeDates.has(yesterdayStr)) {
        let daysAgo = activeDates.has(todayStr) ? 0 : 1;
        while(activeDates.has(getPastDateString(daysAgo))) { streak++; daysAgo++; }
    }
    return streak;
}

function getDynamicMaxDay(currentDayNumber) {
    let maxAllowedDay = currentDayNumber;
    let hoursLeftToday = 24 - new Date().getHours();
    let allDoneSoFar = true;

    for (let i = 1; i <= currentDayNumber; i++) {
        const d = learningPath.find(x => x.day === i);
        if (d) d.subtopics.forEach((_, idx) => { if (!appState.progress[`day${i}-task${idx}`]) allDoneSoFar = false; });
    }

    if (allDoneSoFar) {
        let checkDay = currentDayNumber + 1;
        while (checkDay <= learningPath.length) {
            const nextDay = learningPath.find(d => d.day === checkDay);
            if (!nextDay) break;
            let estHours = nextDay.subtopics.length * 1;
            if (hoursLeftToday >= estHours) {
                maxAllowedDay = checkDay; hoursLeftToday -= estHours; checkDay++;
                let bonusDone = true;
                nextDay.subtopics.forEach((_, idx) => { if (!appState.progress[`day${nextDay.day}-task${idx}`]) bonusDone = false; });
                if (!bonusDone) break;
            } else break;
        }
    }
    return maxAllowedDay;
}

// --- Initialization ---
function init() {
    const today = getTodayString();
    if (!appState.startDate) appState.startDate = today;
    appState.lastLogin = today;
    saveState();

    document.getElementById('date-display').innerText = `Active Date: ${today}`;
    totalTasksInCurriculum = learningPath.reduce((acc, day) => acc + day.subtopics.length, 0);

    setupNotepadListeners();
    renderApp();
    renderChart();
}

function saveState() { localStorage.setItem('pathState', JSON.stringify(appState)); }

// --- Side Panel Logic ---
function openSidePanel(dayData, isLocked) {
    currentActiveDayId = dayData.day;
    notesArea.disabled = isLocked;
    
    // Update Titles
    activeDayTitle.innerText = `Day ${dayData.day}: ${dayData.topic}`;
    if (isLocked) activeDayTitle.innerText += " (LOCKED)";

    // Load Notes
    notesArea.value = appState.notes[`day${dayData.day}`] || '';

    // Generate Smart Links based on the topic
    if (isLocked) {
        resourceLinksContainer.innerHTML = `<p style="color: var(--text-muted); font-size: 0.9rem;">Links unlock when the day arrives.</p>`;
    } else {
        const queryTerm = encodeURIComponent(dayData.topic + " programming tutorial");
        const docTerm = encodeURIComponent(dayData.topic + " GeeksForGeeks OR Baeldung");
        
        resourceLinksContainer.innerHTML = `
            <a href="https://www.youtube.com/results?search_query=${queryTerm}" target="_blank" class="resource-link">
                <span style="color: #ef4444; font-size: 1.2rem;">▶</span> YouTube Search
            </a>
            <a href="https://www.google.com/search?q=${docTerm}" target="_blank" class="resource-link">
                <span style="color: var(--accent); font-size: 1.2rem;">📖</span> Read Documentation
            </a>
            <a href="https://leetcode.com/problemset/all/?search=${encodeURIComponent(dayData.topic)}" target="_blank" class="resource-link">
                <span style="color: #f59e0b; font-size: 1.2rem;">⚡</span> Find on LeetCode
            </a>
        `;
    }

    // Highlight the active card visually
    document.querySelectorAll('.day-card').forEach(c => c.classList.remove('active-selection'));
    document.getElementById(`card-day-${dayData.day}`).classList.add('active-selection');
}

function setupNotepadListeners() {
    let timeoutId;
    notesArea.addEventListener('input', (e) => {
        if (!currentActiveDayId) return;
        
        // Save to state
        appState.notes[`day${currentActiveDayId}`] = e.target.value;
        saveState();

        // Show save indicator
        saveIndicator.style.opacity = '1';
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => { saveIndicator.style.opacity = '0'; }, 2000);
    });
}

// --- Main Render Loop ---
function renderApp() {
    const todayStr = getTodayString();
    const currentDayNumber = daysBetween(appState.startDate, todayStr) + 1;
    const maxAllowedDay = getDynamicMaxDay(currentDayNumber);
    
    let totalXP = 0; let completedTasksCount = 0;
    container.innerHTML = '';

    learningPath.forEach((dayData) => {
        const card = document.createElement('div');
        card.className = 'day-card';
        card.id = `card-day-${dayData.day}`; // ID for highlighting
        
        let status = ''; let statusText = ''; let badgeColor = 'var(--accent)'; let isLocked = false;
        
        if (dayData.day > maxAllowedDay) {
            status = 'locked'; statusText = '(Locked)'; isLocked = true; badgeColor = 'var(--text-muted)';
        } else if (dayData.day > currentDayNumber && dayData.day <= maxAllowedDay) {
            status = 'today'; statusText = '⚡ OVERDRIVE'; badgeColor = 'var(--warning)';
            card.style.borderColor = 'var(--warning)'; card.style.boxShadow = '0 0 15px rgba(245, 158, 11, 0.2)';
            if (dayData.day === maxAllowedDay) card.classList.add('active'); // Expand highest available
        } else if (dayData.day === currentDayNumber) {
            status = 'today'; statusText = '(Today)'; badgeColor = 'var(--success)';
            card.classList.add('active');
        } else {
            let allDone = true;
            dayData.subtopics.forEach((_, i) => { if (!appState.progress[`day${dayData.day}-task${i}`]) allDone = false; });
            if (!allDone) {
                status = 'overdue'; statusText = '⚠️ OVERDUE'; badgeColor = 'var(--danger)'; card.classList.add('active');
            } else status = 'completed';
        }
        card.classList.add(status);

        // Header
        const header = document.createElement('div');
        header.className = 'day-header';
        header.innerHTML = `<h3><span class="day-badge" style="background-color: ${badgeColor};">Day ${dayData.day}</span> ${dayData.topic} <span style="margin-left: 10px; font-size: 0.8rem; font-weight: bold; color: ${badgeColor};">${statusText}</span></h3>`;
        
        // When clicking a header, expand it AND load the right panel
        header.addEventListener('click', () => { 
            if(!isLocked) card.classList.toggle('active'); 
            openSidePanel(dayData, isLocked);
        });

        // Subtopics
        const subList = document.createElement('div');
        subList.className = 'subtopics-list';

        dayData.subtopics.forEach((sub, i) => {
            const taskId = `day${dayData.day}-task${i}`;
            const taskData = appState.progress[taskId];
            const isChecked = taskData ? 'checked' : '';
            
            let taskDisplay = '';
            if (taskData) {
                completedTasksCount++;
                const earnedXP = taskData.status === 'on-time' ? XP_BASE : XP_LATE; totalXP += earnedXP;
                taskDisplay = `<span class="xp-tag">+${earnedXP} XP</span>`;
            } else if (status === 'overdue') {
                const penalty = (currentDayNumber - dayData.day) * PENALTY_PER_DAY; totalXP -= penalty;
                taskDisplay = `<span class="penalty-tag">-${penalty} XP (Bleeding)</span>`;
            } else if (isLocked) {
                taskDisplay = `<span class="xp-tag" style="color: var(--text-muted); background: transparent;">🔒 Time Gated</span>`;
            } else if (statusText === '⚡ OVERDRIVE') {
                taskDisplay = `<span class="xp-tag" style="color: var(--warning); border: 1px solid var(--warning);">+${XP_BASE} XP (Bonus)</span>`;
            } else taskDisplay = `<span class="xp-tag">+${XP_BASE} XP possible</span>`;

            const item = document.createElement('div');
            item.className = 'subtopic-item';
            item.innerHTML = `<input type="checkbox" id="${taskId}" ${isChecked} ${isLocked ? 'disabled' : ''}> <label for="${taskId}" class="${isChecked ? 'completed-text' : ''}">${sub}</label> ${taskDisplay}`;

            item.querySelector('input').addEventListener('change', (e) => {
                if (e.target.checked) appState.progress[taskId] = { completedAt: getTodayString(), status: (dayData.day < currentDayNumber) ? 'late' : 'on-time' };
                else delete appState.progress[taskId];
                saveState(); renderApp(); updateChart(); 
            });
            subList.appendChild(item);
        });
        card.appendChild(header); card.appendChild(subList); container.appendChild(card);
        
        // Auto-load panel for "Today" on first load if nothing is selected
        if (status === 'today' && !currentActiveDayId) {
            openSidePanel(dayData, isLocked);
        }
    });

    updateGamificationUI(totalXP, calculateStreak());
    updateProgressUI(completedTasksCount);
}

// ... UI updates and Chart functions remain identical ...
function updateGamificationUI(xp, streak) {
    let currentLevel = xp > 0 ? Math.floor(xp / 500) + 1 : 1;
    let titles = ["Novice", "Apprentice", "Coder", "Architect", "Master", "Grandmaster", "Legend"];
    document.getElementById('xp-display').innerText = xp;
    document.getElementById('level-display').innerText = currentLevel;
    document.getElementById('level-title').innerText = titles[Math.min(currentLevel - 1, titles.length - 1)];
    document.getElementById('streak-display').innerText = `${streak} 🔥`;
}
function updateProgressUI(completed) {
    let percentage = totalTasksInCurriculum > 0 ? ((completed / totalTasksInCurriculum) * 100).toFixed(1) : 0;
    document.getElementById('percentage-display').innerText = `${percentage}%`;
    document.getElementById('tasks-completed-display').innerText = `${completed} / ${totalTasksInCurriculum} Tasks Completed`;
    document.getElementById('main-progress-bar').style.width = `${percentage}%`;
}
function renderChart() {
    const ctx = document.getElementById('progressChart').getContext('2d');
    chartInstance = new Chart(ctx, {
        type: 'line', data: { labels: learningPath.map(d => `Day ${d.day}`), datasets: [{ label: 'Tasks Completed', data: calculateCumulativeProgress(), borderColor: '#3b82f6', backgroundColor: 'rgba(59, 130, 246, 0.2)', borderWidth: 2, fill: true, tension: 0.3, pointBackgroundColor: '#10b981', pointRadius: 0 }] },
        options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, suggestedMax: totalTasksInCurriculum, grid: { color: '#334155' }, ticks: { color: '#94a3b8' } }, x: { grid: { color: '#334155' }, ticks: { display: false } } }, plugins: { legend: { labels: { color: '#f8fafc' } } } }
    });
}
function updateChart() { if (chartInstance) { chartInstance.data.datasets[0].data = calculateCumulativeProgress(); chartInstance.update(); } }
function calculateCumulativeProgress() {
    let cumulative = [], currentTotal = 0;
    learningPath.forEach(day => {
        let dayTasksCompleted = 0;
        day.subtopics.forEach((sub, index) => { if (appState.progress[`day${day.day}-task${index}`]) dayTasksCompleted++; });
        currentTotal += dayTasksCompleted; cumulative.push(currentTotal);
    });
    return cumulative;
}

init();
