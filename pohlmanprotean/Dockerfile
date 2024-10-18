# Use Node.js as the base image
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY ["package*.json", "./"]

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Expose the application port
EXPOSE 8080

# Command to serve the app
CMD ["serve", "-s", "build", "-l", "8080"]
