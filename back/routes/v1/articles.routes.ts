import express from 'express';
import { deleteArticles, getArticles, postArticles } from '../../controllers/articles.controller';
const router = express.Router();

router
  .route('/articles')
  .get(getArticles)
  .post(postArticles)
  .delete(deleteArticles);

export default router;
