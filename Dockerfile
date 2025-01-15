FROM node:20.16-alpine3.19 AS base

FROM base AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /build
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile
COPY . .
RUN yarn build

FROM base AS runner
WORKDIR /app

COPY --from=builder /build/public ./public
COPY --from=builder /build/.next/standalone ./
COPY --from=builder /build/.next/static ./.next/static
COPY --from=builder /build/dist ./dist
COPY --from=builder /build/node_modules/next ./node_modules/next

EXPOSE 3002

CMD ["yarn", "start"]