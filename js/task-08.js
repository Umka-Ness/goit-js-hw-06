const form = document.querySelector(".login-form")
const email = document.querySelector("[type=`email`]")
const pass = document.querySelector("[type=`password`]")

function event(e) {
    e.preventDefault()
    console.log(e)
    if(email.value ==='' || pass.value === '') {
        alert("Заполните все поля для ввода!")
    }
}

form.addEventListener("submit",event)



