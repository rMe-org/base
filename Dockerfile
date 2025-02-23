FROM node:18-alpine

# Install pnpm and set working directory
RUN npm install -g pnpm@9.6.0
WORKDIR /app

# Copy dependency files and install
COPY package.json pnpm-lock.yaml* ./
RUN corepack prepare pnpm@9.6.0 --activate && pnpm i --frozen-lockfile

# Copy source code
COPY . .

# Set environment variables
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1
ENV SKIP_ENV_VALIDATION=1

CMD ["pnpm", "run", "dev"]
