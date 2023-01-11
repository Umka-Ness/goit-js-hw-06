const item = document.querySelectorAll(".item")
console.log("Number of categories: " + item.length)

item.forEach(i => {
    console.log("Category: " +  i.firstElementChild.textContent)
    console.log("Elements: " +  i.lastElementChild.children.length)
});