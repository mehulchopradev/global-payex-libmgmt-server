import express from 'express';
import authorsRouter from './routes/authors.js';
import booksRouter from './routes/books.js';

const port = 8080;
const app = express(); // Application of express

app.use(express.json()); // ensures that express can parse the JSON data sent in the request from the client

app.use(authorsRouter);
app.use(booksRouter);


app.get('/greeter', (req, res) => {
  // req - Request of express -- we want something from the client
  // res - Response of express -- we want to send something to the client
  res.send('<h1>Good afternoon</h1>');
});

app.listen(port, () => {
  console.log(`Web server running on port ${port}`);
});