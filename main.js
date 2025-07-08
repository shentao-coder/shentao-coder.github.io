document.addEventListener('DOMContentLoaded', function() {

    // --- Theme Toggle Logic ---
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

    // --- Spotlight Focus Interaction ---
    const listContainers = document.querySelectorAll('.list-container');

    listContainers.forEach(container => {
        const listItems = container.querySelectorAll('.list-item');
        
        listItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                listItems.forEach(sibling => {
                    if (sibling !== item) {
                        sibling.classList.add('is-faded');
                    }
                });
            });

            item.addEventListener('mouseleave', () => {
                listItems.forEach(sibling => {
                    sibling.classList.remove('is-faded');
                });
            });
        });
    });
});
