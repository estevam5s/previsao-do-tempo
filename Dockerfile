# Use a base image with Node.js pre-installed
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install --production

# Copy the rest of the project files to the working directory
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the app with npm
CMD ["npm", "start"]
