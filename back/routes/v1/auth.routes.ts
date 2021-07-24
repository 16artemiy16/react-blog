import express from 'express';
import { getMe, logIn, logOut } from '../../controllers/auth.controller';
const router = express.Router();

router
  .get('/auth/me', getMe)
  .post('/auth/log-in', logIn)
  .post('/auth/log-out', logOut);

export default router;
