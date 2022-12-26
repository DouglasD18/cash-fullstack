FROM node:18.12.1-alpine

WORKDIR /app-backend

COPY package* ./

RUN npm install

COPY . .

RUN npx tsc

CMD [ "npm", "start" ]