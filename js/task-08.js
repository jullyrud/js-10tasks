const formRefs = document.querySelector('.login-form')
const dataObj = {}

formRefs.addEventListener('submit', collectDataFromForm)


function collectDataFromForm(ev) {
    ev.preventDefault()
    
    
    const FormElements = ev.currentTarget.elements
    const FormElEmail = FormElements.email.value
    const FormElPasswod = FormElements.password.value
    
    if (FormElEmail || FormElPasswod !== '') {
        dataObj.email = FormElEmail
        dataObj.password = FormElPasswod
    } else
    return alert('заполните все поля')
    
    
    console.log(dataObj);
    ev.target.reset()
    
}

//  console.log(dataArr);