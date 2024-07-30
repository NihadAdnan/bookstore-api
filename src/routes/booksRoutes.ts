import { Router } from 'express';
import {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  getBooksByAuthorId
} from '../controllers/booksController';
import { validateBook } from '../middlewares/validators';

const router = Router();

router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.post('/books', validateBook, createBook);
router.put('/books/:id', validateBook, updateBook);
router.delete('/books/:id', deleteBook);
router.get('/authors/:id/books', getBooksByAuthorId);

export default router;
