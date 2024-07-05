function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnEl = document.querySelector('.change-color')
console.log(btnEl);
btnEl.addEventListener('click', (e) => {
  document.body.style.backgroundColor = getRandomHexColor();
  document.querySelector('.color').textContent = getRandomHexColor();
})
