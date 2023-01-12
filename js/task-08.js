const form = document.querySelector(".login-form")



function inputForm(e) {
    e.preventDefault()
    console.log(e)
    const {
        elements: { email, password }
      } = e.currentTarget;
    if(email.value ==='' || password.value === '') {
        alert("Заполните все поля для ввода!")
    }
    else {
        console.log(`Email: ${email.value} Password: ${password.value}`)
        e.currentTarget.reset();
    }
}
form.addEventListener("submit",inputForm)
