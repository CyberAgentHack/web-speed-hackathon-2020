import express from 'express';
import { apiController } from './controller/api';
import { spaController } from './controller/spa';

const expressStaticGzip = require('express-static-gzip');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(
  '/',
  expressStaticGzip('dist', {
    enableBrotli: true,
    customCompressions: [
      {
        encodingName: 'deflate',
        fileExtension: 'zz',
      },
    ],
    orderPreference: ['br'],
  }),
);
app.use(apiController);
app.use(spaController);

app.listen(PORT);
