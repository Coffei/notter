#!/usr/bin/env sh

set -ex

git fetch origin
git checkout prod
git rebase origin/prod
git merge origin/master

rm -rf docs/* dist/*
npm run build
cp -r dist/* docs/

git add docs/*
git commit -m "Update build"
git push origin HEAD
echo "Build pushed"

git checkout master
