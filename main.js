document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Theme Toggle Logic ---
    const themeToggle = document.querySelector('.theme-toggle-button');
    if (themeToggle) {
        // ... same theme toggle logic as before ...
        const setInitialTheme = () => {
            const preferredTheme = localStorage.getItem('theme') || 'light';
            document.documentElement.setAttribute('data-theme', preferredTheme);
        };
        setInitialTheme();
        themeToggle.addEventListener('click', () => {
            let targetTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', targetTheme);
            themeToggle.textContent = targetTheme === 'light' ? 'Night Edition' : 'Day Edition';
        });
    }

    // --- 2. Scroll Reveal Animations ---
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: false,
    });

    sr.reveal('.intro-section');
    sr.reveal('.content-block', { interval: 150 });
});
