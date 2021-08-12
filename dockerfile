FROM node:latest

WORKDIR /usr/app

COPY package.json yarn.lock /usr/app/

RUN yarn

COPY . .

EXPOSE 3000

ENTRYPOINT [ "yarn", "start" ]
