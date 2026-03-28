// johnboen.com — main.js

document.addEventListener('DOMContentLoaded', () => {

    // Mobile nav toggle
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            toggle.classList.toggle('active');
            toggle.setAttribute('aria-expanded', isOpen);
        });

        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                toggle.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Highlight active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-link');

    function updateActiveLink() {
        const scrollY = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollY >= top && scrollY < top + height) {
                navItems.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();

    // Expandable card details
    document.querySelectorAll('.card-expand-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.card');
            const isExpanded = card.classList.toggle('expanded');
            btn.setAttribute('aria-expanded', isExpanded);
            btn.textContent = isExpanded ? 'Less' : 'Details';
        });
    });
});
