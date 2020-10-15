FROM node:alpine

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080

COPY package.json .

RUN npm i

COPY ["next.config.js","postcss.config.js", "tailwind.config.js", "./"]

COPY pages pages
COPY public public
COPY config config

RUN npm run build

CMD [ "npm","start" ]