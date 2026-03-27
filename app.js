// app.js

// 1. Setup variables
const container = document.getElementById('days-container');
let totalTasks = 0;
let completedTasks = 0;
let progressData = JSON.parse(localStorage.getItem('pathProgress')) || {};
let chartInstance = null;

// 2. Initialization Function
function init() {
    renderDays();
    calculateProgress();
    renderChart();
}

// 3. Render the UI from data.js
function renderDays() {
    container.innerHTML = ''; // Clear container
    
    learningPath.forEach((dayData, dayIndex) => {
        // Count tasks for total
        totalTasks += dayData.subtopics.length;

        // Create Day Card
        const card = document.createElement('div');
        card.className = 'day-card';
        
        // Header
        const header = document.createElement('div');
        header.className = 'day-header';
        header.innerHTML = `
            <h3>
                <span class="day-badge">Day ${dayData.day}</span>
                ${dayData.topic}
                <span class="phase-badge">| ${dayData.phase}</span>
            </h3>
            <span style="color: var(--text-muted); font-size: 0.8rem;">▼ Expand</span>
        `;
        
        // Expand/Collapse logic
        header.addEventListener('click', () => {
            card.classList.toggle('active');
        });

        // Subtopics List
        const subList = document.createElement('div');
        subList.className = 'subtopics-list';

        dayData.subtopics.forEach((sub, subIndex) => {
            const taskId = `day${dayData.day}-task${subIndex}`;
            const isChecked = progressData[taskId] ? 'checked' : '';
            
            const item = document.createElement('div');
            item.className = 'subtopic-item';
            
            item.innerHTML = `
                <input type="checkbox" id="${taskId}" ${isChecked}>
                <label for="${taskId}" class="${isChecked ? 'completed-text' : ''}">${sub}</label>
            `;

            // Checkbox logic
            const checkbox = item.querySelector('input');
            const label = item.querySelector('label');
            
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    progressData[taskId] = true;
                    label.classList.add('completed-text');
                } else {
                    delete progressData[taskId];
                    label.classList.remove('completed-text');
                }
                saveProgress();
                calculateProgress();
                updateChart();
            });

            subList.appendChild(item);
        });

        card.appendChild(header);
        card.appendChild(subList);
        container.appendChild(card);
    });
}

// 4. Calculate Overall Progress
function calculateProgress() {
    completedTasks = Object.keys(progressData).length;
    let percentage = 0;
    
    if (totalTasks > 0) {
        percentage = Math.round((completedTasks / totalTasks) * 100);
    }

    // Update UI
    document.getElementById('percentage-display').innerText = `${percentage}%`;
    document.getElementById('tasks-completed-display').innerText = `${completedTasks} / ${totalTasks} Tasks Completed`;
    document.getElementById('main-progress-bar').style.width = `${percentage}%`;
}

// 5. Save to Local Storage
function saveProgress() {
    localStorage.setItem('pathProgress', JSON.stringify(progressData));
}

// 6. Render Chart.js
function renderChart() {
    const ctx = document.getElementById('progressChart').getContext('2d');
    
    // Create an array of data points: [0, progress_day_1, progress_day_2...]
    // For simplicity in this tracker, we map completion over the days mapped out.
    let labels = learningPath.map(d => `Day ${d.day}`);
    let dataPoints = calculateCumulativeProgress();

    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Tasks Completed',
                data: dataPoints,
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                borderWidth: 2,
                fill: true,
                tension: 0.3,
                pointBackgroundColor: '#10b981'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true, suggestedMax: totalTasks, grid: { color: '#334155' }, ticks: { color: '#94a3b8' } },
                x: { grid: { color: '#334155' }, ticks: { color: '#94a3b8' } }
            },
            plugins: {
                legend: { labels: { color: '#f8fafc' } }
            }
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
        // Check how many tasks in THIS day are completed
        let dayTasksCompleted = 0;
        day.subtopics.forEach((sub, index) => {
            if (progressData[`day${day.day}-task${index}`]) {
                dayTasksCompleted++;
            }
        });
        currentTotal += dayTasksCompleted;
        cumulative.push(currentTotal);
    });
    return cumulative;
}

// Boot up the app
init();
