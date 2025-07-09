document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Theme Toggle Logic ---
    const themeToggle = document.querySelector('.theme-toggle-button');
    if (themeToggle) {
        const setInitialTheme = () => {
            const preferredTheme = localStorage.getItem('theme') || 'light';
            document.documentElement.setAttribute('data-theme', preferredTheme);
        };
        
        setInitialTheme();

        themeToggle.addEventListener('click', () => {
            let currentTheme = document.documentElement.getAttribute('data-theme');
            let targetTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', targetTheme);
            localStorage.setItem('theme', targetTheme);
        });
    }

    // --- 2. Scroll-spy for Navigation ---
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');

    const onScroll = () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 70) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', onScroll);

    // --- 3. Smooth Scrolling for Nav Links ---
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
