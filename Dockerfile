FROM node:20-alpine

# Install required dependencies for building native modules
RUN apk add --no-cache bash curl python3 make g++

WORKDIR /app

# Copy package.json files to install dependencies
COPY package*.json ./
RUN npm install

# Copy all application files
COPY . .

# Expose the port your app runs on
EXPOSE 5173

# Run the app in dev mode
CMD ["npm", "run", "dev"]
