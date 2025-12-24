/* script.js */

const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');
const allLinks = document.querySelectorAll('.nav-links a');

menuIcon.addEventListener('click', () => {
    // Toggle 'active' class on BOTH the menu and the icon
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
});

allLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Close both when a link is clicked
        navLinks.classList.remove('active');
        menuIcon.classList.remove('active');
    });
});