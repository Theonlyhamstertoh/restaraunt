(()=>{"use strict";var e={794:(e,t,i)=>{e.exports=i.p+"cbe355f8adaf65e3ade6.svg"},578:(e,t,i)=>{e.exports=i.p+"c83bbb962c0e30d05342.svg"},90:(e,t,i)=>{e.exports=i.p+"648bcda71ebe89697a48.svg"}},t={};function i(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,i),s.exports}i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{const e=()=>{const e=document.createRange().createContextualFragment("\n    <div class='homePage'>\n        <span class='homeTitle' ><span style='color:red; font-weight: 800;';>HAAAM</span>BURGER</span>\n        <p class='homeText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rem animi, excepturi iste ab perferendis obcaecati tenetur quas est, id culpa laboriosam aspernatur, ipsam sequi corrupti nulla adipisci temporibus impedit necessitatibus aliquid praesentium aut sunt ullam labore? Illum odit atque itaque iste officiis placeat esse pariatur eligendi ea exercitationem aut dicta velit id minus non error, sapiente quaerat, deserunt voluptate fugiat. Veniam, ipsum. Amet in quisquam corporis ex sit consectetur quod tempora hic fuga qui, natus voluptates totam odit deserunt rem deleniti commodi repellat id, incidunt aspernatur dolor dignissimos maxime. Praesentium deleniti similique enim laudantium, delectus quisquam et a iste.\n        </p>\n        <p class='homeText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eveniet illum, quaerat eius quos ut neque tempore soluta. Quo, reprehenderit? ipsum dolor sit amet consectetur, adipisicing elit. Fuga, quasi ipsum dolor, sit amet consectetur adipisicing elit. Quod, quas!\n        </p>\n    </div>\n    <div class='hamburgerImage'></div>");document.querySelector(".main").appendChild(e)};var t=i(578),n=i(90),a=i(794);const s=()=>{const e=document.getElementById("menu"),t=document.querySelector(".sidebar"),i=document.getElementById("arrow"),n=document.querySelector(".main"),a=document.querySelector(".header"),s=document.getElementById("content");e.addEventListener("click",(function(){t.style.display="block",t.classList.add("transitionSidebar")})),i.addEventListener("click",r);let o=!1;function r(){o=!1,t.classList.add("closeSidebar"),window.setTimeout((()=>{t.style.display="none",t.classList.remove("closeSidebar"),t.classList.remove("transitionSidebar")}),500)}return{checkClickPosition:function(e){o=!0,console.log(e),!0===o&&(e!==n&&e!==a&&e!==s||r())}}},o=document.querySelector(".main");!function(){o.classList.add("fadeIn"),window.setTimeout((()=>o.classList.remove("fadeIn")),300),(()=>{const e=`\n    <span id='title'><span id='coolB'>HAAAM</span>BURGER </span>\n    <div class='navicons'>\n        <img  class='button' id='cart' alt='shopping cart icon' src='${t}'>\n        <img id='menu' class='button' src='${n}'>\n    </div>\n    \n    <div class='sidebar'>\n        <img class='button' id='arrow' src='${a}'>\n        <div class='buttonContainer'>\n            <input type='button' class='button' id='home' value='HOME'>\n            <input type='button' class='button' id='foodMenu' value='MENU'>\n            <input type='button' class='button' id='about' value='ABOUT'>\n            <input type='button' class='button' id='contact' value='CONTACT'>\n        </div>\n</div>`,i=document.createRange().createContextualFragment(e);document.querySelector(".header").appendChild(i)})(),s(),e();const i=document.getElementById("home"),r=document.getElementById("about"),c=document.getElementById("foodMenu"),u=document.getElementById("contact");i.addEventListener("click",(()=>{o.classList.add("fadeOut"),window.setTimeout((()=>o.classList.remove("fadeOut")),300),window.setTimeout((()=>{o.innerHTML="",e(),o.classList.add("fadeIn")}),300),window.setTimeout((()=>o.classList.remove("fadeIn")),600)})),r.addEventListener("click",(()=>{o.classList.add("fadeOut"),window.setTimeout((()=>o.classList.remove("fadeOut")),300),window.setTimeout((()=>{o.innerHTML="",(()=>{const e=document.createRange().createContextualFragment("<div class='aboutpage'>\n    <h1 class='aboutUs'>. ABOUT US</h1>\n    <div class='aboutInfo'>\n    \n    \n        <article>\n            <h1>WHO WE ARE </h1>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur totam doloremque quam enim magni facere excepturi porro aut provident nihil nobis, debitis at quia vero. Sequi excepturi fugit temporibus consequatur error inventore a itaque repellat perferendis? Minima, recusandae est mollitia saepe deserunt.</p>\n    \n            <br>\n            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere aliquam non, eos fugit accusantium fugiat sequi eaque dolores porro minima.</p>\n        </article>\n    \n        <article>\n            <h1>WHAT WE ARE ABOUT</h1>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur totam doloremque quam enim magni facere excepturi porro aut provident nihil nobis, debitis at quia vero. Sequi excepturi fugit temporibus consequatur error inventore a itaque repellat perferendis? Minima, recusandae est mollitia saepe deserunt, iste autem tempore hic id magni facere nulla a totam sit reprehenderit doloribus impedit quidem eum ullam consequatur necessitatibus earum voluptatibus accusantium aut.</p>\n    \n            <br>\n            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere aliquam non, eos fugit accusantium fugiat sequi eaque dolores porro minima.</p>\n        </article>\n        <article>\n            <h1>OUR MISSION</h1>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur totam doloremque quam enim magni facere excepturi porro aut provident nihil nobis, debitis at quia vero. Sequi excepturi fugit temporibus consequatur error inventore a itaque repellat perferendis? Minima, recusandae est mollitia saepe deserunt, iste autem tempore hic id magni facere nulla a totam sit reprehenderit doloribus impedit quidem eum ullam consequatur necessitatibus earum</p>\n        </article>\n    \n        <article>\n            <h1>OUR HISTORY</h1>\n            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere aliquam non, eos fugit accusantium fugiat sequi eaque dolores porro minima.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur totam doloremque quam enim magni facere excepturi porro aut provident nihil nobis, debitis at quia vero.</p>\n        </article>\n    </div>\n    </div>");document.querySelector(".main").appendChild(e)})(),o.classList.add("fadeIn")}),300),window.setTimeout((()=>o.classList.remove("fadeIn")),600)})),u.addEventListener("click",(()=>{o.classList.add("fadeOut"),window.setTimeout((()=>o.classList.remove("fadeOut")),300),window.setTimeout((()=>{o.innerHTML="",(()=>{const e=document.createRange().createContextualFragment("\n    <div class='contactPage'>\n        <div class='contactInfo'>\n            <div class='guest'>\n                <div class='description'>\n                    <h2>CONTINUE AS GUEST</h2>\n                    <span>We will need this information to send you our most delicious food</span>\n                </div>\n                <form class='buttonContainer'>\n                    <input class='contactbuttons' type='text' placeholder=\"Street Address\">\n                    <input class='contactbuttons' type='text' placeholder=\"Apt, Suite, room\">\n                    <div class='storeZipWrapper'>\n                        <input class='contactbuttons' id='findStore' type='button' value='FIND STORE'> \n                        <input class='contactbuttons' id='zip' type='text' placeholder='ZIP'>\n                    </div>\n                </form>\n            </div>\n            <div class='existingUser'>\n                <div class='description'>\n                    <h2>Or Sign In</h2>\n                    <div>Already have an account? Directly sign in from here.</div>\n                </div>\n                <form class='buttonContainer'>\n                    <input class='contactbuttons' type='text' placeholder='E-mail'>\n                    <input class='contactbuttons' type='text' placeholder='Password'>\n                    <input class='contactbuttons' type='button' id='signin'value= 'SIGN IN'>\n                </form>\n            \n            </div>\n        </div>\n        <div class='map'></div>\n        <a target='_blank' href='https://www.google.com/maps/place/Antarctic+Ice+shield/@-75.7785991,17.6940684,4.56z/data=!4m16!1m10!4m9!1m3!2m2!1d21.5414925!2d-75.961016!1m3!2m2!1d37.3478298!2d55.8563575!3e0!3m4!1s0xa562e2182e0470f5:0x758e6c6d9775b34d!8m2!3d-81.844359!4d72.5528117?hl=en'><img id='pinpoint' src='/dist/images/pinpoint.png'></a>\n       \n        \n    </div> ");document.querySelector(".main").appendChild(e)})(),o.classList.add("fadeIn")}),300),window.setTimeout((()=>o.classList.remove("fadeIn")),600)})),c.addEventListener("click",(()=>{o.classList.add("fadeOut"),window.setTimeout((()=>o.classList.remove("fadeOut")),300),window.setTimeout((()=>{o.innerHTML="",(()=>{const e=document.createRange().createContextualFragment("\n    <div class='menuPage'>\n         <img id='burgermenu' src='/dist/images/Screenshot 2021-03-29 180023.png'>\n        <div class='singleburger'>\n            <img class='burgerImage' src='/dist/images/burger1.png'>\n            <img class='burgerImage' src='/dist/images/burger2.png'>\n            <img class='burgerImage' src='/dist/images/burger3.png'>\n            <img class='burgerImage' src='/dist/images/hamburger4.png'>\n            <img class='burgerImage' src='/dist/images/burger5.png'>\n            <img class='burgerImage' src='/dist/images/burger6.png'>\n        </div>\n    </div>");document.querySelector(".main").appendChild(e)})(),o.classList.add("fadeIn")}),300),window.setTimeout((()=>o.classList.remove("fadeIn")),600)}))}(),window.addEventListener("click",(e=>{s().checkClickPosition(e.target.parentElement)}))})()})();