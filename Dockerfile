FROM node:10

# client
WORKDIR /app/client
COPY client /app/client
RUN npm install
RUN npm run build

# server
WORKDIR /app
COPY . /app
RUN npm install

EXPOSE 5000
CMD npm start