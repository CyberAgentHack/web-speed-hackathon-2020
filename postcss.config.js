'use strict';

const path = require('path');

const importPlugin = require('postcss-import');
const autoprefixer = require('autoprefixer');
const customProperties = require('postcss-custom-properties');
const cssNano = require('cssnano');

module.exports = {
  plugins: [
    importPlugin({
      root: path.resolve(__dirname, 'src'),
    }),
    autoprefixer({ grid: true }),
    customProperties(),
    cssNano(),
  ],

  map: process.env.NODE_ENV === 'development',
};
