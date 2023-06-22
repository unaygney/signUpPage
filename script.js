const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

// ShowError

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const errorMessage = formControl.querySelector('.error-message');
    errorMessage.textContent = message
}
// ShowSuccess
function showSuccess(input){
    const formControl  = input.parentElement ; 
    formControl.className = 'form-control success'
}

// getUpperCase

function getUpperCase(input) {
 return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// email Validation

function checkEmail(input) {
    const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(input.value)){
        showSuccess(input)
    }else {
        showError(input , ` Looks like this is not an email.`)
    }
}


// Check Required
function checkRequired(inputArr) {
    inputArr.forEach(input => {

        if (input.value.trim() === '') {
            showError(input, `${getUpperCase(input)} cannot be empty`)
        } else {
            showSuccess(input)
        }
    });



}








form.addEventListener('submit', function (e) {
    e.preventDefault();


    checkRequired([firstname, lastname, email, password])
    checkEmail(email)
}) 