import { createNewBook, deleteBookById, getBookById, getAllBooks } from '../services/books.js';

export async function handleGetAllBooks(req, res) {
  const books = await getAllBooks();
  res.send(books);
}

export async function handleGetBook(req, res) {
    const bookId = req.params.bookId;
    // const iBookId = parseInt(bookId);
    const book = await getBookById(bookId);
    res.send(book);
  
    /* if (book) {
      res.send(book);
    } else {
      res.sendStatus(404); // book resource was not found
    } */
}

export async function handleDeleteBook(req, res) {
    const bookId = req.params.bookId;
    // const iBookId = parseInt(bookId);
    await deleteBookById(bookId);
    res.sendStatus(204);
  
    /* if (index !== -1) {
      books.splice(index, 1);
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    } */
}

export async function handleCreateBook(req, res) {
  const data = req.body;
  const newBook = await createNewBook(data);
  res.status(201).send(newBook);
}