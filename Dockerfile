FROM node:20 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
COPY infra/next.config.js ./
RUN npm run build

FROM nginx as static
COPY ./infra/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html