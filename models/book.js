import mongoose from 'mongoose';
import authorsSchema from './author.js';

const { Schema, model } = mongoose;

// Schema for the collection
const booksSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: false
  },
  pages: {
    type: Number,
    required: true
  },
  authors: [authorsSchema]
});

// Model for that collection using the schema
const Book = model('Book', booksSchema);

export default Book;