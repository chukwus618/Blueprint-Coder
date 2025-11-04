document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('hamburger');
  const closeBtn = document.getElementById('close-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const body = document.querySelector('body');
  const navLinks = document.querySelectorAll('.nav-links');
  menu.addEventListener('click', () => {
    mobileNav.classList.add('show');
    body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('show');
    body.style.overflow = 'scroll';
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('show');
      body.style.overflow = 'scroll';
    });
  });
});