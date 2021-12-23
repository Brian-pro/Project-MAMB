/* Selectors */
const loginButton = document.querySelectorAll('.login-btn');
const signupButton = document.querySelectorAll('.signup-btn');
const closeModal = document.querySelectorAll('.close-modal');
const createAcc = document.querySelectorAll('.singup-continue-btn');


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
createAcc.forEach(btn => {
    btn.addEventListener('click', createAccount);
});

/* Temporary user data */ 
var userAccounts = [
    {
        email: 'bob@123.com',
        password: 'pizza'
    }
]

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

/* createAccount
    - 
*/
function createAccount(event) {
    event.preventDefault();
    var newEmail = document.querySelector('.newEmail').value;
    var newPassword = document.querySelector('.newPassword').value;

    console.log(newEmail + ' is your email and your password is ' + newPassword);

    // userAccounts.push();
}