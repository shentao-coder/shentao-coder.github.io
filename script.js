document.addEventListener('DOMContentLoaded', () => {
    // --- Leaflet 地图初始化 ---
    const mapElement = document.getElementById('map');
    
    if (mapElement) {
        // 设置地图视图中心为台湾彰化市
        const map = L.map('map').setView([24.077, 120.54], 13);

        // 使用 OpenStreetMap 图层 (无需Key，全球可用)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // 在地图上添加标记
        L.marker([24.077, 120.54]).addTo(map)
            .bindPopup('<b>Current Location</b><br>Changhua, Taiwan.')
            .openPopup();
    }
});


