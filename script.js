document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('checkbox');

    // Function to set the theme
    const setTheme = (isDark) => {
        if (isDark) {
            document.body.classList.add('dark-mode');
            themeSwitch.checked = true;
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            themeSwitch.checked = false;
            localStorage.setItem('theme', 'light');
        }
    };

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    // Check for user's system preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark') {
        setTheme(true);
    } else if (savedTheme === 'light') {
        setTheme(false);
    } else {
        // If no saved theme, use system preference
        setTheme(prefersDark);
    }

    // Add event listener for the toggle
    themeSwitch.addEventListener('change', () => {
        setTheme(themeSwitch.checked);
    });
});



