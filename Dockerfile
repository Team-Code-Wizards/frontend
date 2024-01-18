FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build
#CMD cp -r build result_build
CMD ["npx", "-y", "http-server", "-p", "3000", "/app"] 