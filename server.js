import express from 'express';
import mongoose from 'mongoose';
import authorsRouter from './routes/authors.js';
import booksRouter from './routes/books.js';
import studentsRouter from './routes/students.js';

import { handleError } from './middlewares/handle-error.js';

const port = 8080;
const app = express(); // Application of express
const dbUrl = 'mongodb://localhost:27017/libmgmt_server_db';

app.use(express.json()); // ensures that express can parse the JSON data sent in the request from the client

app.use(authorsRouter);
app.use(booksRouter);
app.use(studentsRouter);

app.use(handleError);


app.get('/greeter', (req, res) => {
  // req - Request of express -- we want something from the client
  // res - Response of express -- we want to send something to the client
  res.send('<h1>Good afternoon</h1>');
});

async function initServer() {
  try {
    await mongoose.connect(dbUrl);
    app.listen(port, () => {
      console.log('Database available!');
      console.log(`Web server running on port ${port}`);
    });
  } catch (err) {
    console.log(err);
    console.log('Unable to connect with the database');
    console.log('Unable to start express server');
  }
}

initServer();