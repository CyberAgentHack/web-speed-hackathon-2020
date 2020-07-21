const fs = require('fs');
const path = require('path');
const express = require('express');

const spaController = express.Router();

spaController.all('*', (_req, res) => {
  const result = fs.readFileSync(
    path.resolve(__dirname, '..', '..', 'dist', 'index.html'),
    'utf-8',
  );
  res.send(result);
});

module.exports = {
  spaController
};
