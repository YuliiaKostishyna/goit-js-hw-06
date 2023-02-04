const list = document.querySelectorAll("ul#categories ul").length;
console.log(`Number of categories: ${list}`);

const categoriesFind = document.querySelectorAll("ul#categories h2");

categoriesFind.forEach(categorie => {
    const liTotal = categorie.nextElementSibling.children.length;

    console.log(`Category: ${categorie.textContent}`);
    console.log(`Elements: ${liTotal}`);
});
