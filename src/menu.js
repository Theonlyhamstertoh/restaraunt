import burger1 from '/dist/images/burger1.png'
import burger2 from '/dist/images/burger2.png'
import burger3 from '/dist/images/burger3.png'
import burger4 from '/dist/images/hamburger4.png'
import burger5 from '/dist/images/burger5.png'
import burger6 from '/dist/images/burger6.png'


const renderMenuPage = () => {

    const menuHTML = `
    <div class='menuPage'>
         <img id='burgermenu' src='/dist/images/Screenshot 2021-03-29 180023.png'>
        <div class='singleburger'>
            <img class='burgerImage' src='${burger1}'>
            <img class='burgerImage' src='${burger2}'>
            <img class='burgerImage' src='${burger3}'>
            <img class='burgerImage' src='${burger4}'>
            <img class='burgerImage' src='${burger5}'>
            <img class='burgerImage' src='${burger6}'>
        </div>
    </div>`
    const createPage = document.createRange().createContextualFragment(menuHTML);
    
    const main = document.querySelector('.main');
    main.appendChild(createPage);
};

export {renderMenuPage};