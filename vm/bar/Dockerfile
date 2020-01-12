FROM node:13.6.0 as builder

WORKDIR /var/lib/app/
COPY ./package.json ./
COPY ./package-lock.json ./
COPY ./src/ ./src
COPY ./public/ ./public

ARG PUBLIC_URL
RUN npm i
RUN npm run build

FROM nginx:1.17.7

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /var/lib/app/build/ /var/www/
