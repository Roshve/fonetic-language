# Use an official Node.js image as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the app's dependencies in the container
RUN npm ci

# Copy the rest of the application files to the container
COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
