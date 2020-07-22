'use strict';

const path = require('path');

const importPlugin = require('postcss-import');
const autoprefixer = require('autoprefixer');
const customProperties = require('postcss-custom-properties');

const srcPath = path.resolve(__dirname, 'src');

module.exports = {
  plugins: [
    importPlugin({
      root: srcPath,
    }),

    autoprefixer(),

    customProperties(),
    require('cssnano')({
      preset: 'default',
    }),
    require('@fullhuman/postcss-purgecss')({
      content: [
        `${srcPath}/**/*.jsx`,
        `${srcPath}/**/*.js`,
        `${srcPath}/index.html`,
      ],
      css: [`${srcPath}/app.css`],
      defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    }),
  ],
};
