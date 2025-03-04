# Module 3 : Le Modèle Logique de Données (MLD)

💡 **Conseil pratique** : Pour ce module, vous pouvez continuer à utiliser [draw.io](https://app.diagrams.net/) en représentant les tables par des rectangles avec les clés primaires soulignées et les clés étrangères précédées de "FK".

### Questions - Transformation du MCD en MLD

**1. Introduction au MLD**

- Qu'est-ce qu'un Modèle Logique de Données (MLD) et en quoi diffère-t-il du MCD?
- Pourquoi est-il nécessaire de passer du MCD au MLD avant de créer la base de données?

**2. Transformations des entités**

- Comment une entité du MCD est-elle transformée dans le MLD?
- Les attributs d'une entité subissent-ils des modifications lors de cette transformation?
- Comment l'identifiant devient-il une clé primaire dans le MLD?

**3. Transformation des associations de type 1:N**

- Comment transforme-t-on une association de type 1:N dans le MLD?
- Prenez l'exemple de l'association entre LIVRE et CATEGORIE (en supposant qu'un livre appartient à une seule catégorie). Comment cette association se traduit-elle dans le MLD?
- Qu'est-ce qu'une clé étrangère et où est-elle placée dans une relation 1:N?

**4. Transformation des associations de type N:N**

- Comment transforme-t-on une association de type N:N dans le MLD?
- Prenez l'exemple de l'association entre LIVRE et AUTEUR (un livre peut avoir plusieurs auteurs, et un auteur peut écrire plusieurs livres). Comment cette association se traduit-elle dans le MLD?
- Quelles sont les clés primaires et étrangères dans une table de jonction?

**5. Table EXEMPLAIRE et EMPRUNT en MLD**

- Transformez les entités EXEMPLAIRE et EMPRUNT de votre MCD en tables du MLD.
- Où placeriez-vous les clés étrangères pour représenter les associations avec les autres tables?
- Comment représenteriez-vous le fait qu'un exemplaire ne peut être emprunté que par un seul membre à la fois?

**6. Normalisation des données**

- Qu'est-ce que la normalisation et pourquoi est-elle importante?
- Expliquez brièvement ce qu'est la première forme normale (1NF).
- Donnez un exemple de table non normalisée dans notre contexte de bibliothèque et montrez comment la mettre en première forme normale.

**7. Exercice pratique**

- En utilisant draw.io, transformez votre MCD du module précédent en un MLD complet.
- Indiquez clairement les clés primaires (PK) et étrangères (FK) dans chaque table.
- Pour les associations N:N, créez les tables de jonction nécessaires.
- Assurez-vous que toutes vos tables respectent au moins la première forme normale.
