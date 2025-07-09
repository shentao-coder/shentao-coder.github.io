document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Theme Toggle Logic ---
    const themeToggle = document.querySelector('.theme-toggle-button');
    if (themeToggle) {
        const setInitialTheme = () => {
            const preferredTheme = localStorage.getItem('theme') || 'light';
            document.documentElement.setAttribute('data-theme', preferredTheme);
        };
        setInitialTheme();
        themeToggle.addEventListener('click', () => {
            let targetTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', targetTheme);
            localStorage.setItem('theme', targetTheme);
        });
    }

    // --- 2. Parallax Hover Interaction ---
    const gridContainer = document.querySelector('.grid-container');
    if (gridContainer) {
        gridContainer.addEventListener('mousemove', e => {
            const { clientX, clientY, currentTarget } = e;
            const { clientWidth, clientHeight } = currentTarget;

            // Calculate mouse position from center of the container
            const x = (clientX / clientWidth) - 0.5;
            const y = (clientY / clientHeight) - 0.5;

            // Apply transform to each card
            const cards = currentTarget.querySelectorAll('.info-card');
            cards.forEach(card => {
                // Adjust sensitivity by changing the multiplier (e.g., -10)
                const rotateX = y * -8;
                const rotateY = x * 8;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`;
            });
        });

        // Reset transform on mouse leave
        gridContainer.addEventListener('mouseleave', () => {
             const cards = gridContainer.querySelectorAll('.info-card');
             cards.forEach(card => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
             });
        });
    }

});

