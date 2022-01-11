FROM nginx:1.19.8

WORKDIR /var/www/emotie.me
COPY ./build .
COPY ./nginx.conf /etc/nginx/conf.d/emotie.me.conf

CMD ["nginx", "-g", "daemon off;"]
