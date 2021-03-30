const renderNavigation = (() => {
    const navHTML = `
    
    <span id='title'><span id='coolB'>HAAAM</span>BURGER </span>
    <div class='navicons'>
        <input type='image'  class='button' id='cart' alt='shopping cart' src='/dist/images/cart.svg'>
        <input type='image' id='menu' class='button' src='/dist/images/menu.svg'>
    </div>
    
    <div class='sidebar'>
        <input type='image' class='button' id='arrow' src='/dist/images/arrow.svg'>
        <div class='buttonContainer'>
            <input type='button' class='button' id='home' value='HOME'>
            <input type='button' class='button' id='foodMenu' value='MENU'>
            <input type='button' class='button' id='about' value='ABOUT'>
            <input type='button' class='button' id='contact' value='CONTACT'>
        </div>
</div>`
    const createPage = document.createRange().createContextualFragment(navHTML);
    
    const header = document.querySelector('.header');
    header.appendChild(createPage);
})();


export default renderNavigation;