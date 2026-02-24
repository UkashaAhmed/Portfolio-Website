const cities = ['San Francisco', 'New York', 'London', 'Tokyo', 'Paris'];
const weatherConditions = ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy'];
const weatherIcons = ['☀️', '☁️', '🌧️', '⛅'];

function searchWeather() {
    const input = document.getElementById('cityInput');
    const city = input.value.trim() || cities[Math.floor(Math.random() * cities.length)];
    
    const temp = Math.floor(Math.random() * 30) + 50;
    const conditionIndex = Math.floor(Math.random() * weatherConditions.length);
    
    document.getElementById('cityName').textContent = city;
    document.querySelector('.temperature').textContent = `${temp}°F`;
    document.querySelector('.weather-icon').textContent = weatherIcons[conditionIndex];
    document.querySelector('.weather-desc').textContent = weatherConditions[conditionIndex];
    
    document.querySelector('.weather-details').innerHTML = `
        <div class="detail-item">
            <span>💧 Humidity</span>
            <strong>${Math.floor(Math.random() * 40) + 40}%</strong>
        </div>
        <div class="detail-item">
            <span>💨 Wind Speed</span>
            <strong>${Math.floor(Math.random() * 20) + 5} mph</strong>
        </div>
        <div class="detail-item">
            <span>🌡️ Feels Like</span>
            <strong>${temp - 2}°F</strong>
        </div>
    `;
    
    generateForecast();
}

function generateForecast() {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    const forecastGrid = document.getElementById('forecastGrid');
    
    forecastGrid.innerHTML = days.map(day => {
        const temp = Math.floor(Math.random() * 30) + 50;
        const icon = weatherIcons[Math.floor(Math.random() * weatherIcons.length)];
        return `
            <div class="forecast-item">
                <div style="font-weight: bold; margin-bottom: 0.5rem;">${day}</div>
                <div style="font-size: 2rem; margin: 0.5rem 0;">${icon}</div>
                <div style="font-weight: bold;">${temp}°F</div>
            </div>
        `;
    }).join('');
}

document.getElementById('cityInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchWeather();
});

generateForecast();
