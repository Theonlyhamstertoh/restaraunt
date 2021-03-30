const renderMenuPage = (() => {
    const menuHTML = `
    <div class='menuPage'>
         <img id='burgermenu' src='/dist/images/Screenshot 2021-03-29 180023.png'>
        <div class='singleburger'>
            <img style='width:500px' src='/dist/images/burger1.png'>
            <img src='/dist/images/burger2.png'>
            <img src='/dist/images/burger3.png'>
            <img src='/dist/images/hamburger4.png'>
            <img src='/dist/images/burger5.png'>
            <img src='/dist/images/burger6.png'>
        </div>
    </div>`
    const createPage = document.createRange().createContextualFragment(menuHTML);
    
    const main = document.querySelector('.main');
    main.appendChild(createPage);
})();

export {renderMenuPage};