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

console.log(headingP);

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
