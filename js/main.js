const links = document.querySelectorAll('.nav-right a');
const path = window.location.pathname.replace(/\/$/, '');

links.forEach(link => {
  const href = link.getAttribute('href').replace(/\/$/, '');

  if (href === path) {
    link.classList.add('active');
  }
});