// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Video hover play/pause
const showreel = document.getElementById('showreel');
const videoWrapper = showreel.parentElement;

videoWrapper.addEventListener('mouseenter', () => {
    showreel.play();
});

videoWrapper.addEventListener('mouseleave', () => {
    showreel.pause();
});

// Reel cards hover play/pause
const reelCards = document.querySelectorAll('.reel-card');

reelCards.forEach(card => {
    const video = card.querySelector('video');
    
    card.addEventListener('mouseenter', () => {
        video.play();
    });
    
    card.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });
});

// Contact form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Reset form
    contactForm.reset();
    alert('Thanks for your message! I\'ll get back to you soon.');
});

// Scroll to top
const scrollTopButton = document.getElementById('scroll-top');

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navDesktop = document.querySelector('.nav-desktop');

menuToggle.addEventListener('click', () => {
    navDesktop.classList.toggle('active');
});