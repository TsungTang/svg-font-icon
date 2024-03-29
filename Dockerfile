FROM node:14-alpine3.14

WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app


CMD [ "npm", "start" ]
