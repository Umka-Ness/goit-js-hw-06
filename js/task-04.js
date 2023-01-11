const decrem = document.querySelector("#counter button[data-action = decrement]")
const increm = document.querySelector("#counter button[data-action = increment]")

let counterValue = 0

const dec = () => {
    console.log(counterValue -=1)
}
const inc = () => {
    console.log(counterValue +=1)
}
decrem.addEventListener("click", dec)
increm.addEventListener("click",inc)