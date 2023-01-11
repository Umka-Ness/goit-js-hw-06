const events = document.querySelector("input#name-input")
const text = document.querySelector("span#name-output")

const replases = (elem) => {
    console.log(1)
    return text.textContent = elem.currentTarget.value || "awaw"
}

events.addEventListener("input",replases)
