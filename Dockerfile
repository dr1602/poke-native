# syntax=docker/dockerfile:1
FROM docker
COPY --from=docker/buildx-bin /buildx /usr/libexec/docker/cli-plugins/docker-buildx
RUN docker buildx version

# Use a Node.js image with your specific version
FROM node:22.9.0

# Set the working directory
WORKDIR /app

# Copy the package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose the port
EXPOSE 3000

# Command to start the app
CMD ["npm", "start"]