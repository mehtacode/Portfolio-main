document.addEventListener("DOMContentLoaded", function () {
    // ScrollReveal animations
    ScrollReveal().reveal('.animate-fade-in', { 
        delay: 200, 
        distance: '50px', 
        origin: 'bottom', 
        duration: 1000,
        reset: false
    });

    ScrollReveal().reveal('.animate-slide-up', { 
        delay: 400, 
        distance: '50px', 
        origin: 'top', 
        duration: 1000,
        reset: false
    });

    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
    });
});
