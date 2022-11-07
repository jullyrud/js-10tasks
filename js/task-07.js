const inputRefs = document.querySelector('#font-size-control')
const spanText = document.querySelector('#text')

inputRefs.addEventListener('input', changeFontSize)

function changeFontSize(event) {
    const newValueForFont = event.currentTarget.value
    console.log(newValueForFont)
    spanText.style.fontSize = `${newValueForFont}px`
}
// console.log(inputRefs);