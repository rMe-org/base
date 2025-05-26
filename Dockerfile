# Base image for development dependencies
FROM oven/bun:1 AS base

# No need for pnpm installation since we'll use bun

# Install common dependencies that are likely to be used in Next.js projects
FROM base AS deps
WORKDIR /app

# Copy only package files for efficient caching
COPY . .

# Remove Dockerfile from the image
RUN rm -f Dockerfile

# Install dependencies
RUN bun install

# Reset git history and initialize a fresh repository on main branch with an Initial commit
RUN rm -rf .git && \
	git init -b main && \
	git config --global user.name "creatr-agent" && \
	git config --global user.email "creatr-agent@getcreatr.com" && \
	git add . && \
	git commit -m "Initial commit"

# Create a separate stage for exporting
FROM alpine:latest AS export-stage

# Create tar archive of the source code (excluding node_modules)
COPY --from=deps /app /source
RUN cd /source && \
	tar -czf /source.tar.gz --exclude=node_modules .

# Copy node_modules to a separate location for volume mounting
COPY --from=deps /app/node_modules /deps/node_modules

# Clean up the source directory and extract the tar
RUN rm -rf /source/* && \
	mv /source.tar.gz /source/