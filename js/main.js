/* Selectors */
const loginButton = document.querySelector('.navbar-right-container');
const closeLoginButton = document.querySelector('.close-login');

/* Event listeners */
loginButton.addEventListener('click', showLoginPopup);
closeLoginButton.addEventListener('click', closeLoginPopup);

/* Functions */
function showLoginPopup(event) {
    document.querySelector('.login-background').classList.add('show');
}

function closeLoginPopup() {
    document.querySelector('.login-background').style.display = 'none';
}