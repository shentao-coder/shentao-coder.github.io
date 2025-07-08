document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Theme Toggle Logic ---
    const themeToggle = document.getElementById('theme-toggle');
    const setInitialTheme = () => {
        const preferredTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', preferredTheme);
    };
    if (themeToggle) {
        setInitialTheme();
        themeToggle.addEventListener('click', () => {
            let targetTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', targetTheme);
            localStorage.setItem('theme', targetTheme);
        });
    }

    // --- 2. Live Clock Logic ---
    const timeElement = document.getElementById('time');
    function updateClock() {
        if (timeElement) {
            const now = new Date();
            const options = { timeZone: 'Asia/Shanghai', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
            timeElement.textContent = new Intl.DateTimeFormat('en-GB', options).format(now);
        }
    }
    updateClock();
    setInterval(updateClock, 1000);

    // --- 3. Loading Animation ---
    const grid = document.querySelector('.dashboard-grid');
    if (grid) {
        // Use a short timeout to allow the page to render first
        setTimeout(() => {
            grid.classList.add('loaded');
        }, 100);
    }

    // --- 4. 3D Hover Effect for Widgets ---
    const widgets = document.querySelectorAll('.widget');
    widgets.forEach(widget => {
        widget.addEventListener('mousemove', (e) => {
            const rect = widget.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            const rotateX = -y / 20; // Adjust divisor for sensitivity
            const rotateY = x / 20;

            widget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        widget.addEventListener('mouseleave', () => {
            widget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
});
