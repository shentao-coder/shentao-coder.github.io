// script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Theme Switcher ---
    const themeSwitcher = document.getElementById('theme-switcher');
    const docElement = document.documentElement; // Target the <html> element

    // Function to apply the theme
    const applyTheme = (theme) => {
        docElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // Check for system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Determine initial theme:
    // 1. If a theme is saved in localStorage, use it.
    // 2. Otherwise, if the user's system prefers dark mode, use dark.
    // 3. Otherwise, default to light.
    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (prefersDark) {
        applyTheme('dark');
    } else {
        applyTheme('light'); // Default
    }
    
    // Add click event listener to the switcher button
    themeSwitcher.addEventListener('click', () => {
        const currentTheme = docElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    });


    // --- Copyright Year ---
    const copyrightYearSpan = document.getElementById('copyright-year');
    if (copyrightYearSpan) {
        copyrightYearSpan.textContent = new Date().getFullYear();
    }
    
    // --- Optional: Scroll animations for timeline ---
    const timelineItems = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        observer.observe(item);
    });

});
