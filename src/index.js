import { renderAboutPage } from "./about"
import { renderHomePage } from "./home"
import { renderMenuPage } from "./menu"
import { renderContactPage } from "./contact"
import { renderNavigation, navEffect } from "./navigation"

const main = document.querySelector('.main');

(function init() {
    main.classList.add('fadeIn');
    window.setTimeout(() => main.classList.remove('fadeIn'),300)
    renderNavigation();
    navEffect();
    renderHomePage();
    const home = document.getElementById('home');
    const about = document.getElementById('about');
    const foodMenu = document.getElementById('foodMenu');
    const contact = document.getElementById('contact');
    
    home.addEventListener('click', () => {
        main.classList.add('fadeOut');
        window.setTimeout(() => main.classList.remove('fadeOut'),300)
        window.setTimeout(() => {
            main.innerHTML = '';    
            renderHomePage();
            main.classList.add('fadeIn');
        },300)
        window.setTimeout(() => main.classList.remove('fadeIn'), 600)
    
      
    })
    about.addEventListener('click', () => {
        main.classList.add('fadeOut');
        window.setTimeout(() => main.classList.remove('fadeOut'),300)
        window.setTimeout(() => {
            main.innerHTML = '';    
            renderAboutPage();
            main.classList.add('fadeIn');
        },300)
        window.setTimeout(() => main.classList.remove('fadeIn'), 600)

    })
    contact.addEventListener('click', () => {
        main.classList.add('fadeOut');
        window.setTimeout(() => main.classList.remove('fadeOut'),300)
        window.setTimeout(() => {
            main.innerHTML = '';    
            renderContactPage()
            main.classList.add('fadeIn');
        },300)
        window.setTimeout(() => main.classList.remove('fadeIn'), 600)

    })
    foodMenu.addEventListener('click', () => {
        main.classList.add('fadeOut');
        window.setTimeout(() => main.classList.remove('fadeOut'),300)
        window.setTimeout(() => {
            main.innerHTML = '';    
            renderMenuPage()
            main.classList.add('fadeIn');
        },300)
        window.setTimeout(() => main.classList.remove('fadeIn'), 600)

    })
    
})()

window.addEventListener('click', (e) => {
    navEffect().checkClickPosition(e.target.parentElement)
})

