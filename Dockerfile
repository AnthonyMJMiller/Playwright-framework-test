# Use the official Node.js image
FROM node:18.17.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Install Playwright dependencies
RUN npx playwright install

# Command to run the tests
CMD ["npm","run","apitest"]
