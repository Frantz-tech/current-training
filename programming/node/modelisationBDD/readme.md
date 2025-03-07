# Phase 1 - Cours - Modélisation des Bases de Données

https://formation-dwwm.notion.site/phase-1-modelisation-bdd
https://formation-dwwm.notion.site/phase-1-modelisation-bdd#1ab26ec923dc8177bb44f7dba75021ad
https://formation-dwwm.notion.site/phase1-question-bdd
https://formation-dwwm.notion.site/exemple-view-trigger
https://formation-dwwm.notion.site/controleurs-et-modeles
https://formation-dwwm.notion.site/Exercice-API-REST-1af26ec923dc8027bc79e5300cb3950b?pvs=73

### Notre exemple fil rouge : gestion d'une bibliothèque

Tout au long du cours, nous travaillerons sur un exemple concret : la création d'un système de gestion pour une bibliothèque. Ce cas d'usage nous permettra de :

- Identifier des entités concrètes (livres, auteurs, membres, emprunts...)
- Établir des relations variées entre ces entités
- Rencontrer des problématiques réelles de modélisation
- Voir l'évolution complète du projet, de la conception à l'implémentation

🧪 Commandes SQLite utiles

# Ouvrir la base de données

sqlite3 bibliotheque.db

# Afficher toutes les tables

.tables

# Afficher le schéma d'une table

.schema LIVRE

# Afficher le schéma de toutes les tables

.schema

# Configurer l'affichage

.mode column
.mode table
.headers on

# Exécuter une requête

SELECT \* FROM LIVRE;

# Sortir de SQLite

.quit || .exit

## Ressources additionnelles

- [SQL.sh](https://sql.sh/) - Tutoriels et référence SQL en français
- [dbdiagram.io](https://dbdiagram.io/) - Outil en ligne pour la modélisation
- [SQLiteBrowser](https://sqlitebrowser.org/) - Interface graphique pour manipuler des bases SQLite
- [W3Schools SQL Tutorial](https://www.w3schools.com/sql/) - Tutoriel SQL interactif (en anglais)
