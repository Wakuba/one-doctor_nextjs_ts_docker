FROM node:15.12.0-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install && npm install next
