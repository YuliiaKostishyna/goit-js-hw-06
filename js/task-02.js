const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul#ingredients')
let fragment = new DocumentFragment();

ingredients.map((ingredient) => {
  const itemList = document.createElement("li");
  itemList.classList.add('item');
  itemList.textContent += ingredient;
  fragment.appendChild(itemList)
})
document.querySelector('ul#ingredients').append(fragment);