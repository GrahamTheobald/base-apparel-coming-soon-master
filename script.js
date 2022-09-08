const form = document.querySelector(".page__text__form")
const input = form.querySelector('input[type="text"]')

form.addEventListener("submit", e => {
    e.preventDefault()
    const email = form.querySelector('input[type="text"]').value
    if (validate_email(email)) {
        form.querySelector('input[type="text"]').value = ''
        hide_errors()
        return
    }
    else {
        reveal_hidden_errors()
    }
})

input.addEventListener('input', e => {
    hide_errors()
})

function validate_email(email) {
    const mailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (email.match(mailFormat)) return true
    return false;
}

function reveal_hidden_errors() {
    const icon = form.querySelector('.error-icon')
    const input = form.querySelector('input[type="text"]')
    const message = document.querySelector('.error-message')
    icon.classList.remove('hidden')
    message.classList.remove('hidden')
    input.classList.add('invalid')
}

function hide_errors() {
    const icon = form.querySelector('.error-icon')
    const input = form.querySelector('input[type="text"]')
    const message = document.querySelector('.error-message')
    icon.classList.add('hidden')
    message.classList.add('hidden')
    input.classList.remove('invalid')
}