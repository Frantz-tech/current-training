// Selection d'un livre par auteur spécifique

SELECT LIVRE.livre_id, AUTEUR.nom_auteur
FROM LIVRE
JOIN AUTEUR_LIVRE ON LIVRE.livre_id = AUTEUR_LIVRE.livre_id
JOIN AUTEUR_LIVRE ON AUTEUR.auteur_nom = AUTEUR_LIVRE.auteur_id
WHERE livre_id = ?

INSERT INTO AUTEUR (nom_auteur,prenom_auteur,date_naissance,id_pays)
VALUES
('Sens', 'George', '1965-05-15',1),
('Spilberg', 'Steven', '1959-08-02',2),
('Roadman', 'Dani', '1961-12-30',3),
('Polak', 'Zoelski', '1948-05-08',1);

INSERT INTO AUTEUR_LIVRE (auteur_id, livre_id) VALUES
(1, 3),
(2, 5),
(3, 7),
(4, 2),
(1, 4),
(2, 6),
(3, 1),
(4, 5),
(1, 2),
(2, 3);

INSERT INTO CATEGORIES (nom_genre, description) VALUES
('Policier', 'Enquêtes criminelles et mystères.'),
('Romance', 'Histoires d\'amour et émotions.'),
('Science-Fiction', 'Voyages dans le futur.'),
('Jeunesse', 'Aventures pour jeunes lecteurs.'),
('Histoire', 'Récits d\'événements passés.');

INSERT INTO EMPRUNT (membre_id, exemplaire_id, date_emprunt) VALUES
(1, 3, '2025-03-07'),
(2, 1, '2024-05-22'),
(3, 5, '2023-11-18'),
(4, 2, '2022-08-10'),
(5, 4, '2023-12-01');

INSERT INTO EXEMPLAIRES (livre_id, etat, disponibilite, date_dachat) VALUES
(1, 'Neuf', 1, '2024-01-15'),
(1, 'Usagé', 0, '2022-05-10'),
(2, 'Neuf', 1, '2023-06-05'),
(2, 'Correct', 0, '2021-07-20'),
(3, 'Abîmé', 1, '2020-03-15'),
(3, 'Correct', 0, '2019-12-05'),
(4, 'Usagé', 1, '2022-02-18'),
(4, 'Neuf', 0, '2021-11-11'),
(5, 'Correct', 1, '2023-04-30'),
(5, 'Usagé', 0, '2020-01-10'),
(6, 'Neuf', 1, '2024-07-22'),
(6, 'Correct', 0, '2022-08-13'),
(7, 'Abîmé', 1, '2021-04-03'),
(7, 'Correct', 0, '2023-09-11');

INSERT INTO LIVRE (titre,ISBN,nb_pages,annee_publication,uniquement_sur_place,disponible)
VALUES
('JavaScript Moderne', '987654321098765', 600, '2024-11-10', 0, 1),
('Introduction à Node.js', '564738291047562', 350, '2023-06-15', 1, 1),
('Les bases du CSS', '745839102456789', 450, '2022-03-19', 0, 0),
('Python pour débutants', '963852741036258', 400, '2023-05-05', 0, 1),
('Pratique du développement web', '258147963025478', 700, '2022-07-30', 1, 1),
('Vue.js pour les développeurs', '159753486032159', 500, '2024-09-10', 0, 1),
('Les secrets de React', '321654987753258', 650, '2023-12-12', 0, 0);

INSERT INTO LIVRE_CATEGORIES (livre_id, categories_id) VALUES
(1, 1),
(1, 2),
(2, 3),
(2, 4),
(3, 1),
(3, 5),
(4, 2),
(4, 3),
(5, 4),
(5, 5),
(6, 1),
(6, 2),
(7, 3),
(7, 4);

INSERT INTO MEMBRE (nom_membre, prenom_membre, adresse_membre, email_membre, date_inscription) VALUES
('Cook', 'Tim', '25 bv de la République', 'timcook@génieduweb.com', '2025-03-07'),
('Smith', 'John', '12 rue des Lilas', 'john.smith@example.com', '2024-05-22'),
('Dupont', 'Marie', '14 avenue de la Liberté', 'marie.dupont@example.com', '2023-11-18'),
('Johnson', 'Emily', '2 impasse des Coquelicots', 'emily.johnson@example.com', '2022-08-10'),
('García', 'Carlos', '38 rue de la Paix', 'carlos.garcia@example.com', '2023-12-01');

INSERT INTO PAYS (id_pays, nom_pays) VALUES
(1, 'France'),
(2, 'États-Unis'),
(3, 'Royaume-Uni'),
(4, 'Allemagne'),
(5, 'Espagne');
