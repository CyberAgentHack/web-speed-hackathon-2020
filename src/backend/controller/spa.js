import fs from 'fs';
import path from 'path';
import express from 'express';

export const spaController = express.Router();

spaController.all('*', (_req, res) => {
  const result = fs.readFileSync(
    path.resolve(process.cwd(), 'dist', 'index.html'),
    'utf-8',
  );
  res.send(result);
});
