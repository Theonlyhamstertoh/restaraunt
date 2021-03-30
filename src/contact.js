import pinpointIcon from '/dist/images/pinpoint.svg'; 
const renderContactPage = () => {
    const contactHTML = `
    <div class='contactPage'>
        <div class='contactInfo'>
            <div class='guest'>
                <div class='description'>
                    <h2>CONTINUE AS GUEST</h2>
                    <span>We will need this information to send you our most delicious food</span>
                </div>
                <form class='buttonContainer'>
                    <input class='contactbuttons' type='text' placeholder="Street Address">
                    <input class='contactbuttons' type='text' placeholder="Apt, Suite, room">
                    <div class='storeZipWrapper'>
                        <input class='contactbuttons' id='findStore' type='button' value='FIND STORE'> 
                        <input class='contactbuttons' id='zip' type='text' placeholder='ZIP'>
                    </div>
                </form>
            </div>
            <div class='existingUser'>
                <div class='description'>
                    <h2>Or Sign In</h2>
                    <div>Already have an account? Directly sign in from here.</div>
                </div>
                <form class='buttonContainer'>
                    <input class='contactbuttons' type='text' placeholder='E-mail'>
                    <input class='contactbuttons' type='text' placeholder='Password'>
                    <input class='contactbuttons' type='button' id='signin'value= 'SIGN IN'>
                </form>
            
            </div>
        </div>
        <div class='map'></div>
        <a target='_blank' href='https://www.google.com/maps/place/Antarctic+Ice+shield/@-75.7785991,17.6940684,4.56z/data=!4m16!1m10!4m9!1m3!2m2!1d21.5414925!2d-75.961016!1m3!2m2!1d37.3478298!2d55.8563575!3e0!3m4!1s0xa562e2182e0470f5:0x758e6c6d9775b34d!8m2!3d-81.844359!4d72.5528117?hl=en'><img id='pinpoint' src='${pinpointIcon}'></a>
       
        
    </div> `
    const createPage = document.createRange().createContextualFragment(contactHTML);
    
    const main = document.querySelector('.main');
    main.appendChild(createPage);
    
};

export {renderContactPage};