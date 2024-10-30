
const myLibrary = [];

function Book(title, author, numberOfPages, status) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.status = status;

}

Book.prototype.toggleStatus = function () {
  if (this.status === "Read") {
    this.status = "Unread";
  } else if (this.status === "Unread") {
    this.status = "Reading";
  } else if (this.status === "Reading") {
    this.status = "Read";
  }
}

function addBookToLibrary(title, author, numberOfPages, status) {
  const newBook = new Book(title, author, numberOfPages, status);

  myLibrary.push(newBook);
  displayLibrary();
}

function displayLibrary() {
  const container = document.querySelector(".display-container");
  container.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book');

    bookCard.innerHTML = `<h2>${book.title}</h2> 
     <p><strong>Author:</strong> ${book.author}</p>
     <p><strong>Pages:</strong> ${book.numberOfPages}</p>
     <p><strong>status:</strong> ${book.status}</p> <p>
     <button onclick ="removeBook(${index})">Remove</button>
     <button onclick="toggleBookStatus(${index})">Toggle Status</button></p>`;

    container.appendChild(bookCard);
  });
}


function toggleBookStatus(index) {
  myLibrary[index].toggleStatus();
  displayLibrary();
}


function removeBook(index) {
  myLibrary.splice(index, 1);
  displayLibrary();
}


document.querySelector('#newBookButton').addEventListener('click', () => {
  document.querySelector('#bookFormDialog').showModal();
})


document.querySelector('#bookForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const status = document.querySelector('#status').value;

  addBookToLibrary(title, author, pages, status);

  event.target.reset();
  document.getElementById('bookFormDialog').close();
});

function closeForm() {
  document.getElementById('bookFormDialog').close();
}