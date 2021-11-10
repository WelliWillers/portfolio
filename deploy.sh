#!/usr/bin/env sh

set -e
git add .
git commit -m "Commit atualização"
git push origin master

npm run build

git add dist -f
git commit -m "deploy to gh-pages"
git subtree push --prefix dist origin gh-pages