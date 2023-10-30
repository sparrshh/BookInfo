const mongoose = require('mongoose');

// Define the Book schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
});

// Create the Book model
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
