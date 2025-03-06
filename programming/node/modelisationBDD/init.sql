CREATE DATABASE IF NOT EXISTS bibliotheque

USE bibliotheque


CREATE TABLE `LIVRE` (
  `livre_id` integer PRIMARY KEY,
  `titre` text,
  `ISBN` char(20),
  `nb_pages` smallint(2000),
  `année_publication` timestamp DEFAULT (now()),
  `uniquement_sur_place` boolean,
  `disponible` boolean
);

CREATE TABLE `AUTEUR` (
  `auteur_id` int PRIMARY KEY,
  `nom_auteur` text NOT NULL,
  `prénom_auteur` text NOT NULL,
  `date_naissance` text NOT NULL
);

CREATE TABLE `EXEMPLAIRES` (
  `exemplaire_id` integer PRIMARY KEY,
  `etat` enum,
  `disponibilite` boolean NOT NULL DEFAULT true,
  `date_dachat` timestamp DEFAULT (now())
);

CREATE TABLE `EMPRUNT` (
  `emprunt_id` integer PRIMARY KEY,
  `exemplaire_id` integer,
  `date_emprunt` timestamp DEFAULT (now()),
  `date_retour_prévu` timestamp,
  `date_retour_effective` timestamp
);

CREATE TABLE `PAYS` (
  `id_pays` text,
  `nom_pays` text
);

CREATE TABLE `MEMBRE` (
  `membre_id` integer PRIMARY KEY,
  `nom_membre` varchar(255) NOT NULL,
  `prenom_membre` varchar(255) NOT NULL,
  `adresse_membre` text NOT NULL,
  `email_membre` varchar(255) UNIQUE NOT NULL,
  `date_inscription` timestamp DEFAULT (now())
);

CREATE TABLE `CATEGORIES` (
  `categories_id` int PRIMARY KEY,
  `nom_genre` text NOT NULL,
  `description` text
);

CREATE TABLE `LIVRE_CATEGORIES` (
  `livre_id` int,
  `categories_id` int,
  PRIMARY KEY (`livre_id`, `categories_id`)
);

CREATE TABLE `LIVRE_EXEMPLAIRES` (
  `exemplaire_id` integer,
  `livre_id` integer,
  PRIMARY KEY (`exemplaire_id`, `livre_id`)
);

CREATE TABLE `MEMBRE_EMPRUNT` (
  `membre_id` int,
  `emprunt_id` int,
  PRIMARY KEY (`membre_id`, `emprunt_id`)
);

CREATE TABLE `AUTEUR_LIVRE` (
  `auteur_id` int,
  `livre_id` int,
  PRIMARY KEY (`auteur_id`, `livre_id`)
);

CREATE INDEX `LIVRE_index_0` ON `LIVRE` (`titre`);

CREATE INDEX `AUTEUR_index_1` ON `AUTEUR` (`nom_auteur`);

CREATE INDEX `MEMBRE_index_2` ON `MEMBRE` (`nom_membre`);

ALTER TABLE `EMPRUNT` ADD FOREIGN KEY (`exemplaire_id`) REFERENCES `EXEMPLAIRES` (`exemplaire_id`);

ALTER TABLE `LIVRE_CATEGORIES` ADD FOREIGN KEY (`livre_id`) REFERENCES `LIVRE` (`livre_id`);

ALTER TABLE `LIVRE_CATEGORIES` ADD FOREIGN KEY (`categories_id`) REFERENCES `CATEGORIES` (`categories_id`);

ALTER TABLE `LIVRE_EXEMPLAIRES` ADD FOREIGN KEY (`exemplaire_id`) REFERENCES `EXEMPLAIRES` (`exemplaire_id`);

ALTER TABLE `LIVRE_EXEMPLAIRES` ADD FOREIGN KEY (`livre_id`) REFERENCES `LIVRE` (`livre_id`);

ALTER TABLE `MEMBRE_EMPRUNT` ADD FOREIGN KEY (`membre_id`) REFERENCES `MEMBRE` (`membre_id`);

ALTER TABLE `MEMBRE_EMPRUNT` ADD FOREIGN KEY (`emprunt_id`) REFERENCES `EMPRUNT` (`emprunt_id`);

ALTER TABLE `AUTEUR_LIVRE` ADD FOREIGN KEY (`auteur_id`) REFERENCES `AUTEUR` (`auteur_id`);

ALTER TABLE `AUTEUR_LIVRE` ADD FOREIGN KEY (`livre_id`) REFERENCES `LIVRE` (`livre_id`);

ALTER TABLE `PAYS` ADD FOREIGN KEY (`id_pays`) REFERENCES `AUTEUR` (`auteur_id`);
