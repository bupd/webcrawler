FROM node:lts-bookworm-slim
COPY . /app
WORKDIR /app
CMD node app.js

