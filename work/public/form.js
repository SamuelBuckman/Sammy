let formBtn =document.querySelector('.submit-btn');

formBtn.addEventListener('click',() => {
    let fullname = document.querySelector('#name');
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')
    let tac = document.querySelector('#tc')

// form validation
if(fullname.value.length < 3){
    showFormError('name must be 3 letter long');
} else if (!email.value.length ){
    showFormError('Input your email');
} else if (password.value.length < 8 ){
    showFormError('Your password must 8 letter long');
} else if (Number(number) || number.value.length < 10 ){
    showFormError('invalid number, please enter valid one');
    }else if (!tac.checked ){
        showFormError(' Your must agree to our terms and conditions');
    } else{
        sendData('/signup',{
            name: fullname.value,
            email:email.value,
            password:password.value,
            number:number.value,
            tac:tac.checked
        })
    }
});