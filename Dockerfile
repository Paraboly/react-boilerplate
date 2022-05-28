FROM node:12 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build
FROM nginx:stable-alpine
COPY --from=build /app/dist /bin/www
# COPY index.html /bin/www/index.html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
