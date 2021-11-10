set -e
git add .
git commit -m "Commit de atualização"
git push origin master

npm run build

git add dist -f
git commit -m "deploy to gh-pages"
git subtree push --prefix dist origin gh-pages