const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const idIng = document.querySelector("#ingredients")

const createLi = ingredients.map(elem => `<li>${elem}</li>`).join("")
idIng.innerHTML = createLi