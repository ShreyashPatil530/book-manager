import { Router } from 'express';
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} from '../controllers/book.controller';

const router = Router();

// --- Book API Routes ---

// POST /api/books
// Create a new book
router.post('/', createBook);

// GET /api/books
// Get all books
router.get('/', getAllBooks);

// GET /api/books/:id
// Get a single book by its ID
router.get('/:id', getBookById);

// PUT /api/books/:id
// Update a book by its ID
router.put('/:id', updateBook);

// DELETE /api/books/:id
// Delete a book by its ID
router.delete('/:id', deleteBook);

export default router;