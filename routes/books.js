import express from 'express';
import logit from '../middlewares/logit.js';
import bookExists from '../middlewares/book_exists.js';
import { handleGetAllBooks, handleGetBook, handleDeleteBook, handleCreateBook } from '../handlers/books.js';

const booksRouter = express.Router();
booksRouter.use(logit); // will apply to all the routes in the booksRouter

booksRouter.get('/books', handleGetAllBooks);
// GET -- /books/<<id of the book>>
booksRouter.get('/books/:bookId'/* , [logit] */, [bookExists], handleGetBook);
// DELETE --- /books/<<id of the book>>
booksRouter.delete('/books/:bookId', [bookExists], handleDeleteBook);
// POST --- /books
booksRouter.post('/books', handleCreateBook);

// PUT --- /books/<<id of the book>>

export default booksRouter;