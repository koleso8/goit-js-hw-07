const userNameEl = document.querySelector('#name-input')
const greetUser = document.querySelector('#name-output')

userNameEl.addEventListener('input', (e) => {
    greetUser.textContent = userNameEl.value.trim() || 'Anonymous'
})
