FROM leochan007/nginx

LABEL MAINTAINER leo chan <leochan007@163.com>

ENV DEBIAN_FRONTEND noninteractive

COPY nginx/nginx-in-docker.conf /etc/nginx/nginx.conf

COPY nginx/charity-frontend-in-docker.conf /etc/nginx/conf.d/charity-frontend.conf

COPY dist /charity_browser

CMD nginx -g 'daemon off;'
