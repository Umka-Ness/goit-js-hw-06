let form = document.querySelector(".login-form")

function inputForm(event) {
    event.preventDefault()
    const  { email, password }
       = event.currentTarget;
    if(email.value ==='' || password.value === '') {
        alert("Заполните все поля для ввода!")
    }
    else {
        const ObjData = {email: `${email.value}`, password: `${password.value}`}
        console.log(ObjData)
        event.currentTarget.reset();
        return ObjData
    }
    

}

form.addEventListener("submit",inputForm)
