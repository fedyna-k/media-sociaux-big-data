# Docker Hub node official image

# When building, the image first installs all dependencies.
# Then it compiles the typescript.
# Then the port is exposed and the microservice started.

FROM node:current-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE ${WEB_SERVER_PORT}

CMD [ "npm", "start" ]