BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "auteurs" (
	"id"	INTEGER,
	"name"	TEXT NOT NULL,
	"prenom"	TEXT NOT NULL,
	"annee_naissance"	INTEGER NOT NULL,
	"annee_mort"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "livres" (
	"id"	INTEGER,
	"titre"	TEXT NOT NULL,
	"annee_publication"	TEXT NOT NULL,
	"quantite"	INTEGER NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "auteur_livre" (
	"id_auteur"	INTEGER,
	"id_livre"	INTEGER,
	FOREIGN KEY("id_livre") REFERENCES "livres"("id"),
	FOREIGN KEY("id_auteur") REFERENCES "auteurs"("id")
);
CREATE TABLE IF NOT EXISTS "personnes" (
	"id"	INTEGER,
	"nom"	TEXT NOT NULL,
	"prenom"	TEXT NOT NULL,
	"email"	TEXT NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "emprunt" (
	"id"	INTEGER,
	"id_livre"	INTEGER NOT NULL,
	"id_personne"	INTEGER NOT NULL,
	"date_emprunt"	INTEGER NOT NULL,
	"date_retour"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("id_personne") REFERENCES "personnes"("id"),
	FOREIGN KEY("id_livre") REFERENCES "livres"("id")
);
COMMIT;
