import express from 'express';
const router = express.Router();

router
  .route('/articles')
  .get((req, res) => res.send('GET articles'))
  .post((req, res) => res.send('POST articles'))
  .delete((req, res) => res.send('DELETE articles'));

export default router;
