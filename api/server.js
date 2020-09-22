'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/api', (req, res) => res.send('Hello LINE BOT!(GET)'));
app.get('/api/hogehoge', (req, res) => res.send('Hello hogehoge'));

(process.env.NOW_REGION) ? module.exports = app : app.listen(PORT);
console.log(`Server running at ${PORT}`);