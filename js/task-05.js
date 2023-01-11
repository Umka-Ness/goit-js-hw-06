const events = document.querySelector("input#name-input")
const text = document.querySelector("span#name-output")

const replases = (elem) => {
    return text.textContent = elem.currentTarget.value || "Anonymous"
}

events.addEventListener("input",replases)
