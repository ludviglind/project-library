// A single array to store all books
const library = []

// Book constructor function
class Book {
  constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }

  addBook() {
    library.push(this)
  }
}


const hitchhiker = new Book('Hitchhiker\'s Guide To The Galaxy', 'Douglas Adams', 300, 'read it')
const theStand = new Book('The Stand', 'Stephen King', '1300', 'read it')

hitchhiker.addBook()
theStand.addBook()

console.log(library)