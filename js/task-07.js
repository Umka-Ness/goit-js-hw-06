const input = document.querySelector("input#font-size-control")
const text = document.querySelector("span#text")

const evente =() => {
     text.style.fontSize = `${input.value}px`
}


input.addEventListener('input',evente)