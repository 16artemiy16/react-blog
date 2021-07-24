import express from 'express';
const router = express.Router();

import v1 from './v1';
import * as core from 'express-serve-static-core';

export const appRoutes = router.use('/', v1);

export const connectRoutes = (app: core.Express): void => {
  app.use('', appRoutes);
};
