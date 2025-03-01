#!/bin/sh
export G=typescript-axios
export C=./open-api-generator-config.json
export O=./src/@apis/

rm -rf $O/*/interfaces/* 
rm -rf $O/*/services/* 
find ./src/@apis/*/interfaces/  ! -name any-type.ts -delete


openapi-generator generate -i https://api.rapor.pro/swagger/v1/swagger.json -g $G  -o $O/rapor-pro-api -c $C