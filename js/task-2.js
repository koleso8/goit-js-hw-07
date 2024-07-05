const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

/* 
function carTemplate(car) {
  return `<li class="car-item">
    <h4>${car.make} ${car.model}</h4>
    <p>Year: ${car.year}</p>
    <p>Price: ${car.price}$</p>
    <div>
    <p>transmission: ${car.transmission}</p>
    <p style="background-color: ${car.color};">color: ${car.color}</p>
    </div>
  </li>`;
}

function carsTemplate(arr) {
  return arr.map(carTemplate).join('');
}

function renderCars() {
  const sortedCars = cars.toSorted((a, b) => {
    return a.price - b.price;
  });
  const markup = carsTemplate(sortedCars);
  ulElem.insertAdjacentHTML('beforeend', markup);
}

*/


const ulElem = document.querySelector('.gallery')
console.log("🚀 ~ ulElem:", ulElem)

function imgTemplate(img) {
  return `<li class="gallery-item">
          <img src="${img.url}" alt="${img.alt}" width="360" height="300">
          </li>`
}

function imagesTemplate(array) {
  return array.map(imgTemplate).join('');
  
}

function renderImages() {
  const markup = imagesTemplate(images)
  console.log("🚀 ~ renderImages ~ markup:",typeof markup)
  ulElem.insertAdjacentHTML('beforeend', markup)
  
}
renderImages()