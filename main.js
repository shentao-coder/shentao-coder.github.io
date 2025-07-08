document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const targetTheme = currentTheme === 'day' ? 'night' : 'day';
            document.documentElement.setAttribute('data-theme', targetTheme);
            themeToggle.textContent = targetTheme === 'day' ? 'Switch to Night Edition' : 'Switch to Day Edition';
        });
    }

    // --- 2. Dynamic Date ---
    const dateElement = document.getElementById('current-date');
    if(dateElement) {
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = today.toLocaleDateString('en-US', options).toUpperCase();
    }
});
