FROM node:19
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
# COPY ./docs/package.json .
# RUN npm install
# RUN npm run build
# COPY ./docs/build ./public/docs/
CMD ["npm", "start"]