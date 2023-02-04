const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(ingredient => {
  const listItem =
  document.createElement("li");
listItem.textContent = ingredient;
document.querySelector('#ingredients').append(listItem);
});
