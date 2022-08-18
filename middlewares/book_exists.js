import { getBookById } from '../services/books.js';

export default function bookExists(req, res, next) {
  const bookId = req.params.bookId;
  const iBookId = parseInt(bookId);

  const book = getBookById(iBookId);
  if (book) {
    next();
  } else {
    res.sendStatus(404); // book resource was not found
  }
}