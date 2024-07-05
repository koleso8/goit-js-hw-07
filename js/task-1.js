const categories = document.querySelectorAll('.item')
const res = `Number of categories : ${categories.length}`

console.log(res)

const categoriesTitles = categories.forEach(title => {
    console.log('Category : ', title.firstElementChild.textContent,'\nElements : ', title.lastElementChild.children.length)
} );





