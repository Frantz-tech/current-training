### Questions - Modèle Conceptuel de Données

**1. Introduction au MCD**

- Qu'est-ce qu'un Modèle Conceptuel de Données (MCD) et pourquoi est-il utile avant de créer une base de données?

=> Un MCD est une représentation graphique des données qui permet de créer la structure des informations 
sans parler d'implémentation.

- Quelle est la différence entre une simple liste de tables et un MCD?

=> Une liste de table est une simple liste dans laquelle va afficher les éléments principaux, cependant un MCD 
est un shéma qui représente le fonctionnement logique de la BDD, il va permettre de montrer les relations, les cardinalités.
C'est un outil qui permet de voir clairement la structure de la base de donnée

**2. Entités et attributs**

- Qu'est-ce qu'une entité dans un MCD? Comment la représente-t-on visuellement?

=> Une entité dans un MCD ce sont les objet réels que nous voulons modéliser, chaque object est nommé avec un nom singulier
et ils correspondront par la suite a une table dans la future BDD 

- Quelles sont les entités principales que nous avons identifiées pour notre bibliothèque dans le Module 1?

=> Dans le module 1 nous avons identifié 5 entités : Livre | Auteur | Catégories | Membre | Emprunt

- Comment indique-t-on qu'un attribut est un identifiant (clé primaire) dans un MCD?

=> On lui rajoute _id par exemple livre_id (PK) 

**3. Associations entre entités**

- Qu'est-ce qu'une association dans un MCD? Comment la représente-t-on visuellement?

=> Une association dans un MCD est un lien logique entre plusieurs entités, ces associations sont nommés avec des verbes

- Proposez une association entre l'entité LIVRE et l'entité AUTEUR. Comment la nommeriez-vous?

=> L'association entre livre et auteur pourrait se nommer "ECRIS", (l'auteur écris le livre)

- Peut-on ajouter des attributs à une association? Si oui, donnez un exemple dans le contexte de la bibliothèque.

=> Oui il est possible d'ajouter un attribut a une association : par exemple, un livre peut être écris par plusieurs auteurs , 
on peut donc mettre en attribut la date de leurs collaboration car elle n'appartient pas vraiment à livre ni à auteur

**4. Cardinalités**

- Qu'est-ce qu'une cardinalité dans un MCD?

=> une cardinalité dans un MCD c'est : le nombre minimum et maximum d'occurence d'une entité par rapport à une autre

- Expliquez la signification des cardinalités suivantes avec un exemple concret pour chacune dans le contexte de la bibliothèque:
    - (0,1) => Zéro ou une occurence exemple => Entre livre et auteur, un auteur peut écrire 0 ou un livre
    - (1,1) => Exactement une occurence exemple => Entre emprunt et utilisateur, un utilisateur emprunte un seul livre
    - (0,N) => Zéro a plusieurs occurences exemple => Entre emprunt et utilisateur, un utilisateur peut emprenter aucun ou plusieurs livres
    - (1,N) => Une a plusieurs occurences exemple => Entre livre et genre, un livre peut avoir un ou plusieurs genres

**5. La nouvelle entité EXEMPLAIRE**

- Pourquoi serait-il utile de créer une entité EXEMPLAIRE distincte de l'entité LIVRE?

=> C'est utile pour différencier par exemple si le livre est abimé ou non, ou par exemple si les livres sont numérotés

- Quels attributs cette entité EXEMPLAIRE pourrait-elle avoir?

=> Elle pourrait avoir comme attributs "Etat du livre" || "Numéro du Livre" || "Edition spécial" 

- Quelle serait la relation entre LIVRE et EXEMPLAIRE? Précisez les cardinalités.

=> La relation serait qu'un livre pourrait avoir plusieur exemplaires : la cardinalité serait (1,N) ou (0,N)

**6. L'entité EMPRUNT**

- Maintenant que nous avons nos entités de base, nous devons gérer les emprunts de livres.
- Quels attributs seraient nécessaires pour une entité EMPRUNT?

=> Pour l'entité Emprunt, il faudrait les attributs : Date_Emprunt || Date_Retour_Effective || Date_Retour_Prévue

- Quelles associations cette entité aurait-elle avec les autres entités? Précisez les cardinalités.

=> Elle sera associé avec l'entité utilisateurs, ses cardinalitées seraient : (1,1) l'utilisateur emprute qu'un seul livre || (0,N)
l'utilisateur emprunte zéro ou plusieurs livres

**7. Exercice pratique**

- En utilisant draw.io, créez un MCD complet pour notre bibliothèque incluant au minimum les entités LIVRE, AUTEUR, CATEGORIE, MEMBRE, EXEMPLAIRE et EMPRUNT.
- Représentez toutes les associations entre ces entités avec leurs cardinalités.
- Pour chaque entité, incluez au moins trois attributs dont un identifiant.