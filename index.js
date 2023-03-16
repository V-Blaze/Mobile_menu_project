const mobileMenu = document.getElementById('mobile-nav');
const mobileMenuBars = document.querySelector('.menu-bars');
const menuCloseBtn = document.querySelector('.close-menu-bars');
const navLinks = document.querySelectorAll('.mobile-nav-link');

mobileMenuBars.addEventListener('click', (e) => {
    mobileMenu.style.display = 'block'
})

menuCloseBtn.addEventListener('click', (e) => {
    mobileMenu.style.display = 'none'
})

navLinks.forEach((item) => item.addEventListener('click', (e)=> {
    mobileMenu.style.display = 'none'
    mobileMenu.style.display = 'block'
}))