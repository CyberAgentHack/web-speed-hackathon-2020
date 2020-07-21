import express from 'express';
import compression from 'compression';
import { apiController } from './controller/api';
import { spaController } from './controller/spa';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('dist'));
app.use(compression());
app.use(apiController);
app.use(spaController);

app.listen(PORT);
