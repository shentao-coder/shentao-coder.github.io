document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    
    const setInitialTheme = () => {
        const preferredTheme = localStorage.getItem('theme');
        // Use system preference if no user preference is stored
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const currentTheme = preferredTheme || systemTheme;
        document.documentElement.setAttribute('data-theme', currentTheme);
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

    // --- 2. Scroll-spy for Navigation ---
    const sections = document.querySelectorAll('.content-block');
    const navLinks = document.querySelectorAll('.main-nav a');

    const onScroll = () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Use header height as offset
            if (pageYOffset >= sectionTop - 80) { 
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', onScroll);
});
