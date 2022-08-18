let id = 3;

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
];

export function createNewBook(data) {
  const book = { ...data };
  book.id = ++id;
  books.push(book);
  return book;
}

export function deleteBookById(bookId) {
  const index = books.findIndex(book => book.id === bookId);
  books.splice(index, 1);
}

export function getBookById(bookId) {
  return books.find(book => book.id === bookId);
}

export function getAllBooks() {
  return books;
}