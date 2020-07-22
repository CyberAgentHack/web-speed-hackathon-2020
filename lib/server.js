import express from 'express';
import { apiController } from './controller/api';
import { spaController } from './controller/spa';
import expressStaticGzip from 'express-static-gzip';

const PORT = process.env.PORT || 3000;
const app = express();

app.use('/', expressStaticGzip('dist'));

app.use(apiController);
app.use(spaController);

app.listen(PORT);
