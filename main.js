document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Custom Cursor Logic ---
    const cursor = document.querySelector('.cursor');
    const interactiveElements = document.querySelectorAll('a, button');
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    interactiveElements.forEach(el => {
        el.addEventListener('mouseover', () => cursor.classList.add('cursor-grow'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-grow'));
    });

    // --- 2. Theme Toggle Logic ---
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

    // --- 3. Scroll Reveal Animations ---
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '20px',
        duration: 700,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: false,
        viewFactor: 0.2
    });

    sr.reveal('.profile-avatar', { delay: 100 });
    sr.reveal('.sidebar-name', { delay: 200 });
    sr.reveal('.sidebar-tagline', { delay: 300 });
    sr.reveal('.sidebar-section', { delay: 400, interval: 100 });
    
    sr.reveal('.lead', { delay: 200 });
    sr.reveal('h2', { delay: 300 });
    // Add reveals for .timeline-item, .project-card, etc. as you add them
    // sr.reveal('.timeline-item', { interval: 150 }); 
    // sr.reveal('.project-card', { interval: 100 });
    sr.reveal('.site-footer', { distance: '10px' });
});
