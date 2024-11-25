
class Library {
  constructor() {
    this.books = [];
  }

  addBookToLibrary(book) {
    this.books.push(book);
    this.displayLibrary();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.displayLibrary();
  }



  displayLibrary() {
    const container = document.querySelector(".display-container");
    container.innerHTML = '';

    this.books.forEach((book, index) => {
      const bookCard = document.createElement('div');
      bookCard.classList.add('book');

      bookCard.innerHTML = `<h2>${book.title}</h2> 
       <p><strong>Author:</strong> ${book.author}</p>
       <p><strong>Pages:</strong> ${book.numberOfPages}</p>
       <p><strong>status:</strong> ${book.status}</p> <p>
       <button onclick ="library.removeBook(${index})">Remove</button>
       <button onclick="library.toggleBookStatus(${index})">Toggle Status</button></p>`;

      container.appendChild(bookCard);
    });
  }

  toggleBookStatus(index) {
    this.books[index].toggleStatus();
    this.displayLibrary();
  }

}


class Book {
  constructor(title, author, numberOfPages, status) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.status = status;
  }

  toggleStatus() {
    if (this.status === "Read") {
      this.status = "Unread";
    } else if (this.status === "Unread") {
      this.status = "Reading";
    } else if (this.status === "Reading") {
      this.status = "Read";
    }
  }
}

const library = new Library();



document.querySelector('#newBookButton').addEventListener('click', () => {
  document.querySelector('#bookFormDialog').showModal();
})


document.querySelector('#bookForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const status = document.querySelector('#status').value;

  const newBook = new Book(title, author, pages, status);
  library.addBookToLibrary(newBook);

  event.target.reset();
  document.getElementById('bookFormDialog').close();
});

function closeForm() {
  document.getElementById('bookFormDialog').close();
}
