//Grabs the DOM nodes corresponding with the mobile menu and its button.
const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

/*Function expression that will toggle the class hidden onto
the mobile menu when called.*/
const openMenu = function(){
    mobileMenu.classList.toggle("hidden");
};

//Attaches event listener that  executes the openMenu function.
menuBtn.addEventListener('click', openMenu);