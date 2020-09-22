import express from 'express';
import { apiController } from '../lib/controller/api';
import { spaController } from '../lib/controller/spa';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('dist'));
app.use(apiController);
app.use(spaController);

(process.env.NOW_REGION) ? module.exports = app : app.listen(PORT);
