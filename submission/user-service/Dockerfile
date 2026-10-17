# Use Node.js LTS base image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose service port
EXPOSE 3000

# Start service
CMD ["npm", "start"]

