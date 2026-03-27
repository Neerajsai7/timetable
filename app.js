// app.js
const container = document.getElementById('days-container');

// Game Mechanics Constants
const XP_BASE = 50;
const XP_LATE = 25;
const PENALTY_PER_DAY = 10;

// State Management
let appState = JSON.parse(localStorage.getItem('pathState')) || {
    startDate: null,
    progress: {}, // { "day1-task0": { completedAt: "YYYY-MM-DD", status: "on-time" | "late" } }
    lastLogin: null,
    currentStreak: 0
};

// Date Utility Functions
function getTodayString() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function daysBetween(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = d2 - d1;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

// Initialization
function init() {
    const today = getTodayString();
    
    // First time opening the app? Set today as Day 1.
    if (!appState.startDate) {
        appState.startDate = today;
    }

    // Check Streak Logic
    if (appState.lastLogin && appState.lastLogin !== today) {
        const daysMissed = daysBetween(appState.lastLogin, today);
        if (daysMissed > 1) {
            appState.currentStreak = 0; // Broke the streak
        }
    }
    appState.lastLogin = today;
    saveState();

    document.getElementById('date-display').innerText = `Active Date: ${today}`;
    
    renderApp();
}

function saveState() {
    localStorage.setItem('pathState', JSON.stringify(appState));
}

function renderApp() {
    const todayStr = getTodayString();
    // Calculate which "Day Number" we are currently on based on start date
    const currentDayNumber = daysBetween(appState.startDate, todayStr) + 1;
    
    let totalXP = 0;
    container.innerHTML = '';

    learningPath.forEach((dayData) => {
        const card = document.createElement('div');
        card.className = 'day-card';
        
        // Determine Status: Locked (Future), Today, or Overdue (Past)
        let status = '';
        let statusText = '';
        if (dayData.day > currentDayNumber) {
            status = 'locked';
            statusText = '(Locked)';
        } else if (dayData.day === currentDayNumber) {
            status = 'today';
            statusText = '(Today)';
            card.classList.add('active'); // Auto-expand today
        } else {
            // It's in the past. Check if all tasks are done.
            let allDone = true;
            dayData.subtopics.forEach((_, i) => {
                if (!appState.progress[`day${dayData.day}-task${i}`]) allDone = false;
            });
            if (!allDone) {
                status = 'overdue';
                statusText = '⚠️ OVERDUE';
                card.classList.add('active'); // Auto-expand overdue
            } else {
                status = 'completed';
            }
        }

        card.classList.add(status);

        // Header
        const header = document.createElement('div');
        header.className = 'day-header';
        header.innerHTML = `
            <h3>
                <span class="day-badge">Day ${dayData.day}</span>
                ${dayData.topic} 
                <span style="margin-left: 10px; font-size: 0.8rem; font-weight: bold;">${statusText}</span>
            </h3>
        `;
        
        header.addEventListener('click', () => { if(status !== 'locked') card.classList.toggle('active'); });

        // Subtopics
        const subList = document.createElement('div');
        subList.className = 'subtopics-list';

        dayData.subtopics.forEach((sub, i) => {
            const taskId = `day${dayData.day}-task${i}`;
            const taskData = appState.progress[taskId];
            const isChecked = taskData ? 'checked' : '';
            
            // Calculate XP for this specific task
            let taskDisplay = '';
            if (taskData) {
                // Task is finished
                const earnedXP = taskData.status === 'on-time' ? XP_BASE : XP_LATE;
                totalXP += earnedXP;
                taskDisplay = `<span class="xp-tag">+${earnedXP} XP</span>`;
            } else if (status === 'overdue') {
                // Task is unfinished and overdue
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

            // Handle Checking a box
            const checkbox = item.querySelector('input');
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    // Mark as complete
                    const completionStatus = (dayData.day < currentDayNumber) ? 'late' : 'on-time';
                    appState.progress[taskId] = { completedAt: todayStr, status: completionStatus };
                    
                    // Streak Check: Increase streak if they complete a task today
                    if (appState.lastLogin === todayStr) {
                        // Just an easy way to bump streak once per day upon first task completion
                        appState.currentStreak += 1; 
                    }
                } else {
                    // Uncheck
                    delete appState.progress[taskId];
                    appState.currentStreak = Math.max(0, appState.currentStreak - 1); // Remove streak point
                }
                saveState();
                renderApp(); // Re-render to update XP math
            });

            subList.appendChild(item);
        });

        card.appendChild(header);
        card.appendChild(subList);
        container.appendChild(card);
    });

    updateGamificationUI(totalXP, appState.currentStreak);
}

function updateGamificationUI(xp, streak) {
    // Level Math: Level 1 starts at 0 XP. Every 500 XP is a new level.
    let currentLevel = 1;
    if (xp > 0) {
        currentLevel = Math.floor(xp / 500) + 1;
    }

    let titles = ["Novice", "Apprentice", "Coder", "Architect", "Master", "Grandmaster"];
    let title = titles[Math.min(currentLevel - 1, titles.length - 1)];

    document.getElementById('xp-display').innerText = xp;
    document.getElementById('level-display').innerText = currentLevel;
    document.getElementById('level-title').innerText = title;
    document.getElementById('streak-display').innerText = `${streak} 🔥`;
}

// Start
init();
