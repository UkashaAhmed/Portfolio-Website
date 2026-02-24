function renderChart() {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const chart = document.getElementById('chart');
    
    chart.innerHTML = days.map(day => {
        const height = Math.floor(Math.random() * 150) + 50;
        return `
            <div class="bar" style="height: ${height}px;">
                <div class="bar-label">${day}</div>
            </div>
        `;
    }).join('');
}

function renderActivity() {
    const activities = [
        { icon: '👤', text: 'New user registered', time: '2 min ago' },
        { icon: '💳', text: 'Payment received: $299', time: '15 min ago' },
        { icon: '📧', text: 'Email campaign sent', time: '1 hour ago' },
        { icon: '🎯', text: 'Goal completed', time: '2 hours ago' },
        { icon: '📊', text: 'Report generated', time: '3 hours ago' }
    ];
    
    const activityList = document.getElementById('activityList');
    activityList.innerHTML = activities.map(activity => `
        <div class="activity-item">
            <div class="activity-icon">${activity.icon}</div>
            <div class="activity-text">${activity.text}</div>
            <div class="activity-time">${activity.time}</div>
        </div>
    `).join('');
}

function animateStats() {
    const stats = [
        { id: 'users', target: 12543 },
        { id: 'conversions', target: 3241 }
    ];
    
    stats.forEach(stat => {
        let current = 0;
        const increment = stat.target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= stat.target) {
                current = stat.target;
                clearInterval(timer);
            }
            document.getElementById(stat.id).textContent = Math.floor(current).toLocaleString();
        }, 20);
    });
}

renderChart();
renderActivity();
animateStats();
