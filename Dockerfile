FROM node:20

RUN apt-get update && apt-get install -y curl

WORKDIR /app

COPY package.json .
COPY index.js .

CMD ["node", "index.js"]
