### 🛠️ Implémentation

💡Vous pouvez télécharger les requêtes de création de table sous le format MySQL sur dbdiagram

- **Schéma SQL** (init.sql)
- **Script d'initialisation** (init.js)
- **Base de données** (bibliotheque.db)
- **Autres** (Peut-être d'autres fichiers sont nécessaires ou peut-être pas.)

### 📝 Exercices SQL à réaliser

1. **Insertion de données**

   - Insérer au moins 3 nouvelles catégories

   =>
   INSERT INTO CATEGORIES (nom_genre, description)
   VALUES
   ('Policier', ''),
   ('Romance',''),
   ('Science-Fiction',''),
   ('Jeunesse',''),
   ('Histoire','');

   - Insérer au moins 4 nouveaux auteurs

   =>
   INSERT INTO AUTEUR (nom_auteur,prénom_auteur,date_naissance)
   VALUES
   ('Sens', 'George', '1965-05-15')
   ('Spilberg', 'Steven', '1959-08-02')
   ('Roadman', 'Dani', '1961-12-30')
   ('Polak', 'Zoelski', '1948-05-08')

   - Insérer au moins 10 nouveaux livres et les associer à leurs auteurs

   =>
   INSERT INTO LIVRE (titre,ISBN,nb_pages,annee_publication,uniquement_sur_place,disponible)
   VALUES
   ('JavaScript Moderne', '987654321098765', 600, '2024-11-10', 0, 1),
   ('Introduction à Node.js', '564738291047562', 350, '2023-06-15', 1, 1),
   ('Les bases du CSS', '745839102456789', 450, '2022-03-19', 0, 0),
   ('Python pour débutants', '963852741036258', 400, '2023-05-05', 0, 1),
   ('Pratique du développement web', '258147963025478', 700, '2022-07-30', 1, 1),
   ('Vue.js pour les développeurs', '159753486032159', 500, '2024-09-10', 0, 1),
   ('Les secrets de React', '321654987753258', 650, '2023-12-12', 0, 0),
   ('Maîtriser TypeScript', '654321987012345', 550, '2024-02-20', 0, 1),
   ('Guide complet SQL', '789456123078945', 480, '2023-08-25', 1, 1),
   ('Développement Full Stack', '147258369014725', 720, '2024-01-15', 0, 1);

2. **Requêtes de sélection**
   - Afficher tous les livres d'un auteur spécifique

=> SELECT \* FROM AUTEUR_LIVRE WHERE auteur_id = 2;

- Afficher tous les livres d'une catégorie donnée

=> Catégorie S-F :
SELECT \* FROM LIVRE_CATEGORIES WHERE categories_id = 3;

- Lister les auteurs français

=>
SELECT AUTEUR.nom_auteur, AUTEUR.prénom_auteur FROM AUTEUR JOIN PAYS ON AUTEUR.auteur_id = PAYS.id_pays WHERE PAYS.nom_pays = 'France';

SELECT 3. **Requêtes de jointure**

- Afficher les livres avec leurs auteurs et catégories

=>
SELECT LIVRE.titre, AUTEUR.nom_auteur, CATEGORIES.nom_genre // Données que l'ont veut récupérer
FROM LIVRE // A partir de cette table, je fais les jointures
JOIN AUTEUR_LIVRE ON LIVRE.livre_id = AUTEUR_LIVRE.livre_id // On joint la table auteur_livre à livre pour faire la connexion entre les auteurs et les livres
JOIN AUTEUR ON AUTEUR_LIVRE.auteur_id = AUTEUR.auteur_id // On joint la table auteur à la table auteur_livre pour récupérer le nom du l'auteur qui à écrit le livre
JOIN LIVRE_CATEGORIES ON LIVRE.livre_id = LIVRE_CATEGORIES.livre_id // On joint la table livre_categorien à la table livre pour faire la connexion entre les categories et les livres
JOIN CATEGORIES ON LIVRE_CATEGORIES.categories_id = CATEGORIES.categories_id; // On joint la table Categorie à la table Livre_catégorie pour récuperer le genre en fonction du livre

- Afficher le nombre de livres par catégorie

=>
SELECT CATEGORIES.nom_genre, COUNT(LIVRE_CATEGORIES.categories_id) AS total_livre_par_categories
FROM CATEGORIES
JOIN LIVRE_CATEGORIES ON CATEGORIES.categories_id = LIVRE_CATEGORIES.categories_id
GROUP BY CATEGORIES.nom_genre;

- Trouver l'auteur ayant écrit le plus de livres

=>
SELECT AUTEUR.nom_auteur, COUNT (AUTEUR_LIVRE.livre_id) AS nbr_livre_total
FROM AUTEUR
JOIN AUTEUR_LIVRE ON AUTEUR.auteur_id = AUTEUR_LIVRE.auteur_id
GROUP BY AUTEUR.auteur_id
ORDER BY nbr_livre_total DESC
LIMIT 1;

4. **Mise à jour et suppression**
   - Modifier le titre d'un livre

=>
UPDATE LIVRE
SET titre = 'Blanche neiges et les 8 nains '
WHERE livre_id = 2 ;

- Supprimer un livre

=>
DELETE FROM LIVRE
WHERE livre_id = 3;

- Mettre à jour la nationalité d'un auteur

=>
UPDATE AUTEUR
SET id_pays = 3
WHERE auteur_id = 1;

### 🔍 Points d'attention

- Respect de l'intégrité référentielle (clés étrangères)

✅ **Bonus**

- Ajouter des index pour optimiser les performances des requêtes
- Écrire un script Node.js qui exécute automatiquement toutes les requêtes et affiche les résultats

INSERT INTO LIVRE_EXEMPLAIRE (exemplaire_id, livre_id)
VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 2),
(5, 2),
(6, 3),
(7, 3),
(8, 3),
(9, 4),
(10, 5),

(11, 6),
(12, 6),
(13, 6),
(14, 7),
(15, 7),
(16, 8),
(17, 8),
(18, 8),
(19, 9),
(20,10);
