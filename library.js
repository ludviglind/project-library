// DOM Elements
const bookshelf = document.querySelector('#bookshelf')
const book = document.querySelector('.book')

// A single array to store all books.
const library = []

// Book class with constructor function and addBook function.
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
    const book = library[library.length -1]
    const bookDiv = document.createElement('div')
    bookDiv.classList.add('book')
    bookDiv.innerHTML =
    `<div id="author">${this.author}</div>
    <div id="title">${this.title}</div>
    <div id="pages">${this.pages} pgs</div>`
    bookshelf.appendChild(bookDiv)
  }
}


const hitchhiker = new Book('Hitchhiker\'s Guide To The Galaxy', 'Douglas Adams', 300, 'read it')
const theStand = new Book('The Stand', 'Stephen King', '1300', 'read it')

hitchhiker.addBook()
theStand.addBook()