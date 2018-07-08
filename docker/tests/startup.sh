#!/bin/bash

cd /app

pwd
ls -la

npm install
npm rebuild node-sass
npm run e2e
