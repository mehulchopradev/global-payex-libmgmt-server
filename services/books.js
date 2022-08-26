import Book from '../models/book.js';
import { getStudentById } from './students.js';
import mongoose from 'mongoose';

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
  const book = await Book
    .findById(bookId)
    .populate('publicationHouseId')
    .exec();
  return book;
  // return books.find(book => book.id === bookId);
}

export async function getAllBooks() {
  /* const books = await Book.find({
    price: { $gt: 500 }
  }, {
    publicationHouseId: 0
  }).exec() */

  /* const books = await Book
    .find()
    .populate('publicationHouseId', ['name', 'ratings'])
    .exec(); */

  const books = await Book.find();
  return books;
}

export async function issueBook(studentId, bookId) {
  let book = await getBookById(bookId);
  book.issuedStudents.push(studentId);
  book = await book.save();

  let student = await getStudentById(studentId);
  student.issuanceHistory.push({
    bookName: book.title,
    action: 'Issued',
    date: new Date()
  });
  student = await student.save();

  return [book, student];
}

// Supports transaction but will work in a replicaset environment!
/* export async function issueBook(studentId, bookId) {
  const session = await mongoose.startSession();

  session.startTransaction();

  try {
    let book = await getBookById(bookId);
    book.issuedStudents.push(studentId);
    book = await book.save({
      session: session
    });

    // deliberately build up an error
    // let x = null;
    // x.toUpperCase();

    let student = await getStudentById(studentId);
    student.issuanceHistory.push({
      bookName: book.title,
      action: 'Issued',
      date: new Date()
    });
    student = await student.save({
      session: session
    });

    await session.commitTransaction();

    return [book, student];
  } catch (err) {
    console.log(err);
    await session.abortTransaction();
    throw err;
  } finally {
    await session.endSession();
  }
} */