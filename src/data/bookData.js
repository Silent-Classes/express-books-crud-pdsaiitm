let books = [];

function getBooks() {
  return books;
}

function addBook(book) {
  const newBook = { id: books.length + 1, ...book };
  books.push(newBook);
  return newBook;
}

function resetBooks() {
  books = [];
}

module.exports = { getBooks, addBook, resetBooks };
