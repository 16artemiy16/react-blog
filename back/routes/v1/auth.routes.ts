import express from 'express';
const router = express.Router();

router
  .get('/auth/me', (req, res) => res.send('GET me'))
  .post('/auth/log-in', (req, res) => res.send('POST log-in'))
  .post('/auth/log-out', (req, res) => res.send('POST log-out'));

export default router;
