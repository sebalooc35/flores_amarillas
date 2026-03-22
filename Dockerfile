# ---- Build stage ----
FROM oven/bun:1 AS builder

WORKDIR /app

# Copy manifest files first for better layer caching
COPY package.json bun.lock* ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source
COPY . .

# Build the app
RUN bun run build


# ---- Runtime stage ----
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built app
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose nginx port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
