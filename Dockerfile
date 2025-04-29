# Step 1: Base - Building the application
FROM node:20 AS builder
WORKDIR /app

# Copy only the dependency files to leverage Docker's caching mechanism
# This allows Docker to cache the npm install step if package.json or package-lock.json hasn't changed
COPY package*.json ./

# Install the dependencies using npm
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the React application for production
RUN npm run build

# Step 2: Serving the application with Nginx
FROM nginx:stable-alpine

# Copy the build folder from the builder image to Nginx's web server directory
# This is where the static files of the React app will be served
COPY --from=builder /app/build /usr/share/nginx/html

# Copy the custom Nginx configuration file to adjust server settings
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for HTTP traffic (default port for Nginx)
EXPOSE 80

# Run the Nginx server in the foreground (daemon off)
CMD ["nginx", "-g", "daemon off;"]
