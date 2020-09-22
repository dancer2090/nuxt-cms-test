#!/bin/bash
set -xe

if [ $TRAVIS_BRANCH == 'master' ] ; then
  eval "$(ssh-agent -s)"
  ssh-add
  npm run build
  pm2 restart /home/bitnami/ecosystem.config.js
else
  echo "Not deploying, since this branch isn't master."
fi