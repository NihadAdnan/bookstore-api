import { body, param, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import knex from '../utils/db';

export const validateAuthor = [
  body('name').isString().notEmpty().withMessage('Name is required'),
  body('birthdate').isDate().withMessage('Valid birthdate is required'),
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

export const validateBook = [
  body('title').isString().notEmpty().withMessage('Title is required'),
  body('published_date').isDate().withMessage('Valid published date is required'),
  body('author_id')
    .isInt()
    .withMessage('Valid author_id is required')
    .custom(async (value) => {
      const author = await knex('authors').where({ id: value }).first();
      if (!author) {
        return Promise.reject('Author not found');
      }
    }),
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
