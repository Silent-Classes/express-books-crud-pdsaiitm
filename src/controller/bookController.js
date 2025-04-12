const { getBooks, addBook, resetBooks } = require("../data/bookData");

// Add controller functions for handling book-related requests

exports.getBooks = (req, res) => {
  res.json(getBooks());
};

exports.addBook = (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({
      error: "Both title and author are required.",
    });
  }
  const book = addBook(req.body);
  res.status(201).json(book);
};

// Only for testing, export resetBooks if needed
exports._resetBooks = resetBooks;
