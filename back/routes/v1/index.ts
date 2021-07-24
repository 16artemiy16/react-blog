import express from 'express';
const router = express.Router();

import articles from './articles.routes';

const v1 = router.use('/v1', articles);
export default v1;
