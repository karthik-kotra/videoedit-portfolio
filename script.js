// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Video hover for showreel
const showreel = document.getElementById('showreel');
if (showreel) {
  const videoWrapper = showreel.parentElement;
  videoWrapper.addEventListener('mouseenter', () => showreel.play());
  videoWrapper.addEventListener('mouseleave', () => showreel.pause());
}

// Reel cards hover play/pause
const reelCards = document.querySelectorAll('.reel-card');

reelCards.forEach(card => {
  const video = card.querySelector('video');

  if (video) {
    card.addEventListener('mouseenter', () => {
      video.muted = false; // Ensure muted
      video.play().catch(err => console.log("Video play failed:", err));
    });

    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  }
});

// Contact form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    console.log('Form submitted:', data);
    contactForm.reset();
    alert("Thanks for your message! I’ll get back to you soon.");
  });
}

// Scroll to top
const scrollTopButton = document.getElementById('scroll-top');
if (scrollTopButton) {
  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navDesktop = document.querySelector('.nav-desktop');
if (menuToggle && navDesktop) {
  menuToggle.addEventListener('click', () => {
    navDesktop.classList.toggle('active');
  });
}

// Console Log
console.log("Karthik's Portfolio Loaded!");
const watchbutton = document.querySelector('.watch-button');
watchbutton.addEventListener('click',()=>{
    window.open("https://drive.google.com/file/d/1j4VNerdEVWl4ggJ9JzyhwgXFhlwjslE9/view?usp=sharing","_blank");
});
