#!/usr/bin/env bash
set -x

export NODE_ENV=production
export NVM_BIN=$HOME/.nvm/versions/node/v6.9.0/bin

cd /var/www/html/monti/ && \
tar zxvf package.tgz -C . &&\
cp -a /var/www/html/monti/dist/. /var/www/html/monti && \
rm -rf /var/www/html/monti/dist  /var/www/html/monti/package.tgz
