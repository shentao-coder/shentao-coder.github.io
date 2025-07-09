// script.js - Final Immersive Logic

document.addEventListener('DOMContentLoaded', () => {

    // --- Header Scroll Effect ---
    const header = document.querySelector('.main-header');
    const scrollContainer = document.querySelector('.scroll-container');
    if (header && scrollContainer) {
        scrollContainer.addEventListener('scroll', () => {
            if (scrollContainer.scrollTop > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

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
        const newTheme = docElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    });
    
    // --- Copyright Year ---
    const copyrightYearSpan = document.getElementById('copyright-year');
    if (copyrightYearSpan) {
        copyrightYearSpan.textContent = new Date().getFullYear();
    }

});






