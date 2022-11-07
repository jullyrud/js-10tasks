
const bodyrefs = document.querySelector('body')
const btnChangeColorRefs = document.querySelector('.change-color')

btnChangeColorRefs.addEventListener('click', changeBackgroundColor)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBackgroundColor() {
  
  const newBackgroundColor = getRandomHexColor()
  // console.log(newBackgroundColor);

  bodyrefs.style.backgroundColor = newBackgroundColor


}
// console.log(bodyrefs);