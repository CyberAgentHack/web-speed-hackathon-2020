import express from 'express';
import staticGzip from 'express-static-gzip';
import { apiController } from './controller/api';
import { spaController } from './controller/spa';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(
  staticGzip('dist', {
    enableBrotli: true,
  }),
);
app.use(apiController);
app.use(spaController);

app.listen(PORT);
