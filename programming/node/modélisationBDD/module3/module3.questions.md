# Module 3 : Le Modèle Logique de Données (MLD)

💡 **Conseil pratique** : Pour ce module, vous pouvez continuer à utiliser [draw.io](https://app.diagrams.net/) en représentant les tables par des rectangles avec les clés primaires soulignées et les clés étrangères précédées de "FK".

### Questions - Transformation du MCD en MLD

**1. Introduction au MLD**

- Qu'est-ce qu'un Modèle Logique de Données (MLD) et en quoi diffère-t-il du MCD?

=> Une MLD traduit les entités et associations du MCD en tables et relations

- Pourquoi est-il nécessaire de passer du MCD au MLD avant de créer la base de données?

=> C'est nécessaire pour identifier clairement quels seront les tables que l'on devra lier entre-elles

**2. Transformations des entités**

- Comment une entité du MCD est-elle transformée dans le MLD?

=> dans le MLD, une entité est transformé en table

- Les attributs d'une entité subissent-ils des modifications lors de cette transformation?

=> Les attributs deviennent des colonnes

- Comment l'identifiant devient-il une clé primaire dans le MLD?

=> il devient une clé primaire en ajoutant [PK] exemple identifiant_id [PK]

**3. Transformation des associations de type 1:N**

- Comment transforme-t-on une association de type 1:N dans le MLD?

=> On le transforme en créant une clé étrangère [FK] dans la table du côté N

- Prenez l'exemple de l'association entre LIVRE et CATEGORIE (en supposant qu'un livre appartient à une seule catégorie). Comment cette association se traduit-elle dans le MLD?

=> Il faut rajouter dans la table LIVRE : Categorie_id[FK] pour lier un livre à la clé primaire Catégorie_id[PK] de la table CATEGORIES

- Qu'est-ce qu'une clé étrangère et où est-elle placée dans une relation 1:N?

=> Une clé étrangère permet de lier un attribut d'un table à une autre.
Dans une relation 1:N elle est placé du coté N

**4. Transformation des associations de type N:N**

- Comment transforme-t-on une association de type N:N dans le MLD?

=> Il faut faire une table de jonction avec deux clés étrangères

- Prenez l'exemple de l'association entre LIVRE et AUTEUR (un livre peut avoir plusieurs auteurs, et un auteur peut écrire plusieurs livres). Comment cette association se traduit-elle dans le MLD?

=> C'est une association de type N:N, il faut donc créer une nouvelle TABLE : "Auteur_Livre" et chaque attibut possède 2 clés :
id_auteur[PK,FK] && id_livre[PK,FK]

- Quelles sont les clés primaires et étrangères dans une table de jonction?

=> La clé primaire fait référence a un identifiant unique, la clé étrangère fait référence a une clé primaire dans une autre table afin de récupérer les données

**5. Table EXEMPLAIRE et EMPRUNT en MLD**

- Transformez les entités EXEMPLAIRE et EMPRUNT de votre MCD en tables du MLD.
- Où placeriez-vous les clés étrangères pour représenter les associations avec les autres tables?

=> Dans emprunt je met une clé : - [FK] pour "id_Membre[FK] afin de lier les emprunts aux MEMBRES - [FK] pour "id_Livre[FK] afin de lier les emprunts aux LIVRES

=> Dans exemplaires je met une clé : - [FK] pour "id_Livre[FK] afin de lier les exemplaires aux LIVRES

- Comment représenteriez-vous le fait qu'un exemplaire ne peut être emprunté que par un seul membre à la fois?

**6. Normalisation des données**

- Qu'est-ce que la normalisation et pourquoi est-elle importante?

=> La normalisation conciste a éviter la redondance, elle est important car elle permet de séparer les informations en groupe pour
avoir une meilleur lisibilité des tables

- Expliquez brièvement ce qu'est la première forme normale (1NF).

=> La première forme normale 1NF conciste à décomposer en plusieurs tables dans lesquels chacune représente une catégorie spécifique
et contient qu'une seule valeur

- Donnez un exemple de table non normalisée dans notre contexte de bibliothèque et montrez comment la mettre en première forme normale.

=> Une table non normalisé serai par exemple :

                    LIVRE
      -----------------------------------
      Id_livre        ||        1
      -----------------------------------
      nom_Auteur      || Jean, Martin
      -----------------------------------
      Categorie       || S-F, Horreur
      -----------------------------------

=> Pour la normaliser, il faudrai décomposer les tables :

Méthode 1NF
Pour la table livre : Pour la table Auteur : Pour la table Categorie :

      Livre_1NF_Livre            Livre_1NF_Auteur              Livre_1NF_Categorie
      ----------------          ------------------            -----------------------
        id_Livre [PK]              id_Livre [FK]                   id_Livre [FK]
      ----------------          ------------------            -----------------------
        n om_Livre                    Auteur                         Categorie
      ----------------          ------------------            -----------------------
           ISBN
      ----------------

**7. Exercice pratique**

- En utilisant draw.io, transformez votre MCD du module précédent en un MLD complet.
- Indiquez clairement les clés primaires (PK) et étrangères (FK) dans chaque table.
- Pour les associations N:N, créez les tables de jonction nécessaires.
- Assurez-vous que toutes vos tables respectent au moins la première forme normale.
