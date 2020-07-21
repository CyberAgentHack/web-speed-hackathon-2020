'use strict';

const path = require('path');

const importPlugin = require('postcss-import');
const autoprefixer = require('autoprefixer');
const customProperties = require('postcss-custom-properties');

module.exports = {
  plugins: [
    importPlugin({
      root: path.resolve(__dirname, 'src'),
    }),

    autoprefixer(),

    customProperties(),
  ],

  map: process.env.NODE_ENV !== 'production',
};
