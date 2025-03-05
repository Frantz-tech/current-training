# Module 4 : Pratique avec dbdiagram.io et DBML

💡 **Conseil pratique** : Pour ce module, utilisez l'outil [dbdiagram.io](http://dbdiagram.io) qui vous permet de créer des schémas de base de données en utilisant la syntaxe DBML (Database Markup Language). Cet outil vous aidera à visualiser rapidement la structure de votre base de données et à générer du code SQL.

### Questions - Implémentation technique du modèle

**1. Introduction à DBML**

- Qu'est-ce que DBML (Database Markup Language) et comment se compare-t-il aux outils de modélisation visuelle?
- Quels sont les avantages d'utiliser un langage comme DBML pour décrire une base de données?
- Accédez à dbdiagram.io et familiarisez-vous avec l'interface. Quelles fonctionnalités vous semblent les plus utiles?

**2. Définition des tables en DBML**

- Comment définit-on une table en DBML?
- Pour la table LIVRE, quels types de données seraient les plus appropriés pour: titre, ISBN, nombre de pages et année de publication?
- Écrivez le code DBML pour définir la table LIVRE avec ces attributs et une clé primaire.

**3. Types de données et contraintes**

- Quels sont les principaux types de données disponibles en DBML/SQL?
- Pour chacun des attributs suivants, quel type de données choisiriez-vous et pourquoi?
  - Nom d'un membre
  - Date d'emprunt
  - Adresse email
  - État d'un exemplaire (neuf, bon, abîmé)
- Comment ajouter une contrainte pour s'assurer qu'un attribut est toujours positif ou non-vide?

**4. Définition des relations en DBML**

- Comment définit-on une relation entre deux tables en DBML?
- Écrivez le code DBML pour établir:
  - Une relation 1:N entre CATEGORIE et LIVRE
  - Une relation N:N entre AUTEUR et LIVRE (avec table de jonction)
- Que signifie la notation `>` dans une relation DBML (ex: `ref: LIVRE.categorie_id > CATEGORIE.id`)?

**5. Table EXEMPLAIRE et EMPRUNT en DBML**

- En vous basant sur votre MLD, écrivez le code DBML pour définir:
  - La table EXEMPLAIRE avec ses attributs et relations
  - La table EMPRUNT avec ses attributs et relations
- Comment ajouteriez-vous une contrainte pour vérifier qu'un exemplaire n'est pas emprunté s'il est marqué comme "indisponible"?
- Quelles contraintes ajouteriez-vous pour gérer les livres rares qui ne peuvent être consultés que sur place? Comment modéliseriez-vous cette restriction en DBML?

**6. Fonctionnalités avancées de DBML**

- Qu'est-ce qu'un index de base de données et pourquoi est-il utile?
- Comment définiriez-vous un index sur la table LIVRE pour accélérer les recherches par titre?
- Comment pourriez-vous générer automatiquement une date d'inscription pour un nouveau membre?

**7. Projet final**

- En utilisant dbdiagram.io, créez un schéma DBML complet pour notre bibliothèque en incluant toutes les tables et relations que nous avons définies.
- Ajoutez au moins trois contraintes qui amélioreraient l'intégrité des données.
- Définissez des index sur les champs qui seraient fréquemment utilisés pour des recherches.
- Exportez votre schéma en format SQL et observez le code généré.
