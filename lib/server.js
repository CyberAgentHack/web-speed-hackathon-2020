const express = require('express');
const compression = require('compression');
const { apiController } = require('./controller/api');
const { spaController } = require('./controller/spa');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));
app.use(apiController);
app.use(spaController);

app.listen(PORT);
