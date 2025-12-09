// main.js - extracted from inline script
// Handles navbar scroll styles, smooth scrolling, and mobile menu toggle

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // If the link points to a valid id on the page, scroll to it
        const href = this.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // close mobile menu if open
                const navLinks = document.querySelector('.nav-links');
                if (navLinks && getComputedStyle(navLinks).display === 'flex' && window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
            }
        }
    });
});

// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;

    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.backgroundColor = 'var(--warm-white)';
        navLinks.style.padding = '2rem';
        navLinks.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    }
}
