const formEl = document.querySelector('.login-form')

const mailEL = document.querySelector('input[name=email]');
const passwordEL = document.querySelector('input[name=password]');

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = e.target;
    const userMail = formData.elements.email.value.trim()
    const userPassword = formData.elements.password.value.trim()
    if (userMail === '' || userPassword === '') return alert('All form fields must be filled in');
    console.log(`email: ${userMail}\npassword:${userPassword}`);
    formEl.reset();
})