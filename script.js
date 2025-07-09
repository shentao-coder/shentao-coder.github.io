// script.js - Final Top-Tier Logic

document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Switcher ---
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
    
    // --- Staggered Animation on Load ---
    const animatedElements = document.querySelectorAll('.hero-section, .research-card, .timeline-item, .content-section > .section-title');
    animatedElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 100}ms`;
    });

    // --- Copyright Year ---
    const copyrightYearSpan = document.getElementById('copyright-year');
    if (copyrightYearSpan) {
        copyrightYearSpan.textContent = new Date().getFullYear();
    }

});
