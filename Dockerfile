FROM node:19
WORKDIR /app
COPY ./www/package.json .
RUN npm install
COPY ./www/ .
# COPY ./docs/package.json .
# RUN npm install
# RUN npm run build
# COPY ./docs/build ./public/docs/
CMD ["npm", "start"]