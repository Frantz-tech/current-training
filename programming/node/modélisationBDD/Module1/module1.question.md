### Questions - Introduction aux bases de données

**1. Découverte du concept**

- Qu'est-ce qu'une base de données et pourquoi serait-elle utile pour gérer une bibliothèque par rapport à une liste sur papier
  ou un fichier Excel?

=> Une base de donnée c'est un ensemble d'informations qui sont structurées et stockées de manière stricte.

- Donnez trois avantages concrets qu'apporterait une base de données à une bibliothèque.

=> Les données sont structuré de manière logique,
=> Les données sont sécurisés,
=> Plusieurs utilisateur peuvent accéder à la bdd

**2. La table LIVRES**

- Imaginez que vous devez créer une liste informatisée de tous les livres de la bibliothèque.
- Proposez au moins 5 informations importantes à stocker pour chaque livre (par exemple: titre, nombre de pages, etc.)

=> Pour le livre : Titre du Livre | Nombre de pages | Nom de l'auteur | Année de publication | Editeur

- Comment feriez-vous pour identifier de façon unique chaque livre? Pourquoi est-ce important?

=> J'identifierai chaque livre avec un Id, C'est important pour pouvoir relier chaque livre à une autre information qui est stocké
dans la base de donnée, par exemple le livre avec l'id = 1, pourra être relié à l'auteur qui à un id = 5

**3. La table AUTEURS**

- Créez une liste d'informations à conserver pour chaque auteur (au moins 4 attributs).

=> Pour la table auteur : Nom de l'auteur | Nombre de livre publié | Date de naissance | Nationnalit

- Pourquoi serait-il utile de créer une table AUTEURS séparée plutôt que de simplement ajouter le nom de l'auteur dans la table LIVRES?

=> Car un auteur peut avoir écrit plusieurs livre donc cela évite d'avoir à se répéter pour chaque livre qu'il à écrit,
le but est d'optimiser les informations

**4. La table CATEGORIES**

- Une bibliothèque organise généralement ses livres par catégories ou genres.
- Proposez une structure simple pour une table CATEGORIES.

=> CATEGORIES : Categorie_id

- Que pourrait-on stocker dans cette table à part le nom de la catégorie?

=> CATEGORIES : Categorie_id | Nom_genre | Description

**5. La table MEMBRES**

- Quelles informations personnelles seraient nécessaires pour inscrire un nouveau membre à la bibliothèque?

=> Pour inscrire un nouveau membre, il faut : Nom | Prénom | Adresse | Email_inscription

- Parmi ces informations, laquelle pourrait servir d'identifiant unique? Pourquoi?

=> L'adresse email, car celle ci ne peut pas être utilisé par 2 personnes

- Pourquoi ne serait-il pas idéal d'utiliser le nom et prénom comme identifiant unique?

=> Ce ne serai pas idéal car plusieurs personnes peuvent avoir le même nom ou le même prénom, ou encore le même nom et prénom (plus rare)

**6. Exercice pratique**

- En utilisant draw.io ou un outil similaire, dessinez quatre rectangles représentant les tables LIVRES, AUTEURS, CATEGORIES et MEMBRES.

=> ok

- Dans chaque rectangle, listez les attributs que vous avez identifiés.

=> ok

- Soulignez ou marquez d'une façon spéciale l'attribut qui servirait d'identifiant unique pour chaque table.

=> ok

**7. Bonus : Réflexion sur l'organisation des données**

- Si vous deviez noter dans quelle catégorie se trouve chaque livre, où placeriez-vous cette information: dans la table LIVRES ou dans
  la table CATEGORIES? Expliquez votre raisonnement.

=> Dans la table livre, je rajouterai un attribut catégorie, que je lierai à la clé catégories_id

- Un livre peut-il appartenir à plusieurs catégories? Comment pourriez-vous gérer cette situation?

=> Oui, un livre peut avoir plusieurs catégories, il faudrait créer une table pivot ( Livre_catégories )
qui récupère le (livre_id & catégorie_id) pour ajouter autant de catégories que le livre possède
