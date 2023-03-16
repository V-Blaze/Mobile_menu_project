const mobileMenu = document.getElementById('mobile-nav');
const mobileMenuBars = document.querySelector('.menu-bars');
const menuCloseBtn = document.querySelector('.close-menu-bars');
const navLinks = document.querySelectorAll('.mobile-nav-link');
// const navLink = document.querySelectorAll('.mobile-nav-links');

mobileMenuBars.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
});

menuCloseBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

navLinks.forEach((item) => item.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  mobileMenu.style.display = 'block';
}));