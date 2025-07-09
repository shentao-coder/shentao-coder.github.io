// script.js - 2025 Portfolio Interactive Logic

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Custom Cursor Logic ---
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: 'forwards' });
    });

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .quant-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseover', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.borderColor = 'var(--text-primary)';
        });
        el.addEventListener('mouseout', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.borderColor = 'var(--primary-accent)';
        });
    });

    // --- 2. Theme Switcher ---
    const themeSwitcher = document.getElementById('theme-switcher');
    const docElement = document.documentElement;

    const applyTheme = (theme) => {
        docElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);

    themeSwitcher.addEventListener('click', () => {
        const currentTheme = docElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    });

    // --- 3. Staggered Load-in Animation ---
    const animatedSections = document.querySelectorAll('.content-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100); // Stagger delay
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedSections.forEach(section => {
        observer.observe(section);
    });
    
    // --- 4. Copyright Year ---
    const copyrightYearSpan = document.getElementById('copyright-year');
    if (copyrightYearSpan) {
        copyrightYearSpan.textContent = new Date().getFullYear();
    }

});


