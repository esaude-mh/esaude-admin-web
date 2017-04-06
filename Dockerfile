FROM nginx:1.11.12-alpine

ADD dist /usr/share/nginx/html

VOLUME /opt/esaude/data

EXPOSE 80
