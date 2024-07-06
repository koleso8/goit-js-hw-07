function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
    const boxesContainer = document.querySelector('#boxes');

    createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);
    
function createBox() {
  return `<div class="box"></div>`
}

function createBoxes() {
  destroyBoxes();
      const amount = Number(input.value);
      if (amount >= 1 && amount <= 100) {
        const fragment = document.createDocumentFragment();
        let size = 30;
        for (let i = 0; i < amount; i++) {
          const box = document.createElement('div');
          box.classList.add('box');
          box.style.width = size+'px';
          box.style.height = size+'px';
          box.style.backgroundColor = getRandomHexColor();
          fragment.appendChild(box);
          size += 10;
        }
        boxesContainer.appendChild(fragment);

      } else {
        alert('Please enter a valid number between 1 and 100.');
      }
      input.value = '';
    }

    function destroyBoxes() {
      boxesContainer.innerHTML = '';
    }