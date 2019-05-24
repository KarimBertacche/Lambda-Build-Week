// Navigation bar scrolling functionality
window.addEventListener('scroll', event => {
    const navBar = document.querySelector('.navigation');
    if(event.currentTarget.scrollY > 200) { 
        navBar.style.opacity = '.1';
    } else if(event.currentTarget.scrollY < 200){
        navBar.style.opacity = '1';
    }

    if(event.currentTarget.scrollY > 1232) { 
        navBar.classList.add('fixed'); 
        navBar.style.opacity = '1';
        navBar.style.zIndex = '200';
        navBar.style.transition = 'all .5s';  
    } else if(event.currentTarget.scrollY < 1232){
        navBar.classList.remove('fixed');
    }
});

window.addEventListener('scroll', event => {
    const cards = document.querySelector('.cta-card');
    if(event.currentTarget.scrollY > 2700) {
        setTimeout(() => {
            cards.style.transform = 'translateY(0)';
            cards.style.transition = 'all 1.3s';
        }, 1000)   
    } else if (event.currentTarget.scrollY < 2700) {
        cards.style.transform = 'translateY(200%)';
        cards.style.transition = 'all 1.3s';
    }
});