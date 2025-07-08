document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Custom Cursor Logic ---
    const cursor = document.querySelector('.cursor');
    const interactiveElements = document.querySelectorAll('a, button');

    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", `top: ${e.pageY}px; left: ${e.pageX}px;`);
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
            let currentTheme = document.documentElement.getAttribute('data-theme');
            let targetTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', targetTheme);
            localStorage.setItem('theme', targetTheme);
        });
    }

    // --- 3. Scroll Reveal Animations ---
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '30px',
        duration: 800,
        delay: 200,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: false, // Animations only happen once
        viewFactor: 0.2 // Start animation when 20% of the element is visible
    });

    // Animate elements
    sr.reveal('.hero-image', { delay: 300 });
    sr.reveal('.hero-title', { delay: 500, origin: 'top', distance: '50px' });
    sr.reveal('.lead-text', { delay: 600 });
    sr.reveal('.section-title', { delay: 300 });
    // Staggered animations for lists/grids
    sr.reveal('.skill-card', { interval: 150 });
    sr.reveal('.project-item', { interval: 150, distance: '0px', opacity: 0.5 });
});
