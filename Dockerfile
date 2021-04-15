FROM node:10
WORKDIR /app

COPY tsconfig.json ./
COPY .babelrc ./

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY src/ ./src/

EXPOSE 3000

CMD [ "yarn", "start" ]