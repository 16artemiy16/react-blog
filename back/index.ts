import express from 'express';
import { connectRoutes } from './routes';
import { DEFAULT_PORT } from './constants';

const app = express();

connectRoutes(app);

app.listen(DEFAULT_PORT, () => {
  console.log('React block BACK is running on PORT ' + DEFAULT_PORT);
});
