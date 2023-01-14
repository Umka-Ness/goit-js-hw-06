const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const imgSet = document.querySelector(".gallery")
const galleryes = images.map(elem => `<li><img src = "${elem.url}" alt = "${elem.alt}" width="350" height="300"></img></li>`).join("")
imgSet.insertAdjacentHTML("beforeend", galleryes)

imgSet.style.display = "flex"
imgSet.style.flexDirection = "column"
imgSet.style.listStyle = "none";


const ulChildren = imgSet.children

for (const i of ulChildren) {
  i.style.margin = "10px"
}


