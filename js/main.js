const links = document.querySelectorAll('.nav-right a');
const path = window.location.pathname.replace(/\/$/, '');

links.forEach(link => {
  const href = link.getAttribute('href').replace(/\/$/, '');

  if (href === path) {
    link.classList.add('active');
  }
});

function toggleMenu() {
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  const navMenu = document.getElementById('navMenu');
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
    navMenu.classList.remove('active');
  }
});