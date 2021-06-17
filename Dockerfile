FROM node:14.17.1


EXPOSE 3000 35729
WORKDIR /app

CMD yarn install && yarn run start --host 0.0.0.0