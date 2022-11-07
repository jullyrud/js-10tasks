const inputRefs = document.querySelector('#validation-input')
const requiredStringLength = Number(inputRefs.dataset.length)


inputRefs.addEventListener('focus', onInputFocus)
inputRefs.addEventListener('blur', onInputBlur )

function onInputFocus() {
    inputRefs.classList.remove('invalid')
    inputRefs.classList.remove('valid')
    console.log('фокус');
}
function onInputBlur(event) {
    const enteredValueLength = event.currentTarget.value.length
    console.log(enteredValueLength);
    if (requiredStringLength === enteredValueLength) {
         inputRefs.classList.add('valid')
    } else
        inputRefs.classList.add('invalid')
}

// console.log(requiredStringLength);