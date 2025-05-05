FROM node:20-alpine

WORKDIR /app

# Copy package.json and package-lock.json first for better layer caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 5000

# Command to run the application
CMD ["npm", "run", "start"]