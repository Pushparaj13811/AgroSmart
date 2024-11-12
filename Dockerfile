FROM oven/bun:1 AS builder

WORKDIR /app

COPY package*.json bun.lockb ./

RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/bun.lockb ./

RUN curl -fsSL https://bun.sh/install | bash

ENV PATH="/root/.bun/bin:$PATH"

RUN bun install --production --frozen-lockfile

EXPOSE 4173

CMD ["npx", "serve", "dist"]
