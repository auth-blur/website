FROM node:alpine

WORKDIR /app


COPY package.json .

RUN npm i

COPY ["jsconfig.json","next.config.js","postcss.config.js", "tailwind.config.js", "./"]

COPY pages pages
COPY public public
COPY styles styles

RUN npm run build

ENV NODE_ENV=production
ENV PORT=8080

CMD [ "npm","start" ]
