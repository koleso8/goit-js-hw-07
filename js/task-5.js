function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color');

btnEl.addEventListener('click', e => {
  let bgColor = getRandomHexColor();
  document.querySelector('body').style.backgroundColor = bgColor;
  document.querySelector('.color').textContent = bgColor;
  console.log(bgColor);
});
