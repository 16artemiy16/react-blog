import express from 'express';
import mongoose from 'mongoose';

import { connectRoutes } from './routes';
import { DEFAULT_MONGO_URI, DEFAULT_PORT } from './constants';

const app = express();

connectRoutes(app);

mongoose.connect(DEFAULT_MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    app.listen(DEFAULT_PORT, () => {
      console.log('React block BACK is running on PORT ' + DEFAULT_PORT);
    });
  });
