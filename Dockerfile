FROM node:14-alpine

ENV PORT=8080

COPY package.json yarn.lock  ./
RUN yarn install

COPY .babelrc .backend.babelrc postcss.config.js webpack.config.js webpack.config.backend.js ./
COPY src src
RUN yarn build

CMD ["node", "dist/backend/server.js"]
