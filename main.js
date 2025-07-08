document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Theme Toggle Logic ---
    const themeToggle = document.querySelector('.theme-toggle-button');
    // ... (same theme toggle logic as before) ...
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
        distance: '20px',
        duration: 600,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: false,
    });
    sr.reveal('.content-block', { interval: 100 });
    
    // --- 3. Scroll-spy for Navigation ---
    const sections = document.querySelectorAll('.content-block');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 100) { // offset by 100px
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});
