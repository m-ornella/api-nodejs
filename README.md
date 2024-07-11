# api-nodejs

# install dependencies

npm install

# compile ts to js

npm run build

# runs dev server with nodemon

npm run dev

# runs ts compiler

npx tsc

# get all books endpoint

http://localhost:8000/api/livres

http://localhost:8000/api/livres/:id

http://localhost:8000/api/livres/:id/quantite

# get all authors endpoint

http://localhost:8000/api/auteurs
http://localhost:8000/api/auteurs/:id

# api key request example

curl -X GET http://localhost:8000/api/auteurs -H "x-api-key: 8f94826adab8ffebbeadb4f9e161b2dc"

SUIVI ENDPOINTS
GET /livre Retourne la liste des livres avec les informations des auteurs

### DONE

GET /livre/{id} Retourne la fiche du livre portant l’ID indiquée, avec les
informations des auteurs associés

### DONE

POST /livre Crée le livre selon les informations du corps de la requête
Les auteurs sont fournis par leurs IDs. La quantité en stock est initialisée à 1 si elle n’est pas fournie
Retourne une erreur si un auteur n’existe pas

### DONE

PUT /livre/{id} Modifie le livre selon les informations du corps de la requête
ℹLes auteurs sont fournis par leurs IDs
ℹLa quantité en stock n’est pas modifiable
⚠Retourne une erreur si un auteur n’existe pas

GET /livre/{id}/quantite Retourne la quantité totale et la quantité disponible pour le livre
ℹQuantité disponible = quantité totale - nombre d’emprunts en
cours

### DONE

PUT /livre/{id}/quantite Modifie la quantité totale pour le livre
⚠Retourne une erreur si la nouvelle quantité est inférieure au
nombre d’emprunts actuellement en cours

DELETE /livre/{id} Supprime le livre ### DONE
⚠Retourne une erreur si des emprunts sont en cours ---> à faire

GET /auteur Retourne la liste des auteurs

### DONE

GET /auteur/{id} Retourne la fiche de l’auteur portant l’ID indiquée

### DONE

POST /auteur Crée l’auteur selon les informations du corps de la requête

### DONE

PUT /auteur/{id} Modifie l’auteur selon les informations du corps de la requête

DELETE /auteur/{id} Supprime l’auteur
⚠Retourne une erreur si l’auteur est utilisé par un ou plusieurs livres

POST /emprunt Crée un emprunt selon les informations du corps de la requête
ℹLe livre est choisi par son ID
ℹLa date d’emprunt est remplie automatiquement à la date du jour
ℹLes informations de l’emprunteur permettent de le créer dans la table
personnes s’il n’existe pas ou de le modifier s’il existe déjà (identification
via l’email)
⚠Retourne une erreur si le le livre n’est pas empruntable (quantité
disponible = zéro)

PUT /emprunt/{id} Modifie l’emprunt (remplis la date de retour)
Recherche
Méthode URL Description

GET /recherche/{mots} Recherche des livres selon les mots fournis parmi le titre et le
nom/prénom de l’auteur
ℹLes résultats sont classés par taux de correspondance (à taux de
correspondance égal, l’ordre n’a pas d’importance)
Exemple : la recherche “hugo misérables” retournera le livre “Les
Misérables” de Victor Hugo, puis l’ensemble des livres de Victor
Hugo (peu importe leur ordre)
