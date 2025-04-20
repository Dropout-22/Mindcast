// Hamburger toggle
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('header nav');
  
    if (hamburger && nav) {
      hamburger.addEventListener('click', () => {
        nav.classList.toggle('show');
      });
    }
  
    // Toggle menu for post pages
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
  
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
      });
    }
});

window.addEventListener('load', () => {
    document.querySelector('.hero').classList.add('loaded');
});

// Dark/Light Mode Toggle
const toggleSwitch = document.getElementById('theme-switch');
const body = document.body;
const sunIcon = document.querySelector('.slider .icon:first-child'); // ☀️
const moonIcon = document.querySelector('.slider .icon:last-child'); // 🌙

// Apply saved theme on load
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    toggleSwitch.checked = true;
    sunIcon.style.opacity = '0';
    moonIcon.style.opacity = '1';
} else {
    sunIcon.style.opacity = '1';
    moonIcon.style.opacity = '0';
}

// Toggle theme
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        sunIcon.style.opacity = '0';
        moonIcon.style.opacity = '1';
    } else {
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        sunIcon.style.opacity = '1';
        moonIcon.style.opacity = '0';
    }
});


// Parallax on scroll
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
    }
});
  
// Enhanced scroll animation with stagger
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

const revealSections = document.querySelectorAll('section, .card');

revealSections.forEach((el, i) => {
  el.style.transitionDelay = `${i * 100}ms`;
  el.classList.add('hidden');
  observer.observe(el);
});

document.querySelectorAll('.card-container').forEach(container => {
    const card = container.querySelector('.card');
  
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the card
      const y = e.clientY - rect.top;  // y position within the card
  
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
  
      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * -10;
  
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  
    container.addEventListener('mouseleave', () => {
      card.style.transform = `rotateX(0) rotateY(0)`;
    });
});