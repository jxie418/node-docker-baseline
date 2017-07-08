FROM node:8.1.2

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# mapped by the docker daemon
EXPOSE 3000

# define the command to run your app
CMD [ "npm", "start" ]
