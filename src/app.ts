import express from 'express';
import cors from 'cors';
import authorsRoutes from './routes/authorsRoutes';
import booksRoutes from './routes/booksRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', authorsRoutes);
app.use('/api', booksRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
