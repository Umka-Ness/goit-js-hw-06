const events = document.querySelector("input#name-input")
const text = document.querySelector("span#name-output")

const replases = (elem) => {
     text.textContent = elem.currentTarget.value.trim() || "Anonymous"
}

events.addEventListener("input",replases)
