FROM node:22-alpine AS builder

RUN apk upgrade --no-cache

WORKDIR /app

COPY package.json package-lock.json ./
# npm install resolves platform-specific optional deps for Linux that a
# macOS-generated package-lock.json omits (e.g. Vite's @emnapi/core).
RUN npm install

COPY . .

ARG VITE_BASE=/
ENV VITE_BASE=${VITE_BASE}

RUN npm run build

FROM nginx:alpine

RUN apk upgrade --no-cache

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
