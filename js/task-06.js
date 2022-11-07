const inputRefs = document.querySelector('#validation-input')
const requiredStringLength = Number(inputRefs.dataset.length)


inputRefs.addEventListener('focus', onInputFocus)
inputRefs.addEventListener('blur', onInputBlur )

function onInputFocus() {
    console.log('фокус');
}
function onInputBlur(event) {
    const enteredValueLength = event.currentTarget.value.length
    console.log(enteredValueLength);
    if (requiredStringLength == enteredValueLength) {
       return inputRefs.classList.add('valid')
    } else return inputRefs.classList.add('invalid')
}

console.log(requiredStringLength);