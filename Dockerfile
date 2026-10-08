# heyduck (heyburrito) — ts-node 로 직접 실행. 데이터(파일 DB)는 PVC 로 마운트(DATABASE_PATH).
# Zscaler 환경 빌드: --secret id=ca-cert,src=./zscaler-ca.crt 로 npm/TLS CA 주입(required=false).
FROM node:20-slim

RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Zscaler 루트 CA 등록(있을 때만). npm 은 NODE_EXTRA_CA_CERTS 로도 신뢰.
RUN --mount=type=secret,id=ca-cert,target=/tmp/zscaler-ca.crt,required=false \
    if [ -f /tmp/zscaler-ca.crt ]; then \
      cp /tmp/zscaler-ca.crt /usr/local/share/ca-certificates/zscaler-ca.crt && update-ca-certificates \
      && export NODE_EXTRA_CA_CERTS=/etc/ssl/certs/ca-certificates.crt; \
    fi

WORKDIR /usr/src/app

COPY package.json package-lock.json* ./
RUN --mount=type=secret,id=ca-cert,target=/tmp/zscaler-ca.crt,required=false \
    if [ -f /tmp/zscaler-ca.crt ]; then export NODE_EXTRA_CA_CERTS=/etc/ssl/certs/ca-certificates.crt; fi \
    && npm install --omit=dev

COPY . .

CMD ["npm", "start"]
