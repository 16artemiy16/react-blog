import express from 'express';
import { deleteArticles, getArticles, postArticles, getArticleById } from '../../controllers/articles.controller';
const router = express.Router();

router
  .route('/articles')
  .get(getArticles)
  .post(postArticles)
  .delete(deleteArticles);

router.get('/articles/:id', getArticleById);

export default router;
