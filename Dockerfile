FROM node:18-slim

WORKDIR /app

COPY package*.json /app
COPY yarn.lock /app

RUN yarn install

COPY . /app

CMD [ "yarn", "start" ]
