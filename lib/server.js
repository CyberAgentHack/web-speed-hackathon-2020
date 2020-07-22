import express from 'express';
import { apiController } from './controller/api';
import { spaController } from './controller/spa';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(
  express.static('dist', {
    maxAge: '1y',
  }),
);
app.use(apiController);
app.use(spaController);

app.listen(PORT);
