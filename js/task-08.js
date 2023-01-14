let form = document.querySelector(".login-form")

function inputForm(event) {
    event.preventDefault()
    console.log(event)
    const  { email, password }
       = event.currentTarget;
    if(email.value ==='' || password.value === '') {
        alert("Заполните все поля для ввода!")
    }
    else {
        console.log(`Email: ${email.value} Password: ${password.value}`)
        event.currentTarget.reset();
    }
}

form.addEventListener("submit",inputForm)
