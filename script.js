const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

const openMenu = function(){
    mobileMenu.classList.toggle("hidden");
};

menuBtn.addEventListener('click', openMenu);