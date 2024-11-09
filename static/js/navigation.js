// Load navigation component
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('navbar');
    nav.innerHTML = `
        <div class="nav-content">
            <a href="index.html" class="logo">AC</a>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <div class="menu-btn">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    `;

    // Mobile menu toggle
    const menuBtn = nav.querySelector('.menu-btn');
    const navLinks = nav.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});