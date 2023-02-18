FROM node:16

COPY package*.json ./

WORKDIR /usr/src/app

RUN npm install

COPY . .

RUN npm run build