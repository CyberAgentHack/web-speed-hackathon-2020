'use strict';

const path = require('path');

const importPlugin = require('postcss-import');
const autoprefixer = require('autoprefixer');
const customProperties = require('postcss-custom-properties');

module.exports = (ctx) => ({
  plugins: [
    importPlugin({
      root: path.resolve(__dirname, 'src'),
    }),

    autoprefixer(),

    customProperties(),
  ],

  map: ctx.env !== 'production',
});
