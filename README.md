# api-nodejs

# install dependencies

npm install

# compile ts to js

npm run build

# runs dev server with nodemon

npm run dev

# runs ts compiler

npx tsc

# books endpoint

http://localhost:8000/api/livres

http://localhost:8000/api/livres/:id

http://localhost:8000/api/livres/:id/quantite

# authors endpoint

http://localhost:8000/api/auteurs

http://localhost:8000/api/auteurs/:id

# api key request example

curl -X GET http://localhost:8000/api/auteurs -H "x-api-key: 8f94826adab8ffebbeadb4f9e161b2dc"
