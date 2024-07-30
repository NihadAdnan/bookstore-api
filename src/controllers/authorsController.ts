import { Request, Response } from 'express';
import knex from '../utils/db';

export const getAuthors = async (req: Request, res: Response) => {
  try {
    const authors = await knex('authors').select('*');
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching authors', error });
  }
};

export const getAuthorById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const author = await knex('authors').where({ id }).first();
    if (!author) {
      return res.status(404).json({ message: 'Author not found' });
    }
    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching author', error });
  }
};

export const createAuthor = async (req: Request, res: Response) => {
  try {
    const { name, bio, birthdate } = req.body;
    const [id] = await knex('authors').insert({ name, bio, birthdate });
    res.status(201).json({ id });
  } catch (error) {
    res.status(500).json({ message: 'Error creating author', error });
  }
};

export const updateAuthor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, bio, birthdate } = req.body;
    await knex('authors').where({ id }).update({ name, bio, birthdate });
    res.status(200).json({ message: 'Author updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating author', error });
  }
};

export const deleteAuthor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await knex('authors').where({ id }).del();
    res.status(200).json({ message: 'Author deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting author', error });
  }
};
