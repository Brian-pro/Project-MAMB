/* Selectors */
const loginButton = document.querySelector('.login-btn');
const signupButton = document.querySelector('.signup-btn');
const signupButton2 = document.querySelector('.signup-btn-2');
const closeLoginButton = document.querySelector('.close-login-modal');
const closeSignupButton = document.querySelector('.close-signup-modal');

/* Event listeners */
loginButton.addEventListener('click', showPopup);
signupButton.addEventListener('click', showPopup);
signupButton2.addEventListener('click', showPopup);
closeLoginButton.addEventListener('click', closePopup);
closeSignupButton.addEventListener('click', closePopup);

/* Functions */

/* showLoginPopup
    - Allows navbar login button to display login modal
      popup. Done by changing from display: none -> display: flex

      This now also works for the sign up button as well!
*/
function showPopup(event) {
    event.preventDefault();

    if(event.target.classList[0] === 'login-btn') {
        document.querySelector('.login-background').setAttribute('style', 'display: flex');
        document.querySelector('.signup-background').setAttribute('style', 'display: none');
    }
    else {
        document.querySelector('.signup-background').setAttribute('style', 'display: flex');
        document.querySelector('.login-background').setAttribute('style', 'display: none');
    }
}

/* closeLoginPopup
    - Allows user exit out of login modal popup. Done
      by changing display: flex -> display: none
*/
function closePopup(event) {
    event.preventDefault();
    
    if (event.target.classList[2] === 'close-login-modal') {
        document.querySelector('.login-background').setAttribute('style', 'display: none');
    }
    else {
        document.querySelector('.signup-background').setAttribute('style', 'display: none');
    }
}