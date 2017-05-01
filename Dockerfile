FROM nginx:1.11.12-alpine

ADD dist /usr/share/nginx/html
ADD localtime /etc/localtime

VOLUME /opt/esaude/data

EXPOSE 80
