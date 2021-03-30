const renderAboutPage = () => {
    const aboutHTML = `<div class='aboutpage'>
    <h1 class='aboutUs'>. ABOUT US</h1>
    <div class='aboutInfo'>
    
    
        <article>
            <h1>WHO WE ARE </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur totam doloremque quam enim magni facere excepturi porro aut provident nihil nobis, debitis at quia vero. Sequi excepturi fugit temporibus consequatur error inventore a itaque repellat perferendis? Minima, recusandae est mollitia saepe deserunt.</p>
    
            <br>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere aliquam non, eos fugit accusantium fugiat sequi eaque dolores porro minima.</p>
        </article>
    
        <article>
            <h1>WHAT WE ARE ABOUT</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur totam doloremque quam enim magni facere excepturi porro aut provident nihil nobis, debitis at quia vero. Sequi excepturi fugit temporibus consequatur error inventore a itaque repellat perferendis? Minima, recusandae est mollitia saepe deserunt, iste autem tempore hic id magni facere nulla a totam sit reprehenderit doloribus impedit quidem eum ullam consequatur necessitatibus earum voluptatibus accusantium aut.</p>
    
            <br>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere aliquam non, eos fugit accusantium fugiat sequi eaque dolores porro minima.</p>
        </article>
        <article>
            <h1>OUR MISSION</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur totam doloremque quam enim magni facere excepturi porro aut provident nihil nobis, debitis at quia vero. Sequi excepturi fugit temporibus consequatur error inventore a itaque repellat perferendis? Minima, recusandae est mollitia saepe deserunt, iste autem tempore hic id magni facere nulla a totam sit reprehenderit doloribus impedit quidem eum ullam consequatur necessitatibus earum</p>
        </article>
    
        <article>
            <h1>OUR HISTORY</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere aliquam non, eos fugit accusantium fugiat sequi eaque dolores porro minima.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur totam doloremque quam enim magni facere excepturi porro aut provident nihil nobis, debitis at quia vero.</p>
        </article>
    </div>
    </div>`
    const createPage = document.createRange().createContextualFragment(aboutHTML);
    
    const main = document.querySelector('.main');
    main.appendChild(createPage);
};

export {renderAboutPage};