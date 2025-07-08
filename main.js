document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Theme Toggle Logic ---
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        // ... (Same theme toggle logic as our very last version) ...
         const setInitialTheme = () => {
            const preferredTheme = localStorage.getItem('theme') || 'light';
            document.documentElement.setAttribute('data-theme', preferredTheme);
        };
        setInitialTheme();
        themeToggle.addEventListener('click', () => {
            let targetTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', targetTheme);
            localStorage.setItem('theme', targetTheme);
        });
    }

    // --- 2. Scroll Reveal for a gentle entrance ---
    // We are adding this back, but in a very subtle way
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            distance: '20px',
            duration: 800,
            easing: 'ease-out',
            reset: false,
            viewFactor: 0.2
        });
        sr.reveal('.note-card', { origin: 'bottom', interval: 100 });
        sr.reveal('.about-card', { origin: 'bottom' });
        sr.reveal('.hero-statement', { origin: 'top' });
    }

});
