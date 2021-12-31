#!/bin/bash

yarn build
rm -rf ../city-pages/*
cp -r dist/* ../city-pages

cd ../city-pages
git add -A
git commit -m "New version"
git push -f

cd ../city