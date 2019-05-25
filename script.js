//Add prevent default to footer Icons
let icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
    icon.addEventListener('click', event => {
        event.preventDefault();
    });
});


//On page load animation for header content
const headingP = document.querySelector('.heading-primary');
const heroText = document.querySelector('.hero-text');

window.addEventListener('load', () => {
    headingP.style.animationName = 'slideToTop';
    headingP.style.animationDuration = '3s';
    headingP.style.animationTimingFunction = 'ease-out';

    heroText.style.animationName = 'slideFromTop';
    heroText.style.animationDuration = '3s';
    heroText.style.animationTimingFunction = 'ease-out';
});


//Log In menu toggle
const logInBtn = document.querySelector('.login');
const logInMenu = document.querySelector('.logIn');
const bar = document.querySelector('.navigation');

logInBtn.addEventListener('click', () => {
    logInMenu.classList.toggle('active');
    bar.classList.toggle('border');
})


//Toggle menu bar with smaller screen sizes
const menuBtn = document.querySelector('.menu-btn');
const menuBar = document.querySelector('.menu');
const menuList = document.querySelector('.menu-list');

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('clicked');
    if(menuBar.className === 'menu clicked') {
        menuList.style.transform = 'translateX(0)';
        menuList.style.display= 'flex';
        bar.classList.add('border');
    } else {
        menuList.style.transform = 'translateX(100%)';
        menuList.style.display= 'none'; 
        bar.classList.remove('border');
    }
});
