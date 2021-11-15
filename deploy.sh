set -e
git add .
git commit -m "Commit de atualização de conteúdo"
git push origin master

npm run build

git add dist -f
git commit -m 'deploy'

git subtree push --prefix dist origin gh-pages
