import express from 'express';

const authors = [
  {
    id: 1,
    name: 'mehul',
    gender: 'm',
    address: {
      country: 'IN',
      state: 'MH',
      pincode: 400053
    }
  },
  {
    id: 2,
    name: 'jane',
    gender: 'f',
    address: {
      country: 'USA',
      state: 'OHIO',
      pincode: 423453
    }
  }
];

const authorsRouter = express.Router();

authorsRouter.get('/authors', (req, res) => {
  
  res.send(authors);
});

export default authorsRouter;