import { getBookById } from '../services/books.js';

export default async function bookExists(req, res, next) {
  const bookId = req.params.bookId;
  // const iBookId = parseInt(bookId);

  const book = await getBookById(bookId);
  if (book) {
    next();
  } else {
    res.sendStatus(404); // book resource was not found
  }
}