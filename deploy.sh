set -e
git add .
git commit -m "Commit de atualização skills"
git push origin master

npm run build

git add dist -f
git remote add origin https://github.com/WelliWillers/portfolio.git
git commit -m "deploy to gh-pages 1"
git subtree push --prefix dist origin gh-pages