# Module 4 : Pratique avec dbdiagram.io et DBML

💡 **Conseil pratique** : Pour ce module, utilisez l'outil [dbdiagram.io](http://dbdiagram.io) qui vous permet de créer des schémas de base de données en utilisant la syntaxe DBML (Database Markup Language). Cet outil vous aidera à visualiser rapidement la structure de votre base de données et à générer du code SQL.

### Questions - Implémentation technique du modèle

**1. Introduction à DBML**

- Qu'est-ce que DBML (Database Markup Language) et comment se compare-t-il aux outils de modélisation visuelle?

=> DMBL est un outil qui permet de créer des diagrammes de base de donnés facilement avec un language simple.

=> Il se compare aux autres outils de modélisation visuelle car : - Il permet de definir les tables et leurs relations - On a accès directement à un schéma visible de la base de donnée

- Quels sont les avantages d'utiliser un langage comme DBML pour décrire une base de données?

=> Les avantages : - L'interface est intuitive et il n'y a pas besoin d'installer de logiciel - Syntaxe simple - Resultats immédiats

- Accédez à dbdiagram.io et familiarisez-vous avec l'interface. Quelles fonctionnalités vous semblent les plus utiles?

=> On peut importer des données de plusieurs bases de données différentes,
l'export en PDF || PNG est très utile également

**2. Définition des tables en DBML**

- Comment définit-on une table en DBML?

=> Pour définir une table en DBML, il faut créer un objet que l'on nommera et dedans on listera tout les attributs qui lui seront lié, et
pour chaque attribut on assignera un "TYPE"

- Pour la table LIVRE, quels types de données seraient les plus appropriés pour: titre, ISBN, nombre de pages et année de publication?

=> Types pour la table " LIVRE " :

      - Livre : TEXT
       -------------------------------
      - ISBN : CHAR(20)
      --------------------------------
      - NB_Page : SMALLINT(2000)
      --------------------------------
      - Année_Publication : DATETIME
      --------------------------------

- Écrivez le code DBML pour définir la table LIVRE avec ces attributs et une clé primaire.

=> Voici le code :

```Table livre {
livre_id interger [primary key]
titre varchar[not null]
ISBN varchar [unique]
nb_pages smallint(2000)
année_publication timestamp [default: `now()`]
}
```

**3. Types de données et contraintes**

- Quels sont les principaux types de données disponibles en DBML/SQL?

=> Les principaux type des données disponibles en DMBL/SQL sont :

- integer / varchar / text / boolean / date / timestamp / decimal

- Pour chacun des attributs suivants, quel type de données choisiriez-vous et pourquoi?

  - Nom d'un membre  
     => CHAR : les noms dépassent rarement plus de 20 charactères mais VARCHAR pourrait aussi être utilisé

  - Date d'emprunt
    => Timestamp [default: `now()`] pour avoir la date précise à laquelle le livre à été emprunté

  - Adresse email
    => VARCHAR : les adresses email font entre X et X charactères en général

  - État d'un exemplaire (neuf, bon, abîmé)
    => ENUM : il n'y a que 3 choix possible pour l'état d'un livre

- Comment ajouter une contrainte pour s'assurer qu'un attribut est toujours positif ou non-vide?

=> Les contraintes sont ajoutées entre crochets **[]**, et il faut ajouter "not null", pour que le champ soit toujours rempli

**4. Définition des relations en DBML**

- Comment définit-on une relation entre deux tables en DBML?

=> Pour faire des relations entre deux table en DBML, il faut utiliser la syntaxe **Ref**

- Écrivez le code DBML pour établir:
  - Une relation 1:N entre CATEGORIE et LIVRE

=> Ref : LIVRE.categorie_id > CATEGORIE.id

- Une relation N:N entre AUTEUR et LIVRE (avec table de jonction)

=> Ref : AUTEUR_LIVRE.livre_id > LIVRE.livre_id
=> Ref : AUTEUR_LIVRE.auteur_id > AUTEUR.livre_id

- Que signifie la notation `>` dans une relation DBML (ex: `ref: LIVRE.categorie_id > CATEGORIE.id`)?

=> Cette notation signifie " appartient à "

**5. Table EXEMPLAIRE et EMPRUNT en DBML**

- En vous basant sur votre MLD, écrivez le code DBML pour définir:

  - La table EXEMPLAIRE avec ses attributs et relations

  =>

````Table EXEMPLAIRES {
  exemplaire_id integer [primary key]
  etat enum
  disponibilite boolean
  date_dachat timestamp [default:`now()`]
  }```

  - La table EMPRUNT avec ses attributs et relations

  =>

  ```Table EMPRUNT {
  emprunt_id integer [pk]
  exemplaire_id integer [ref: > EXEMPLAIRES.exemplaire_id]
  date_emprunt timestamp [default: `now()`]
  date_retour_prévu timestamp
  date_retour_effective timestamp
  }```

- Comment ajouteriez-vous une contrainte pour vérifier qu'un exemplaire n'est pas emprunté s'il est marqué comme "indisponible"?

=> disponibilité boolean [not null, default: true]

- Quelles contraintes ajouteriez-vous pour gérer les livres rares qui ne peuvent être consultés que sur place? Comment modéliseriez-vous cette restriction en DBML?

=> Pour gerer les livres rares je rajoute une 2 conditions :

```Table LIVRE {
livre_id interger [primary key]
titre text
ISBN char(20)
nb_pages smallint(5000)
année_publication timestamp [default: `now()`]
uniquement_sur_place boolean ( oui ou non )
disponible boolean (oui ou non )
}```

**6. Fonctionnalités avancées de DBML**

- Qu'est-ce qu'un index de base de données et pourquoi est-il utile?
- Comment définiriez-vous un index sur la table LIVRE pour accélérer les recherches par titre?
- Comment pourriez-vous générer automatiquement une date d'inscription pour un nouveau membre?

**7. Projet final**

- En utilisant dbdiagram.io, créez un schéma DBML complet pour notre bibliothèque en incluant toutes les tables et relations que nous avons définies.
- Ajoutez au moins trois contraintes qui amélioreraient l'intégrité des données.
- Définissez des index sur les champs qui seraient fréquemment utilisés pour des recherches.
- Exportez votre schéma en format SQL et observez le code généré.
````
