document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
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
