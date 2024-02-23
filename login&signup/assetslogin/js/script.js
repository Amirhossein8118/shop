// set $ instead of document
const $ = document;

// found element login container by querySelector
let loginContainer = $.querySelector('.login-container');
// found element signup by querySelectorAll
let signUp = $.querySelectorAll('.sign-up');
// found element signup container by querySelector
let signUpContainer = $.querySelector('.sign-up-container');
// found element login by querySelectorAll
let login = $.querySelectorAll('.login');
// found element check box by querySelector
let checkBox = $.querySelector('.check-box');
// found element check box img by querySelector
let checkBoxImg = $.querySelector('.check-box-img');

// add click event for change login page
signUp.forEach(item => {
    item.addEventListener("click" , function () {
        loginContainer.classList.add("display-none");
        signUpContainer.classList.add("display-flex");
    });
});

// add click event for change signup page
login.forEach(item => {
    item.addEventListener("click", function(){
        loginContainer.classList.remove("display-none");
        signUpContainer.classList.remove("display-flex");
    });
});

// add click event for change check box img
checkBox.addEventListener("click", function(){
    if (checkBox.checked) {
        checkBoxImg.setAttribute('src', './assetslogin/img/checkedBox.svg');
    }
    else{
        checkBoxImg.setAttribute('src', './assetslogin/img/checkbox.svg');
    }
});