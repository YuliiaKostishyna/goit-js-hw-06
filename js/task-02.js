const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// ingredients.map(ingredient =>
//   // listItem.textContent = ingredient;
//   // document.querySelector('#ingredients').append(document.createElement("li"))
// `<li>${ingredient}</li>` .join("");
// )

const list = document.querySelector("#ingredients");
const markup = ingredients
  .map((ingredient) => `<li >${ingredient}</li>`)
  .join("");
list.insertAdjacentHTML("beforeend", markup);