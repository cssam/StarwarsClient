FROM node:current-alpine as build-stage

# set working directory
WORKDIR /StarwarsClient

# add `/app/node_modules/.bin` to $PATH
ENV PATH /StarwarsClient/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /StarwarsClient/package.json
RUN npm install
RUN npm install -g @angular/cli@12.1.4

# add app
COPY . /StarwarsClient

# build the app
RUN ng build --configuration production --output-path=dist


###########
## prod ###
###########

# base image
FROM nginx:1.16.0-alpine

# Clean nginx
RUN rm -rf /usr/share/nginx/html/*

# copy artifact build from the 'build environment'
COPY --from=build-stage /StarwarsClient/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

# Permission
RUN chown root /usr/share/nginx/html/*
RUN chmod 755 /usr/share/nginx/html/*

# Expose port
EXPOSE 2000 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
