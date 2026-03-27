// app.js
// Version 3.0: Overdrive Engine & Bulletproof Streaks

const container = document.getElementById('days-container');

const XP_BASE = 50;
const XP_LATE = 25;
const PENALTY_PER_DAY = 10;

// State Management
let appState = JSON.parse(localStorage.getItem('pathState')) || {
    startDate: null,
    progress: {}, 
    lastLogin: null
};

let chartInstance = null;
let totalTasksInCurriculum = 0;

// Date & Time Utilities
function getPastDateString(daysAgo) {
    let d = new Date();
    d.setDate(d.getDate() - daysAgo);
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function getTodayString() {
    return getPastDateString(0);
}

function daysBetween(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return Math.floor((d2 - d1) / (1000 * 60 * 60 * 24));
}

// 1. The Bulletproof Streak Calculator
function calculateStreak() {
    let activeDates = new Set();
    Object.values(appState.progress).forEach(task => {
        activeDates.add(task.completedAt);
    });

    let streak = 0;
    let todayStr = getPastDateString(0);
    let yesterdayStr = getPastDateString(1);

    if (activeDates.has(todayStr) || activeDates.has(yesterdayStr)) {
        let daysAgo = activeDates.has(todayStr) ? 0 : 1;
        while(true) {
            let checkStr = getPastDateString(daysAgo);
            if (activeDates.has(checkStr)) {
                streak++;
                daysAgo++;
            } else {
                break;
            }
        }
    }
    return streak;
}

// 2. The Time-Based Dynamic Unlock Logic
function getDynamicMaxDay(currentDayNumber) {
    let maxAllowedDay = currentDayNumber;
    let hoursLeftToday = 24 - new Date().getHours();

    // Check if EVERYTHING up to today is 100% complete
    let allDoneSoFar = true;
    for (let i = 1; i <= currentDayNumber; i++) {
        const dayData = learningPath.find(d => d.day === i);
        if (dayData) {
            dayData.subtopics.forEach((_, idx) => {
                if (!appState.progress[`day${i}-task${idx}`]) allDoneSoFar = false;
            });
        }
    }

    if (allDoneSoFar) {
        let checkDay = currentDayNumber + 1;
        while (checkDay <= learningPath.length) {
            const nextDayData = learningPath.find(d => d.day === checkDay);
            if (!nextDayData) break;

            // Estimate 1 hour per subtopic
            let estimatedHours = nextDayData.subtopics.length * 1;

            if (hoursLeftToday >= estimatedHours) {
                maxAllowedDay = checkDay;
                hoursLeftToday -= estimatedHours;
                checkDay++;
                
                // If the bonus day is already finished, keep looking for more to unlock
                let bonusDone = true;
                nextDayData.subtopics.forEach((_, idx) => {
                     if (!appState.progress[`day${nextDayData.day}-task${idx}`]) bonusDone = false;
                });
                if (!bonusDone) break; 
            } else {
                break; // Not enough time left today to start the next module
            }
        }
    }
    return maxAllowedDay;
}

// Initialization
function init() {
    const today = getTodayString();
    if (!appState.startDate) appState.startDate = today;
    appState.lastLogin = today;
    saveState();

    document.getElementById('date-display').innerText = `Active Date: ${today}`;
    totalTasksInCurriculum = learningPath.reduce((acc, day) => acc + day.subtopics.length, 0);

    renderApp();
    renderChart();
}

function saveState() {
    localStorage.setItem('pathState', JSON.stringify(appState));
}

// Render Loop
function renderApp() {
    const todayStr = getTodayString();
    const currentDayNumber = daysBetween(appState.startDate, todayStr) + 1;
    const maxAllowedDay = getDynamicMaxDay(currentDayNumber);
    
    let totalXP = 0;
    let completedTasksCount = 0;
    container.innerHTML = '';

    learningPath.forEach((dayData) => {
        const card = document.createElement('div');
        card.className = 'day-card';
        
        let status = '';
        let statusText = '';
        let badgeColor = 'var(--accent)';
        let isLocked = false;
        
        if (dayData.day > maxAllowedDay) {
            status = 'locked'; 
            statusText = '(Locked)';
            isLocked = true;
            badgeColor = 'var(--text-muted)';
        } else if (dayData.day > currentDayNumber && dayData.day <= maxAllowedDay) {
            status = 'today'; // Use today's CSS for border glow
            statusText = '⚡ OVERDRIVE';
            badgeColor = 'var(--warning)';
            card.style.borderColor = 'var(--warning)';
            card.style.boxShadow = '0 0 15px rgba(245, 158, 11, 0.2)';
            card.classList.add('active');
        } else if (dayData.day === currentDayNumber) {
            status = 'today'; 
            statusText = '(Today)';
            badgeColor = 'var(--success)';
            card.classList.add('active');
        } else {
            let allDone = true;
            dayData.subtopics.forEach((_, i) => {
                if (!appState.progress[`day${dayData.day}-task${i}`]) allDone = false;
            });
            if (!allDone) {
                status = 'overdue'; 
                statusText = '⚠️ OVERDUE';
                badgeColor = 'var(--danger)';
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
            <h3><span class="day-badge" style="background-color: ${badgeColor};">Day ${dayData.day}</span> ${dayData.topic} 
            <span style="margin-left: 10px; font-size: 0.8rem; font-weight: bold; color: ${badgeColor};">${statusText}</span></h3>
        `;
        header.addEventListener('click', () => { if(!isLocked) card.classList.toggle('active'); });

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
            } else if (isLocked) {
                taskDisplay = `<span class="xp-tag" style="color: var(--text-muted); background: transparent;">🔒 Time Gated</span>`;
            } else if (statusText === '⚡ OVERDRIVE') {
                taskDisplay = `<span class="xp-tag" style="color: var(--warning); border: 1px solid var(--warning);">+${XP_BASE} XP (Bonus)</span>`;
            } else {
                taskDisplay = `<span class="xp-tag">+${XP_BASE} XP possible</span>`;
            }

            const item = document.createElement('div');
            item.className = 'subtopic-item';
            item.innerHTML = `
                <input type="checkbox" id="${taskId}" ${isChecked} ${isLocked ? 'disabled' : ''}>
                <label for="${taskId}" class="${isChecked ? 'completed-text' : ''}">${sub}</label>
                ${taskDisplay}
            `;

            const checkbox = item.querySelector('input');
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    const completionStatus = (dayData.day < currentDayNumber) ? 'late' : 'on-time';
                    appState.progress[taskId] = { completedAt: todayStr, status: completionStatus };
                } else {
                    delete appState.progress[taskId];
                }
                saveState();
                renderApp(); 
                updateChart(); 
            });
            subList.appendChild(item);
        });
        card.appendChild(header);
        card.appendChild(subList);
        container.appendChild(card);
    });

    const calculatedStreak = calculateStreak();
    updateGamificationUI(totalXP, calculatedStreak);
    updateProgressUI(completedTasksCount);
}

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
                label: 'Tasks Completed',
                data: dataPoints,
                borderColor: '#3b82f6', backgroundColor: 'rgba(59, 130, 246, 0.2)',
                borderWidth: 2, fill: true, tension: 0.3, pointBackgroundColor: '#10b981', pointRadius: 0
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true, suggestedMax: totalTasksInCurriculum, grid: { color: '#334155' }, ticks: { color: '#94a3b8' } },
                x: { grid: { color: '#334155' }, ticks: { display: false } } 
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
