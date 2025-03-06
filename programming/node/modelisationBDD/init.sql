CREATE TABLE IF NOT EXISTS LIVRE (
  livre_id INTEGER PRIMARY KEY,
  titre TEXT,
  ISBN CHAR(20),
  nb_pages INTEGER,
  année_publication TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  uniquement_sur_place BOOLEAN,
  disponible BOOLEAN
);

CREATE TABLE IF NOT EXISTS AUTEUR (
  auteur_id INTEGER PRIMARY KEY,
  nom_auteur TEXT NOT NULL,
  prénom_auteur TEXT NOT NULL,
  date_naissance TEXT NOT NULL,
  id_pays TEXT,
  FOREIGN KEY (id_pays) REFERENCES PAYS(id_pays) 
);

CREATE TABLE IF NOT EXISTS EXEMPLAIRES (
  exemplaire_id INTEGER PRIMARY KEY,
  etat TEXT,
  disponibilite BOOLEAN NOT NULL DEFAULT true,
  date_dachat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS EMPRUNT (
  emprunt_id INTEGER PRIMARY KEY,
  exemplaire_id INTEGER,
  date_emprunt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  date_retour_prévu TIMESTAMP,
  date_retour_effective TIMESTAMP,
  FOREIGN KEY (exemplaire_id) REFERENCES EXEMPLAIRES(exemplaire_id)
);

CREATE TABLE IF NOT EXISTS PAYS (
  id_pays INTEGER PRIMARY KEY,
  nom_pays TEXT
);

CREATE TABLE IF NOT EXISTS MEMBRE (
  membre_id INTEGER PRIMARY KEY,
  nom_membre VARCHAR(255) NOT NULL,
  prenom_membre VARCHAR(255) NOT NULL,
  adresse_membre TEXT NOT NULL,
  email_membre VARCHAR(255) UNIQUE NOT NULL,
  date_inscription TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS CATEGORIES (
  categories_id INTEGER PRIMARY KEY,
  nom_genre TEXT NOT NULL,
  description TEXT
);

CREATE TABLE IF NOT EXISTS LIVRE_CATEGORIES (
  livre_id INTEGER,
  categories_id INTEGER,
  PRIMARY KEY (livre_id, categories_id),
  FOREIGN KEY (livre_id) REFERENCES LIVRE(livre_id),
  FOREIGN KEY (categories_id) REFERENCES CATEGORIES(categories_id)
);

CREATE TABLE IF NOT EXISTS LIVRE_EXEMPLAIRES (
  exemplaire_id INTEGER,
  livre_id INTEGER,
  PRIMARY KEY (exemplaire_id, livre_id),
  FOREIGN KEY (exemplaire_id) REFERENCES EXEMPLAIRES(exemplaire_id),
  FOREIGN KEY (livre_id) REFERENCES LIVRE(livre_id)
);

CREATE TABLE IF NOT EXISTS MEMBRE_EMPRUNT (
  membre_id INTEGER,
  emprunt_id INTEGER,
  PRIMARY KEY (membre_id, emprunt_id),
  FOREIGN KEY (membre_id) REFERENCES MEMBRE(membre_id),
  FOREIGN KEY (emprunt_id) REFERENCES EMPRUNT(emprunt_id)
);

CREATE TABLE IF NOT EXISTS AUTEUR_LIVRE (
  auteur_id INTEGER,
  livre_id INTEGER,
  PRIMARY KEY (auteur_id, livre_id),
  FOREIGN KEY (auteur_id) REFERENCES AUTEUR(auteur_id),
  FOREIGN KEY (livre_id) REFERENCES LIVRE(livre_id)
);

CREATE INDEX IF NOT EXISTS LIVRE_index_0 ON LIVRE (titre);
CREATE INDEX IF NOT EXISTS AUTEUR_index_1 ON AUTEUR (nom_auteur);
CREATE INDEX IF NOT EXISTS MEMBRE_index_2 ON MEMBRE (nom_membre);
