const inputFields = document.querySelectorAll('input')
const submit = document.querySelector('.submit')

inputFields.forEach((field) => {
    field.addEventListener('input', () => {
        if (!field.validity.valid) {
            field.parentElement.classList.add('error')
        } else {
            field.parentElement.classList.remove('error')
        }
    })
})

submit.addEventListener('click', (e) => {
    e.preventDefault();
})


