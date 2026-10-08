# heyduck (heyburrito) — ts-node 로 직접 실행. 데이터(파일 DB)는 PVC 로 마운트(DATABASE_PATH).
FROM node:20-slim

RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY package.json package-lock.json* ./
RUN npm install --omit=dev

COPY . .

CMD ["npm", "start"]
