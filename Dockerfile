FROM node:alpine

WORKDIR /app


COPY package.json .

RUN npm i

COPY ["next.config.js","postcss.config.js", "tailwind.config.js", "./"]

COPY pages pages
COPY public public

RUN npm run build

ENV NODE_ENV=production
ENV PORT=8080

CMD [ "npm","start" ]