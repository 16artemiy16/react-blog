import express from 'express';
const router = express.Router();

import articles from './articles.routes';
import auth from './auth.routes';

const v1 = router.use('/v1', articles, auth);
export default v1;
