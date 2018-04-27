FROM node:8.9-alpine

RUN apk update

COPY ./homepage-cms /var/www/homepage-cms

WORKDIR /var/www/homepage-cms

RUN yarn && \
    yarn build

EXPOSE 3001

CMD [ "yarn", "prod" ]

# docker run -ti -p 3001:3001 --link mongo:mongo -d imageName
