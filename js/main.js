/* Selectors */
const loginButton = document.querySelector('.navbar-right-container');
const closeLoginButton = document.querySelector('.close-login');

/* Event listeners */
loginButton.addEventListener('click', showLoginPopup);
closeLoginButton.addEventListener("click", closeLoginPopup);

/* Functions */
function showLoginPopup(event) {
    event.preventDefault();
    document.querySelector('.login-background').setAttribute('style', 'display: flex');
}


function closeLoginPopup(event) {
    event.preventDefault();
    document.querySelector('.login-background').setAttribute('style', 'display: none');
}