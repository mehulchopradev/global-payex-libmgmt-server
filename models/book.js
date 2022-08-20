import mongoose from 'mongoose';
import authorsSchema from './author.js';

import PublicationHouse from './publication-house.js';

const { Schema, model } = mongoose;

// Schema for the collection
const booksSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxLength: 20,
    minLength: 5,
    validate: {
      validator: (v) => {
        return v && !(v.toLowerCase().includes('religion'));
      },
      message: 'Cannot use certain words in book titles'
    }
  },
  price: {
    type: Number,
    required: false
  },
  pages: {
    type: Number,
    required: true,
    min: 1
  },
  authors: [authorsSchema],
  publicationHouseId: {
    type: Schema.Types.ObjectId,
    ref: PublicationHouse
  },
  issuedStudents: {
    type: Array,
    required: false
  }
});

// Model for that collection using the schema
const Book = model('Book', booksSchema);

export default Book;