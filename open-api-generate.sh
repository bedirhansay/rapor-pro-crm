#!/bin/sh
export OPEN_API_CLI=openapi-generator-cli.jar
export G=typescript-axios
export C=./open-api-generator-config.json
export O=./src/apis/

rm -rf $O/*/services/* 
find ./src/apis/*/interfaces/  ! -name any-type.ts -delete

openapi-generator generate -i https://bosluk.nes.com.tr/v1.swagger.json -g $G  -o $O/car-api -c $C