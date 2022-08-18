import { createNewBook, deleteBookById, getBookById, getAllBooks } from '../services/books.js';

export function handleGetAllBooks(req, res) {
  res.send(getAllBooks());
}

export function handleGetBook(req, res) {
    const bookId = req.params.bookId;
    const iBookId = parseInt(bookId);
    const book = getBookById(iBookId);
    res.send(book);
  
    /* if (book) {
      res.send(book);
    } else {
      res.sendStatus(404); // book resource was not found
    } */
}

export function handleDeleteBook(req, res) {
    const bookId = req.params.bookId;
    const iBookId = parseInt(bookId);
    deleteBookById(iBookId);
    res.sendStatus(204);
  
    /* if (index !== -1) {
      books.splice(index, 1);
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    } */
}

export function handleCreateBook(req, res) {
  const data = req.body;
  const newBook = createNewBook(data);
  res.status(201).send(newBook);
}