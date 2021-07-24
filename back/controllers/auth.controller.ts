import { Request, Response } from 'express';

export const getMe = (req: Request, res: Response) => {
  res.send('GET me');
};

export const logIn = (req: Request, res: Response) => {
  res.send('POST log-in');
};

export const logOut = (req: Request, res: Response) => {
  res.send('POST log-out');
};
