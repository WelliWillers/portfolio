set -e
git add .
git commit -m "Commit de atualização de conteúdo do portfolio"
git push origin master

npm run build

cd dist

git init
git remote add origin https://github.com/WelliWillers/portfolio.git
git add .
git commit -m 'deploy dist to production'

git push --force origin master:gh-pages
