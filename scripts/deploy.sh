#!/usr/bin/env sh
set -x

echo $HOME

tar -czf package.tgz dist/ && \
rsync -vz package.tgz $REMOTE_USER@$REMOTE_HOST:$REMOTE_APP_DIR && \
ssh $REMOTE_USER@$REMOTE_HOST 'bash -s' < ./scripts/untar.sh
