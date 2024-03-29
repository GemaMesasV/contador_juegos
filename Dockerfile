FROM nginx:1.13.3-alpine
COPY nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY docs /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]