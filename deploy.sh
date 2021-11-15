set -e
git add .
git commit -m "Commit de atualização"
git push origin master

npm run build

cd dist

git init
git add .
git commit -m 'deploy teste 01'

git push -f git@github.com:WelliWillers/portfolio.git master:gh-pages

cd -

# git add dist -f
# git commit -m "deploy to gh-pages"
# git subtree push --prefix dist origin gh-pages