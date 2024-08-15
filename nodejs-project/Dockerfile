# https://dev.to/nodepractices/docker-best-practices-with-node-js-4ln4

FROM node:20.16.0-alpine3.20 As build

#
WORKDIR /usr/src/app

#
COPY . .

#
RUN npm install && npm run build

FROM node:20.16.0-alpine3.20

WORKDIR /usr/src/app


COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/package*.json  ./
RUN npm install --production && npm cache clean --force


#
EXPOSE 3000

#
CMD ["node", "dist/index.js"]
