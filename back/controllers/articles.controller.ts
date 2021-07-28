import { Request, Response } from 'express';
import { getById, getMany } from '../services/article.service';

export const getArticleById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const article = await getById(id);
    if (article) {
      res.json({
        article,
        success: true
      });

      return;
    }

    res
      .status(404)
      .send({
        success: false,
        message: 'There is no article with this id',
        args: [{ id }]
      });

    return;

  } catch (err) {
    res.status(500).send({ success: false, message: err.toLocaleString() });
  }
};

export const getArticles = async (req: Request, res: Response): Promise<void> => {
  try {
    const articles = await getMany();
    res.send({
      articles,
      success: true,
    });
  } catch (err) {
    res.status(500).send({ success: false, message: err.toLocaleString() });
  }
};

export const postArticles = (req: Request, res: Response) => {
  res.send('POST articles');
};

export const deleteArticles = (req: Request, res: Response) => {
  res.send('DELETE articles');
};
