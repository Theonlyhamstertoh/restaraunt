const renderHomePage = (() => {
    const homeHTML = `
    <div class='homePage'>
        <span class='homeTitle' ><span style='color:red; font-weight: 800;';>HAAAM</span>BURGER</span>
        <p class='homeText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rem animi, excepturi iste ab perferendis obcaecati tenetur quas est, id culpa laboriosam aspernatur, ipsam sequi corrupti nulla adipisci temporibus impedit necessitatibus aliquid praesentium aut sunt ullam labore? Illum odit atque itaque iste officiis placeat esse pariatur eligendi ea exercitationem aut dicta velit id minus non error, sapiente quaerat, deserunt voluptate fugiat. Veniam, ipsum. Amet in quisquam corporis ex sit consectetur quod tempora hic fuga qui, natus voluptates totam odit deserunt rem deleniti commodi repellat id, incidunt aspernatur dolor dignissimos maxime. Praesentium deleniti similique enim laudantium, delectus quisquam et a iste.
        </p>
        <p class='homeText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eveniet illum, quaerat eius quos ut neque tempore soluta. Quo, reprehenderit? ipsum dolor sit amet consectetur, adipisicing elit. Fuga, quasi ipsum dolor, sit amet consectetur adipisicing elit. Quod, quas!
        </p>
    </div>
    <div class='hamburgerImage'></div>`
    const createPage = document.createRange().createContextualFragment(homeHTML);
    
    const main = document.querySelector('.main');
    main.appendChild(createPage);
})();

export {renderHomePage};