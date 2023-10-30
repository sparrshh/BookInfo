const Book = require('../models/Book');

// Create a new book
exports.createBook = async (req, res) => {
  try {
    const newBook = new Book({
      title: req.body.title,
      author: req.body.author,
      summary: req.body.summary,
    });

    const savedBook = await newBook.save();

    res.status(201).json(savedBook);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Could not create the book.' });
  }
};

// Get a list of all books
exports.getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find();
    res.status(200).json(allBooks);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve books.' });
  }
};

// Get details of a specific book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found.' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve the book.' });
  }
};

// Update a book's details
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      author: req.body.author,
      summary: req.body.summary,
    }, { new: true });

    if (!book) {
      return res.status(404).json({ error: 'Book not found.' });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Could not update the book.' });
  }
};

// Delete a book
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndRemove(req.params.id);

    if (!book) {
      return res.status(404).json({ error: 'Book not found.' });
    }

    res.status(204).send('Book deleted');
  } catch (error) {
    res.status(500).json({ error: 'Could not delete the book.' });
  }
};
