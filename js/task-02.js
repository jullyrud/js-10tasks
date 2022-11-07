const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];




    
const elementList = ingredients.map(ingredient => {

  const itemEl = document.createElement('li')
  itemEl.classList.add('item')
  itemEl.textContent = ingredient
  return itemEl
})

  const ingredientList = document.querySelector('#ingredients')
  ingredientList.append(...elementList)


console.log(ingredientList);

//  const elementListArr =[]
// const myList = document.querySelector('#ingredients')

// const elementList = ingredients.map((element) => {
//   const elementListItem = document.createElement('li')
//   elementListItem.classList.add('item')
//   elementListItem.textContent = element

//   return elementListItem
// })

// // for (let i = 0; i < ingredients.length; i += 1){
// //   const option = ingredients[i]
// //   const elementListItem = document.createElement('li')
// //   elementListItem.classList.add('item')
// //   elementListItem.textContent = option
// //   elementListArr.push(elementListItem)
// // }


// myList.append(...elementList)
//  console.log(elementList);