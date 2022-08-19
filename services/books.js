import Book from '../models/book.js';

/* let id = 3;

const books = [
  {
    id: 1,
    title: 'Prog in Java',
    price: 9000,
    pages: 450
  },
  {
    id: 2,
    title: 'Python programming',
    price: 5600,
    pages: 600
  },
  {
    id: 3,
    title: 'Intelligent investor',
    price: 3000,
    pages: 800
  }
]; */

export async function createNewBook(data) {
  /* const book = { ...data };
  book.id = ++id;
  books.push(book); */

  let book = new Book(data);
  book = await book.save();

  return book;
}

export async function deleteBookById(bookId) {
  const deletedDoc = await Book.findByIdAndDelete(bookId).exec();
  return deletedDoc;
}

export async function getBookById(bookId) {
  const book = await Book.findById(bookId).exec();
  return book;
  // return books.find(book => book.id === bookId);
}

export async function getAllBooks() {
  const books = await Book.find().exec()
  return books;
}