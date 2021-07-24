import express from 'express';
import v1 from './routes/v1';

const PORT = 3000;

const app = express();

app.use('/', v1);

app.listen(PORT, () => {
  console.log('React block BACK is running on PORT ' + PORT);
});
