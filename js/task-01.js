// const allCategories = document.querySelectorAll('.item')
// console.log(`Number of categories: ${allCategories.length}`);


// allCategories.forEach(element => {


//     const nameOfCatogories = element.querySelectorAll('h2')
//     console.log(nameOfCatogories[0].textContent);

//     const elementsInCaregory = element.querySelectorAll('ul li') 
//     console.log(`Elements: ${elementsInCaregory.length}`);
   
    
// });
 


const findElements = document.querySelector("#categories");
const findItems = findElements.children;
const countCategories = () =>
  console.log(`Number of categories: ${findElements.childElementCount}`);

countCategories();

const itemsCount = [...findItems].forEach((element) =>  {
    console.log(`Category: ${element.firstElementChild.textContent}`)
    console.log(`Elements: ${element.lastElementChild.childElementCount}`)

})
