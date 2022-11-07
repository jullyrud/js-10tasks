const inputRefs = document.querySelector('#name-input')
const greetingsRefs = document.querySelector('#name-output')

inputRefs.addEventListener('input', rewritingGreeting)

function rewritingGreeting(event) {
    greetingsRefs.textContent = event.currentTarget.value
    if (greetingsRefs.textContent === "")
        greetingsRefs.textContent = 'Anonymous!'
    
}


// console.log(greetingsRefs.textContent);