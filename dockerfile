#FROM node:18-alpine AS deps
#WORKDIR /usr/src/app
#COPY package*.json ./
#RUN npm install pnpm -g
#RUN pnpm install
#
#FROM node:18-alpine AS builder
#WORKDIR /usr/src/app
#COPY . .
#COPY --from=deps /usr/src/app/node_modules ./node_modules
#RUN npm run build
#RUN npm run build:post

FROM node:18-alpine AS runner
WORKDIR /usr/src/app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN chown -R nextjs /usr/src/app
#COPY --from=builder /usr/src/app/next.config.js ./
#COPY --from=builder /usr/src/app/public ./public
#COPY --from=builder /usr/src/app/package.json ./
#COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/standalone ./
#COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/static ./.next/static
COPY next.config.js ./
COPY public ./public
COPY package.json ./
COPY .next/standalone ./
COPY .next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]

