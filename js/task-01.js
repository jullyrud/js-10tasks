
const findElements = document.querySelector("#categories");
const findItems = findElements.children;
const countCategories = () =>
  console.log(`Number of categories: ${findElements.childElementCount}`);

countCategories();

const itemsCount = [...findItems].forEach((element) =>  {
    console.log(`Category: ${element.firstElementChild.textContent}`)
    console.log(`Elements: ${element.lastElementChild.childElementCount}`)

})
