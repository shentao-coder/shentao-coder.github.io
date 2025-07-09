document.addEventListener('DOMContentLoaded', () => {
    // --- 主题切换器逻辑 ---
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;
    const sunIcon = themeSwitcher.querySelector('.fa-sun');
    const moonIcon = themeSwitcher.querySelector('.fa-moon');

    // 默认或根据本地存储设置主题
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        body.classList.remove('dark-theme');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }

    themeSwitcher.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
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

    // --- 高德地图 (AMap) 初始化 ---
    window.AMapLoader.load({
        // 这里已经填入了您的专属Key
        "key": "355e7d5932249a0bd71dcce833bb7c69",
        "version": "2.0",   // 指定JSAPI版本号
        "plugins": ['AMap.ToolBar', 'AMap.Marker'], // 需要使用的的插件列表
    }).then((AMap) => {
        // 地图初始化
        const map = new AMap.Map('location-map', {
            viewMode: '3D', // 开启3D视图
            pitch: 50,      // 倾斜角度
            zoom: 11,       // 缩放级别
            center: [121.4737, 31.2304], // 上海的经纬度 [经度, 纬度]
            // 选择一个炫酷的官方地图样式
            mapStyle: 'amap://styles/darkblue', 
        });

        // 创建一个标记 (Marker)
        const marker = new AMap.Marker({
            position: new AMap.LngLat(121.4737, 31.2304),
            title: 'Shanghai'
        });

        // 将标记添加到地图中
        map.add(marker);
        
        // 添加地图控件 (如缩放按钮)
        map.addControl(new AMap.ToolBar({
            position: 'RB', // 按钮位置：右下
        }));
        
    }).catch(e => {
        console.error("高德地图加载失败", e);
    });
});
