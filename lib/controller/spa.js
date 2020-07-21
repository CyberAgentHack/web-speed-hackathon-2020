const fs = require('fs');
const path = require('path');
const express = require('express');

const spaController = express.Router();

spaController.all('*', (_req, res) => {
  fs.readFile(
    path.resolve(__dirname, '..', '..', 'dist', 'index.html'),
    'utf-8',
    (err, data) => {
      if (err) {
        throw err;
      }

      res.send(data);
    }
  );
});

module.exports = {
  spaController,
};
