function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
 
const inputRefs = document.querySelector('#controls input'  )
const createBtnRefs = document.querySelector('[data-create]')
const destroyBtnRefs = document.querySelector('[data-destroy]')
const boxContainerRefs = document.querySelector('#boxes')
let width = 30
let height = 30

createBtnRefs.addEventListener('click', createBlock)
destroyBtnRefs.addEventListener('click', destroyBlock
)

function createBlock() {  
  
  for (let i = 0; i < inputRefs.value; i += 1){
    const newBlock = document.createElement('div')
    newBlock.style.width = `${String(width)}px`
    newBlock.style.height = `${String(height)}px`
    newBlock.style.backgroundColor = getRandomHexColor()
    boxContainerRefs.append(newBlock)
    width += 10
    height += 10
    console.log(i);
  }
  console.log(inputRefs.value);
  
}

function destroyBlock() {
  const elToRemove = document.querySelectorAll('#boxes div')
  width = 30
  height = 30
  elToRemove.forEach(el => el.remove()) 
}



