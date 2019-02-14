# FROM node:10
# WORKDIR /app
# COPY . /app
# RUN npm install
# CMD npm run server

# FROM node:10
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
# COPY package.json /app
# RUN npm install
# RUN npm install -g nodemon
# EXPOSE 5000
# CMD npm run server

# FROM node:10
# WORKDIR /app
# COPY . /app
# RUN npm install
# CMD npm server

FROM node:10

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json /app

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . /app

CMD npm start
EXPOSE 5000