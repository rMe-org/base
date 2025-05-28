# Base image for development dependencies
FROM oven/bun:1 AS base

# Set working directory early
WORKDIR /app

# Install system dependencies in a single layer
RUN apt-get update -y && \
	apt-get install -y --no-install-recommends git && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/*

# Dependencies stage
FROM base AS deps

# Copy package files first for better caching
COPY package.json bun.lock* ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Remove Dockerfile from the image to avoid including it in the final build
RUN rm -f Dockerfile

# Initialize git repository with proper configuration
RUN cd /app && \
	git init -b main && \
	git config --global --add safe.directory /app && \
	git config --global user.name "creatr-agent" && \
	git config --global user.email "creatr-agent@getcreatr.com" && \
	chmod +x ./lint.sh && \
	git add . && \
	git commit -m "Initial Commit"

# Export stage - create distributable artifacts
FROM alpine:latest AS export-stage

# Install tar utility
RUN apk add --no-cache tar

# Copy source code and node_modules from deps stage
COPY --from=deps /app /tmp/source
COPY --from=deps /app/node_modules /deps/node_modules

# Create source archive excluding node_modules and other build artifacts
RUN cd /tmp/source && \
	tar -czf /source.tar.gz \
	--exclude=node_modules \
	.

# Create final directory structure
RUN mkdir -p /source && \
	mv /source.tar.gz /source/ && \
	rm -rf /tmp/source