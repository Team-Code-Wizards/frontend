FROM node:18-slim AS builder
ENV NODE_ENV production
WORKDIR /app
COPY package*.json ./
RUN npm ci --ignore-scripts --only=production

COPY . ./
COPY infra/next.config.js .
RUN npm run build

FROM node:18-slim AS runner
WORKDIR /app
RUN npm i sharp -g
COPY --from=builder /app/package*.json .
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

ENV NEXT_SHARP_PATH=/usr/local/lib/node_modules/sharp/
EXPOSE 3000
CMD ["node", "server.js"]
