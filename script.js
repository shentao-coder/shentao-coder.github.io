document.addEventListener('DOMContentLoaded', () => {
    // --- 主题切换器 ---
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;
    const sunIcon = themeSwitcher.querySelector('.fa-sun');
    const moonIcon = themeSwitcher.querySelector('.fa-moon');

    // 检查本地存储中是否有主题偏好
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }

    themeSwitcher.addEventListener('click', () => {
        body.classList.toggle('dark-theme');

        // 根据当前主题更新图标并存储偏好
        if (body.classList.contains('dark-theme')) {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
            localStorage.setItem('theme', 'dark');
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
            localStorage.setItem('theme', 'light');
        }
    });

    // --- Leaflet 地图初始化 ---
    // 使用您指定的上海坐标
    const map = L.map('location-map').setView([31.2304, 121.4737], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([31.2304, 121.4737]).addTo(map)
        .bindPopup('<b>Richard T. SHEN</b><br>Currently in Shanghai.')
        .openPopup();
});


