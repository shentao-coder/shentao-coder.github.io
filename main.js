document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Theme Toggle Logic ---
    const themeToggle = document.querySelector('.theme-toggle-button');
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

    // --- 2. Scroll Reveal Animations ---
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '30px',
        duration: 800,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: false,
        viewFactor: 0.2
    });

    // Animate each timeline entry as a whole
    sr.reveal('.timeline-entry');

});
