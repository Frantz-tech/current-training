CREATE TABLE IF NOT EXISTS `LIVRE` (
  `livre_id` INTEGER PRIMARY KEY,
  `titre` TEXT,
  `ISBN` CHAR(20),
  `nb_pages` SMALLINT,
  `annee_publication` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `uniquement_sur_place` BOOLEAN
);

CREATE TABLE IF NOT EXISTS `AUTEUR` (
  `auteur_id` INTEGER PRIMARY KEY,
  `nom_auteur` TEXT NOT NULL,
  `prenom_auteur` TEXT NOT NULL,
  `date_naissance` TEXT NOT NULL,
  `id_pays` INTEGER,
  FOREIGN KEY (`id_pays`) REFERENCES `PAYS` (`id_pays`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `EXEMPLAIRES` (
  `exemplaire_id` INTEGER PRIMARY KEY,
  `livre_id` INTEGER,
  `etat` TEXT,
  `disponibilite` BOOLEAN NOT NULL DEFAULT 1,
  `date_dachat` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`livre_id`) REFERENCES `LIVRE` (`livre_id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `EMPRUNT` (
  `emprunt_id` INTEGER PRIMARY KEY,
  `membre_id` INTEGER,
  `exemplaire_id` INTEGER,
  `date_emprunt` DATE DEFAULT (CURRENT_DATE),
  `date_retour_prévu` DATE,
  `date_retour_effective` DATE,
  FOREIGN KEY (`exemplaire_id`) REFERENCES `EXEMPLAIRES` (`exemplaire_id`) ON DELETE CASCADE, 
  FOREIGN KEY (`membre_id`) REFERENCES `MEMBRE` (`membre_id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `PAYS` (
  `id_pays` INTEGER PRIMARY KEY,
  `nom_pays` TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS `MEMBRE` (
  `membre_id` INTEGER PRIMARY KEY,
  `nom_membre` VARCHAR(255) NOT NULL,
  `prenom_membre` VARCHAR(255) NOT NULL,
  `adresse_membre` TEXT NOT NULL,
  `email_membre` VARCHAR(255) UNIQUE NOT NULL,
  `date_inscription` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `CATEGORIES` (
  `categories_id` INTEGER PRIMARY KEY,
  `nom_genre` TEXT NOT NULL,
  `description` TEXT
);

CREATE TABLE IF NOT EXISTS `LIVRE_CATEGORIES` (
  `livre_id` INTEGER,
  `categories_id` INTEGER,
  PRIMARY KEY (`livre_id`, `categories_id`) ,
  FOREIGN KEY (`livre_id`) REFERENCES `LIVRE` (`livre_id`) ON DELETE CASCADE,
  FOREIGN KEY (`categories_id`) REFERENCES `CATEGORIES` (`categories_id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `AUTEUR_LIVRE` (
  `auteur_id` INTEGER,
  `livre_id` INTEGER,
  PRIMARY KEY (`auteur_id`, `livre_id`),
  FOREIGN KEY (`auteur_id`) REFERENCES `AUTEUR` (`auteur_id`) ON DELETE CASCADE,
  FOREIGN KEY (`livre_id`) REFERENCES `LIVRE` (`livre_id`)ON DELETE CASCADE
);

CREATE VIEW IF NOT EXISTS vue_livres_auteurs_categories AS
SELECT LIVRE.titre, AUTEUR.nom_auteur, CATEGORIES.nom_genre
FROM LIVRE
JOIN AUTEUR_LIVRE ON LIVRE.livre_id = AUTEUR_LIVRE.livre_id
JOIN AUTEUR ON AUTEUR_LIVRE.auteur_id = AUTEUR.auteur_id
JOIN LIVRE_CATEGORIES ON LIVRE.livre_id = LIVRE_CATEGORIES.livre_id
JOIN CATEGORIES ON LIVRE_CATEGORIES.categories_id = CATEGORIES.categories_id;


CREATE VIEW IF NOT EXISTS vue_emprunt_membre_exemplaire AS 
SELECT 
    EMPRUNT.emprunt_id, 
    MEMBRE.nom_membre, 
    MEMBRE.prenom_membre, 
    EXEMPLAIRES.livre_id, 
    LIVRE.titre
FROM EMPRUNT
JOIN MEMBRE ON EMPRUNT.membre_id = MEMBRE.membre_id
JOIN EXEMPLAIRES ON EMPRUNT.exemplaire_id = EXEMPLAIRES.exemplaire_id
JOIN LIVRE ON EXEMPLAIRES.livre_id = LIVRE.livre_id
GROUP BY EXEMPLAIRES.exemplaire_id
ORDER BY EMPRUNT.membre_id ASC;


CREATE TRIGGER if NOT EXISTS update_date_retour_apres_emprunt
AFTER INSERT ON EMPRUNT
BEGIN 
UPDATE EMPRUNT 
SET date_retour_prévu = DATE(date_emprunt, '+15 days')
WHERE emprunt_id = NEW.emprunt_id;
END;


CREATE INDEX IF NOT EXISTS `LIVRE_index_0` ON `LIVRE` (`titre`);

CREATE INDEX IF NOT EXISTS `AUTEUR_index_1` ON `AUTEUR` (`nom_auteur`);

CREATE INDEX IF NOT EXISTS `MEMBRE_index_2` ON `MEMBRE` (`nom_membre`);

-- Contrainte de clé étrangère déjà ajoutée dans les tables appropriées
