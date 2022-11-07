const allCategories = document.querySelectorAll('.item')
console.log(`Number of categories: ${allCategories.length}`);


allCategories.forEach(element => {


    const nameOfCatogories = element.querySelectorAll('h2')
    console.log(nameOfCatogories[0].textContent);

    const elementsInCaregory = element.querySelectorAll('ul li') 
    console.log(`Elements: ${elementsInCaregory.length}`);
   
    
});
