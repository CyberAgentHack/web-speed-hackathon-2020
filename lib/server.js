import express from 'express';
import expressStaticGzip from 'express-static-gzip';

import { apiController } from './controller/api';
import { spaController } from './controller/spa';

const PORT = process.env.PORT || 3000;
const DIST_DIR = 'dist';
const app = express();

app.use(expressStaticGzip(DIST_DIR));

app.use(
  express.static(DIST_DIR, {
    maxAge: '1y',
  }),
);
app.use(apiController);
app.use(spaController);

app.listen(PORT);
