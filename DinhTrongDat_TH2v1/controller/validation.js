const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const h1 = document.getElementById('title-user');

var isValidEmail = false;
var isValidPass = false;

function user(name, email, password, money){
    this.name = name;
    this.email = email;
    this.password = password;
    this.money = money;
}

var d = new user("Đinh Trọng Đạt" ,"dat@gmail.com", "123456", 5000000);

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
    if (isValidEmail && isValidPass) {
        window.location = "http://127.0.0.1:5500/views/home.html";
    }
});

function checkInputs() {
    // trim to remove the whitespaces
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue === '') {
        setErrorFor(email, 'Email không được bỏ trống');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email không đúng định dạng');
    } else if(emailValue==d.email){
        setSuccessFor(email);
        isValidEmail = true;
    }
    else{
        setErrorFor(email, 'Email sai hoặc chưa đúng');
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password không được bỏ trống');
    } else if(passwordValue==d.password){
        setSuccessFor(password);
        isValidPass = true;
    }
    else{
        setErrorFor(password, 'Password sai hoặc chưa đúng');
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    social_panel_container.classList.remove('visible')
});