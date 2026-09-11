# syntax=docker/dockerfile:1

FROM node:22-slim AS base
WORKDIR /app
# The base image ships a "node" user at uid/gid 1000, matching the default
# first user on most Linux hosts. Using it (instead of root) means files
# written into the bind-mounted ./webapp (e.g. .next/) in the dev stage stay
# owned by the host user rather than root.

FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# ---- Development ----
# Runs `next dev` against the source mounted by docker-compose.
FROM base AS dev
ENV NODE_ENV=development
COPY --from=deps --chown=node:node /app/node_modules ./node_modules
COPY --chown=node:node package.json package-lock.json ./
COPY --chown=node:node . .
# .next is an anonymous volume (see docker-compose.override.yml); Docker
# seeds it from whatever is at this path in the image, so it must already
# be owned by "node" or `next dev` can't create files under it.
RUN mkdir -p .next && chown node:node .next
USER node
EXPOSE 3000
CMD ["npm", "run", "dev"]

# ---- Build ----
FROM base AS builder
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# DATABASE_URI/PAYLOAD_SECRET are only read to build the Payload config
# object at build time (no DB connection is made) so build-time
# placeholders are fine; real values are supplied at runtime.
ARG DATABASE_URI=postgres://placeholder:placeholder@localhost:5432/placeholder
ARG PAYLOAD_SECRET=placeholder-build-secret
ENV DATABASE_URI=${DATABASE_URI}
ENV PAYLOAD_SECRET=${PAYLOAD_SECRET}
RUN npm run build

# ---- Production ----
# Runs the Next.js standalone server produced by `output: "standalone"`.
FROM base AS runner
ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

USER node
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
CMD ["node", "server.js"]
