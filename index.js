const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu-phone')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

})