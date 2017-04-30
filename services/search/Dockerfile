FROM node:7

MAINTAINER Ananth Rao "ananthamapod@gmail.com"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app
EXPOSE 3001

CMD ["npm", "start"]
