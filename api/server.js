'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/webhook', (req, res) => res.send('Hello LINE BOT!(GET)'));

(process.env.NOW_REGION) ? module.exports = app : app.listen(PORT);
console.log(`Server running at ${PORT}`);