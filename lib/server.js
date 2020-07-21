const express = require( 'express');
const { apiController } = require('./controller/api');
const { spaController } = require('./controller/spa');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('dist'));
app.use(apiController);
app.use(spaController);

app.listen(PORT);
