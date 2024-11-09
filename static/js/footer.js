// Load footer component
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
        <div class="container">
            <div class="footer-content">
                <div class="footer-left">
                    <h3>Anukula Mohan Chandra</h3>
                    <p>Building digital experiences that matter.</p>
                </div>
                <div class="footer-links">
                    <div class="footer-section">
                        <h4>Navigation</h4>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="projects.html">Projects</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>Connect</h4>
                        <ul>
                            <li><a href="https://github.com" target="_blank">GitHub <i class="fab fa-github"></i></a></li>
                            <li><a href="https://linkedin.com" target="_blank">LinkedIn <i class="fab fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} Anukula Mohan Chandra. All rights reserved.</p>
            </div>
        </div>
    `;
});