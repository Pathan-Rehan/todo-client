import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Todo API is running' });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});