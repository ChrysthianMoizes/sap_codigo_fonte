#!/bin/sh

set -eu

cd sapclient
npm config set strict-ssl false
npm install --registry=http://element.basis.com.br/repository/npm-registry/
npm run build

cd dist
tar zcvf dist.tar.gz *
mv dist.tar.gz ../../docker/nginx/
