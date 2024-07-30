import { Router } from 'express';
import {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor
} from '../controllers/authorsController';
import { validateAuthor } from '../middlewares/validators';

const router = Router();

router.get('/authors', getAuthors);
router.get('/authors/:id', getAuthorById);
router.post('/authors', validateAuthor, createAuthor);
router.put('/authors/:id', validateAuthor, updateAuthor);
router.delete('/authors/:id', deleteAuthor);

export default router;
