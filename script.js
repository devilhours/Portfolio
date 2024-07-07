document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links').querySelector('ul');
    const menuToggle = document.querySelector('.menu-toggle');
    const links = navLinks.querySelectorAll('a'); // Select all links inside the navigation menu
  
    // Toggle menu and menu icon/button on hamburgerMenu click
    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
  
    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
});
