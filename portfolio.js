// Portfolio JavaScript

// Update copyright year
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Smooth scroll for navigation links (if you add navigation later)
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const animatedElements = document.querySelectorAll('.card, .skill-card, .project-card, .leadership-card, .reference-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Button interactions
    const buttons = document.querySelectorAll('.btn, .btn-social');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Contact button functionality
    const contactButtons = document.querySelectorAll('.btn-primary');
    contactButtons.forEach(button => {
        if (button.textContent.includes('Get In Touch') || button.textContent.includes('Send Message')) {
            button.addEventListener('click', function() {
                window.location.href = 'mailto:ywashika@gmail.com';
            });
        }
    });
    
    // GitHub and LinkedIn button functionality (update with actual URLs)
    const githubButtons = document.querySelectorAll('.btn');
    githubButtons.forEach(button => {
        if (button.textContent.includes('GitHub')) {
            button.addEventListener('click', function() {
                // Replace with actual GitHub URL
                alert('Add your GitHub profile URL here');
                // window.open('https://github.com/yourusername', '_blank');
            });
        }
        if (button.textContent.includes('LinkedIn')) {
            button.addEventListener('click', function() {
                // Replace with actual LinkedIn URL
                alert('Add your LinkedIn profile URL here');
                // window.open('https://linkedin.com/in/yourusername', '_blank');
            });
        }
    });
    
    // Social media buttons
    const socialButtons = document.querySelectorAll('.btn-social');
    socialButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            if (index === 0) {
                // GitHub button
                alert('Add your GitHub profile URL here');
                // window.open('https://github.com/yourusername', '_blank');
            } else if (index === 1) {
                // LinkedIn button
                alert('Add your LinkedIn profile URL here');
                // window.open('https://linkedin.com/in/yourusername', '_blank');
            }
        });
    });
    
    // Image placeholder functionality
    // This allows you to easily update the images
    const profileImg = document.getElementById('profile-img');
    const projectImg = document.getElementById('project-img');
    
    // Example: You can set the images programmatically
    // profileImg.src = 'path/to/your/profile-photo.jpg';
    // projectImg.src = 'path/to/bosslady-salon-screenshot.jpg';
    
    console.log('Portfolio loaded successfully!');
    console.log('To update images:');
    console.log('1. Replace profile-img src with your profile photo path');
    console.log('2. Replace project-img src with Bosslady Salon screenshot path');
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section (optional enhancement)
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});
