/* Selectors */
const loginButton = document.querySelector('.navbar-right-container');
const closeLoginButton = document.querySelector('.close-login');

/* Event listeners */
loginButton.addEventListener('click', showLoginPopup);
closeLoginButton.addEventListener("click", closeLoginPopup);

/* Functions */

/* showLoginPopup
    - Allows navbar login button to display login modal
      popup. Done by changing from display: none -> display: flex
*/
function showLoginPopup(event) {
    event.preventDefault();
    document.querySelector('.login-background').setAttribute('style', 'display: flex');
}

/* closeLoginPopup
    - Allows user exit out of login modal popup. Done
      by changing display: flex -> display: none
*/
function closeLoginPopup(event) {
    event.preventDefault();
    document.querySelector('.login-background').setAttribute('style', 'display: none');
}