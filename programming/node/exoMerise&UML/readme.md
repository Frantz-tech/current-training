# Exercices - Modélisation

https://dbdiagram.io/d/Chris-Brown-Online-Store-67dbf9c075d75cc844d191c5

# Exercices

Voici une série d'exercices progressifs pour vous familiariser avec la modélisation de bases de données à l'aide de dbdiagram.io.

<aside>
💡

**Avant de commencer** : N'hésitez pas à débuter par un travail préparatoire méthodique. Commencez par lister toutes les données et entités nécessaires, puis élaborez un Modèle Conceptuel de Données (MCD) et/ou un Modèle Logique de Données (MLD) pour structurer votre réflexion. Cette étape préliminaire vous permettra d'avoir une vision claire des entités, attributs et relations avant de passer à l'implémentation en DBML, ce qui facilitera grandement la conception de votre schéma final.

</aside>

## Conseils généraux pour tous les exercices

1. Commencez par identifier les entités principales
2. Définissez les attributs de chaque entité
3. Déterminez les relations entre les entités via un MCD et/ou MLD
4. Ajoutez les contraintes (clés primaires, unicité, non null, etc.)
5. Testez votre modèle en vérifiant s'il répond aux besoins du système
6. Optimisez si nécessaire (indices, clés composites, etc.)

N'hésitez pas à ajouter des commentaires dans votre code DBML pour expliquer vos choix !

## Exercice 1 : La liste de contacts

**Objectif :** Créer une simple table pour stocker des contacts.

**Consigne :** Créez une table nommée `contacts` qui contient les informations suivantes :

- Un identifiant unique
- Un prénom
- Un nom
- Une adresse email
- Un numéro de téléphone

## Exercice 2 : La bibliothèque simple

**Objectif :** Créer deux tables liées par une relation simple.(plusieurs vers un" (N:1))

**Consigne :** Créez un modèle pour une petite bibliothèque avec :

- Une table `livres` (id, titre, auteur, annee_publication)
- Une table `categories` (id, nom)
- Chaque livre appartient à une seule catégorie

## Exercice 3 : Le blog

**Objectif :** Modéliser un système avec plusieurs relations.

**Consigne :** Créez un modèle pour un blog avec :

- Une table `articles` (id, titre, contenu, date_publication)
- Une table `utilisateurs` (id, nom, email, mot_de_passe)
- Une table `commentaires` (id, contenu, date)
- Un article est écrit par un utilisateur
- Un commentaire est écrit par un utilisateur sur un article

## Exercice 4 : La boutique en ligne

**Objectif :** Modéliser un système commercial avec relation many-to-many.

**Préparation** : Commencez par lister toutes les données nécessaires entités à vos entités, aidez-vous d’un MCD et/ou MLD si nécessaire.

**Consigne :** Créez un modèle pour une boutique en ligne avec :

- Une table `produits`
- Une table `clients`
- Une table `commandes`
- Une table `commandes_produits` (car un produit peut être dans plusieurs commandes et une commande peut contenir plusieurs produits)
