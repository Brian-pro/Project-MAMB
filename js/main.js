/* Selectors */
const loginButton = document.querySelectorAll('.login-btn');
const signupButton = document.querySelectorAll('.signup-btn');
const closeModal = document.querySelectorAll('.close-modal');

/* Event listeners */
loginButton.forEach(btn => {
    btn.addEventListener('click', showPopup);
});
signupButton.forEach(btn => {
    btn.addEventListener('click', showPopup);
});
closeModal.forEach(btn => {
    btn.addEventListener('click', closePopup)
});

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
    
    document.querySelector('.signup-background').setAttribute('style', 'display: none');
    document.querySelector('.login-background').setAttribute('style', 'display: none');
}