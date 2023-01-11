const idInput = document.querySelector("#validation-input")
const dtSet = Number(idInput.dataset.length)

idInput.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === dtSet) {
        idInput.classList.add("invalid")
        idInput.classList.replace("invalid","valid")
    }
    else {
        idInput.classList.add("valid")
        idInput.classList.replace("valid","invalid")
    }
})