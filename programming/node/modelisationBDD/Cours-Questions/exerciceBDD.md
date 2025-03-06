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
   INSERT INTO LIVRE (titre,ISBN,nb_pages,année_publication,uniquement_sur_place,disponible)
   VALUES
   ('JavaScript Moderne', '987654321098765', 600, '2024-11-10', 0, 1),
   ('Introduction à Node.js', '564738291047562', 350, '2023-06-15', 1, 1),
   ('Les bases du CSS', '745839102456789', 450, '2022-03-19', 0, 0),
   ('Python pour débutants', '963852741036258', 400, '2023-05-05', 0, 1),
   ('Pratique du développement web', '258147963025478', 700, '2022-07-30', 1, 1),
   ('Vue.js pour les développeurs', '159753486032159', 500, '2024-09-10', 0, 1),
   ('Les secrets de React', '321654987753258', 650, '2023-12-12', 0, 0);

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
- Afficher le nombre de livres par catégorie
- Trouver l'auteur ayant écrit le plus de livres

4. **Mise à jour et suppression**
   - Modifier le titre d'un livre
   - Supprimer un livre
   - Mettre à jour la nationalité d'un auteur

### 🔍 Points d'attention

- Respect de l'intégrité référentielle (clés étrangères)

✅ **Bonus**

- Ajouter des index pour optimiser les performances des requêtes
- Écrire un script Node.js qui exécute automatiquement toutes les requêtes et affiche les résultats
