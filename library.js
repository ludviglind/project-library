// DOM Elements
const bookshelf = document.querySelector('#bookshelf')
const book = document.querySelector('.book')
const titleInput = document.querySelector('#titleInput')
const authorInput = document.querySelector('#authorInput')
const pagesInput = document.querySelector('#pagesInput')
const readInput = document.querySelector('#readInput')
const submitButton = document.querySelector('#submitButton')

// A single array to store all books.
const library = []

// Book class
class Book {
  constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }

  addBook() {
    library.push(this)
    this.displayBook()
  }

  displayBook() {
    const book = library[library.length - 1]
    const bookDiv = document.createElement('div')
    bookDiv.classList.add('book')
    bookDiv.innerHTML =
      `<div id="author">${this.author}</div>
    <div id="title">${this.title}</div>
    <div id="pages">${this.pages} pgs</div>`
    bookshelf.appendChild(bookDiv)
  }
}

submitButton.addEventListener('click', () => {
  const book = new Book (`${titleInput.value}`, `${authorInput.value}`, `${pagesInput.value}`)
  book.addBook()
  emptyFields()
})

function emptyFields() {
  titleInput.value = ''
  authorInput.value = ''
  pagesInput.value = ''
}


const hitchhiker = new Book('Hitchhiker\'s Guide To The Galaxy', 'Douglas Adams', '300')
const theStand = new Book('The Stand', 'Stephen King', '1300')

hitchhiker.addBook()
theStand.addBook()