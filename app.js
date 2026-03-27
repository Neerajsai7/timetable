// app.js
const container = document.getElementById('days-container');

// Game Mechanics
const XP_BASE = 50;
const XP_LATE = 25;
const PENALTY_PER_DAY = 10;

// State Management
let appState = JSON.parse(localStorage.getItem('pathState')) || {
    startDate: null,
    progress: {}, 
    lastLogin: null,
    currentStreak: 0
};

let chartInstance = null;
let totalTasksInCurriculum = 0;

// Date Utilities
function getTodayString() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function daysBetween(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return Math.floor((d2 - d1) / (1000 * 60 * 60 * 24));
}

// Initialization
function init() {
    const today = getTodayString();
    if (!appState.startDate) appState.startDate = today;

    if (appState.lastLogin && appState.lastLogin !== today) {
        if (daysBetween(appState.lastLogin, today) > 1) {
            appState.currentStreak = 0; // Streak broken
        }
    }
    appState.lastLogin = today;
    saveState();

    document.getElementById('date-display').innerText = `Active Date: ${today}`;
    
    // Count total tasks once
    totalTasksInCurriculum = learningPath.reduce((acc, day) => acc + day.subtopics.length, 0);

    renderApp();
    renderChart();
}

function saveState() {
    localStorage.setItem('pathState', JSON.stringify(appState));
}

function renderApp() {
    const todayStr = getTodayString();
    const currentDayNumber = daysBetween(appState.startDate, todayStr) + 1;
    
    let totalXP = 0;
    let completedTasksCount = 0;
    container.innerHTML = '';

    learningPath.forEach((dayData) => {
        const card = document.createElement('div');
        card.className = 'day-card';
        
        let status = '';
        let statusText = '';
        
        if (dayData.day > currentDayNumber) {
            status = 'locked'; statusText = '(Locked)';
        } else if (dayData.day === currentDayNumber) {
            status = 'today'; statusText = '(Today)';
            card.classList.add('active');
        } else {
            let allDone = true;
            dayData.subtopics.forEach((_, i) => {
                if (!appState.progress[`day${dayData.day}-task${i}`]) allDone = false;
            });
            if (!allDone) {
                status = 'overdue'; statusText = '⚠️ OVERDUE';
                card.classList.add('active');
            } else {
                status = 'completed';
            }
        }
        card.classList.add(status);

        // Header
        const header = document.createElement('div');
        header.className = 'day-header';
        header.innerHTML = `
            <h3><span class="day-badge">Day ${dayData.day}</span> ${dayData.topic} 
            <span style="margin-left: 10px; font-size: 0.8rem; font-weight: bold;">${statusText}</span></h3>
        `;
        header.addEventListener('click', () => { if(status !== 'locked') card.classList.toggle('active'); });

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
                const earnedXP = taskData.status === 'on-time' ? XP_BASE : XP_LATE;
                totalXP += earnedXP;
                taskDisplay = `<span class="xp-tag">+${earnedXP} XP</span>`;
            } else if (status === 'overdue') {
                const daysLate = currentDayNumber - dayData.day;
                const penalty = daysLate * PENALTY_PER_DAY;
                totalXP -= penalty;
                taskDisplay = `<span class="penalty-tag">-${penalty} XP (Bleeding)</span>`;
            } else if (status === 'locked') {
                taskDisplay = `<span class="xp-tag">🔒</span>`;
            } else {
                taskDisplay = `<span class="xp-tag">+${XP_BASE} XP possible</span>`;
            }

            const item = document.createElement('div');
            item.className = 'subtopic-item';
            item.innerHTML = `
                <input type="checkbox" id="${taskId}" ${isChecked} ${status === 'locked' ? 'disabled' : ''}>
                <label for="${taskId}" class="${isChecked ? 'completed-text' : ''}">${sub}</label>
                ${taskDisplay}
            `;

            const checkbox = item.querySelector('input');
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    const completionStatus = (dayData.day < currentDayNumber) ? 'late' : 'on-time';
                    appState.progress[taskId] = { completedAt: todayStr, status: completionStatus };
                    if (appState.lastLogin === todayStr) appState.currentStreak += 1; 
                } else {
                    delete appState.progress[taskId];
                    appState.currentStreak = Math.max(0, appState.currentStreak - 1);
                }
                saveState();
                renderApp(); 
                updateChart(); // Update graph on click
            });
            subList.appendChild(item);
        });
        card.appendChild(header);
        card.appendChild(subList);
        container.appendChild(card);
    });

    updateGamificationUI(totalXP, appState.currentStreak);
    updateProgressUI(completedTasksCount);
}

function updateGamificationUI(xp, streak) {
    let currentLevel = xp > 0 ? Math.floor(xp / 500) + 1 : 1;
    let titles = ["Novice", "Apprentice", "Coder", "Architect", "Master", "Grandmaster"];
    
    document.getElementById('xp-display').innerText = xp;
    document.getElementById('level-display').innerText = currentLevel;
    document.getElementById('level-title').innerText = titles[Math.min(currentLevel - 1, titles.length - 1)];
    document.getElementById('streak-display').innerText = `${streak} 🔥`;
}

function updateProgressUI(completed) {
    let percentage = totalTasksInCurriculum > 0 ? Math.round((completed / totalTasksInCurriculum) * 100) : 0;
    document.getElementById('percentage-display').innerText = `${percentage}%`;
    document.getElementById('tasks-completed-display').innerText = `${completed} / ${totalTasksInCurriculum} Tasks Completed`;
    document.getElementById('main-progress-bar').style.width = `${percentage}%`;
}

// Chart.js Logic
function renderChart() {
    const ctx = document.getElementById('progressChart').getContext('2d');
    let labels = learningPath.map(d => `Day ${d.day}`);
    let dataPoints = calculateCumulativeProgress();

    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Cumulative Tasks Finished',
                data: dataPoints,
                borderColor: '#3b82f6', backgroundColor: 'rgba(59, 130, 246, 0.2)',
                borderWidth: 2, fill: true, tension: 0.3, pointBackgroundColor: '#10b981', pointRadius: 1
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true, suggestedMax: totalTasksInCurriculum, grid: { color: '#334155' }, ticks: { color: '#94a3b8' } },
                x: { grid: { color: '#334155' }, ticks: { display: false } } // Hide X labels if too crowded
            },
            plugins: { legend: { labels: { color: '#f8fafc' } } }
        }
    });
}

function updateChart() {
    if (chartInstance) {
        chartInstance.data.datasets[0].data = calculateCumulativeProgress();
        chartInstance.update();
    }
}

function calculateCumulativeProgress() {
    let cumulative = [];
    let currentTotal = 0;
    learningPath.forEach(day => {
        let dayTasksCompleted = 0;
        day.subtopics.forEach((sub, index) => {
            if (appState.progress[`day${day.day}-task${index}`]) dayTasksCompleted++;
        });
        currentTotal += dayTasksCompleted;
        cumulative.push(currentTotal);
    });
    return cumulative;
}

init();
