import express from 'express';

const PORT = 3000;

const app = express();

app.listen(PORT, () => {
  console.log('React block BACK is running on PORT ' + PORT);
});
