const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('confirm password');

let showError = (domElement,errorMessage) => {
    const formControl = domElement.parentElement;
    const small = formControl.querySelector('small');

    formControl.className ='form-control error';
    small.innerText = errorMessage;
}

let showSuccess = domElement => domElement.parentElement.className = 'form-control success';

function checkRequired(elementList){
    elementList.forEach( element =>{
        if(element.value === ''){
            showError(element,`${element.id} is required`);
        }else{
            showSuccess(element);
        }
    })
}

function checkLength(domElement,minimum,maximum){
    if(domElement.value.length<minimum){
        showError(domElement,`${domElement.id} length should be greater than ${minimum}`);
    }else if(domElement.value.length>maximum){
        showError(domElement,`${domElement.id} length should be lesser than than ${maximum}`);
    }else{
        showSuccess(domElement);
    }
}
function checkEmail(emailDomElement){
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(emailRegex.test(String(emailDomElement.value).toLowerCase())){
        showSuccess(emailDomElement);
    }else{
        showError(emailDomElement,`${emailDomElement.id} is not a vaild email adddress please verify`);
    }
}
function checkPasswordMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,`Password don't match with each other`);
    }
}
form.addEventListener('submit', e =>{
    e.preventDefault();
    checkRequired([username,email,password,password2]);
    checkLength(username,4,15);
    checkLength(password,4,15);
    checkEmail(email);
    checkPasswordMatch(password,password2);
})