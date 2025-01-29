// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    // Toggle navigation menu
    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });

    // Hide menu on scroll
    window.addEventListener("scroll", () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });

    // Initialize Typed.js animation
    if (document.querySelector(".role")) {
        new Typed(".role", {
            strings: [
                "Frontend Developer",
                "Coder",
                "UI/UX Designer",
                "Graphic Designer",
            ],
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 1000,
            loop: true,
            // showCursor: false,
        });
    }
});
