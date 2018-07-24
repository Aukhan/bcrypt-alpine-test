FROM node:alpine

RUN mkdir /app

WORKDIR /app

COPY . /app

RUN apk add --no-cache --virtual deps \
  python \
  build-base \
  && npm install \
  && apk del deps

CMD ["npm", "test"]
