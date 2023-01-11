const decrem = document.querySelector("#counter button[data-action = decrement]")
const increm = document.querySelector("#counter button[data-action = increment]")
const span = document.querySelector("#value")

let counterValue = 0

const dec = () => {
    span.textContent = counterValue -=1
}
const inc = () => {
    span.textContent = counterValue +=1
}
decrem.addEventListener("click", dec)
increm.addEventListener("click",inc)