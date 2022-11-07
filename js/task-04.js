const counterValue = document.querySelector('#value')
const increaseVauleButton = document.querySelector('[data-action="increment"]')
const decreaseVauleButton = document.querySelector('[data-action="decrement"]')

increaseVauleButton.addEventListener('click', increaseValue)
decreaseVauleButton.addEventListener('click', decreaseValue)


function increaseValue () {
    counterValue.textContent = Number(counterValue.textContent) + 1
}

function decreaseValue () {
    counterValue.textContent = Number(counterValue.textContent) - 1
}