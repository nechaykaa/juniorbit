FROM node:16

COPY package*.json ./

WORKDIR /usr/src/app

RUN npm install
RUN npm install sharp

COPY . .

RUN npm run build