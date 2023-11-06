let signUpBtn = document.getElementById('signUp');
let logInBtn = document.getElementById('logIn');
let mainDiv = document.getElementById('main');

signUpBtn.addEventListener('click', () => {
    mainDiv.classList.add("right-panel-active");
});

logInBtn.addEventListener('click', () => {
    mainDiv.classList.remove("right-panel-active");
});