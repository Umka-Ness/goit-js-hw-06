const btn = document.querySelector(".change-color")
const spanColor = document.querySelector(".color")

const  getRandomHexColor = () => { 
  console.log(1)
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const setColor = () => {
  let color = getRandomHexColor()
  document.body.style.background = color
  spanColor.textContent = color
}
btn.addEventListener("click",setColor)