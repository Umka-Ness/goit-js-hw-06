const btn = document.querySelector(".change-color")
const spanColor = document.querySelector(".color")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const setColor = () => {
  document.body.style.background = getRandomHexColor()
  spanColor.textContent = getRandomHexColor()
}
btn.addEventListener("click",setColor)