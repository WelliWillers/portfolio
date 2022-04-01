set -e
git add .
git commit -m "Commit de atualização de conteúdo "
git push origin master

npm run build

cd dist

git init
git remote add origin git@github.com:WelliWillers/portfolio.git
git add .
git commit -m 'deploy dist to production'

git push --force origin master:gh-pages
