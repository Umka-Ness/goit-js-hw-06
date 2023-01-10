// <---1 task---------->
const item = document.querySelectorAll(".item")
console.log("Number of categories: " + item.length)

item.forEach(i => {
    console.log("Category: " +  i.firstElementChild.textContent)
    console.log("Elements: " +  i.lastElementChild.children.length)
});
// <---2 task---------->

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const idIng = document.querySelector("#ingredients")

// const markup = ingredients
//   .map((elem) => `<li class="list-item">${elem}</li>`)
//   .join("");
// idIng.innerHTML = markup
// const createLi = ingredients.map(elem => `<li>${elem}</li>`).join("")
// idIng.innerHTML = createLi
const lama = ingredients.map(elem => `<li class = "item">${elem}</li>`).join("")
idIng.innerHTML = lama