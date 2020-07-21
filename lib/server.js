import compression from 'compression';
import express from 'express';
import expressStaticGzip from 'express-static-gzip';
import { apiController } from './controller/api';
import { spaController } from './controller/spa';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(
  '/',
  expressStaticGzip('dist', {
    enableBrotli: true, // not a serverStatic option, will not be moved
    maxAge: 123, // not copied, as already present.
    index: 'main.js', // copied to serveStatic section
    serveStatic: {
      maxAge: 234, // will be kept
      cacheControl: false, // will be kept as well
    },
  }),
);
app.use(compression());
app.use(apiController);
app.use(spaController);

app.listen(PORT);
