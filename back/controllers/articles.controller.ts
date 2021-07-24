import { Request, Response } from 'express';

export const getArticles = (req: Request, res: Response) => {
  res.send('GET articles');
};

export const postArticles = (req: Request, res: Response) => {
  res.send('POST articles');
};

export const deleteArticles = (req: Request, res: Response) => {
  res.send('DELETE articles');
};
