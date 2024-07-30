import { Request, Response } from 'express';
import knex from '../utils/db';

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await knex('books').select('*');
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const book = await knex('books').where({ id }).first();
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching book', error });
  }
};

export const createBook = async (req: Request, res: Response) => {
  try {
    const { title, description, published_date, author_id } = req.body;
    const [id] = await knex('books').insert({ title, description, published_date, author_id });
    res.status(201).json({ id });
  } catch (error) {
    res.status(500).json({ message: 'Error creating book', error });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, published_date, author_id } = req.body;
    await knex('books').where({ id }).update({ title, description, published_date, author_id });
    res.status(200).json({ message: 'Book updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating book', error });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await knex('books').where({ id }).del();
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book', error });
  }
};

export const getBooksByAuthorId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const books = await knex('books').where({ author_id: id });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error });
  }
};
