import { Request, Response } from 'express';
import Book, { IBook } from '../models/book.model';

// --- CREATE a new Book ---
export const createBook = async (req: Request, res: Response) => {
  try {
    // Get the data from the request body
    const { title, author, publishedYear, genre, isbn, summary, coverImage }: IBook = req.body;

    // Create a new book instance
    const newBook = new Book({
      title,
      author,
      publishedYear,
      genre,
      isbn,
      summary,
      coverImage,
    });

    // Save the new book to the database
    const savedBook = await newBook.save();

    // Respond with the saved book
    res.status(201).json(savedBook);
  } catch (error: any) {
    res.status(500).json({ message: 'Error creating book', error: error.message });
  }
};

// --- GET all Books ---
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error: any) {
    res.status(500).json({ message: 'Error fetching books', error: error.message });
  }
};

// --- GET a single Book by ID ---
export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(book);
  } catch (error: any) {
    res.status(500).json({ message: 'Error fetching book', error: error.message });
  }
};

// --- UPDATE a Book by ID ---
export const updateBook = async (req: Request, res: Response) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // Return the updated document and run schema validators
    );

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(updatedBook);
  } catch (error: any) {
    res.status(500).json({ message: 'Error updating book', error: error.message });
  }
};

// --- DELETE a Book by ID ---
export const deleteBook = async (req: Request, res: Response) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);

    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: 'Error deleting book', error: error.message });
  }
};