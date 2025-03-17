// Selection d'un livre par auteur spécifique

SELECT LIVRE.livre_id, AUTEUR.nom_auteur
FROM LIVRE
JOIN AUTEUR_LIVRE ON LIVRE.livre_id = AUTEUR_LIVRE.livre_id
JOIN AUTEUR_LIVRE ON AUTEUR.auteur_nom = AUTEUR_LIVRE.auteur_id
WHERE livre_id = ?

INSERT INTO AUTEUR (nom_auteur, prenom_auteur, date_naissance, id_pays)  
VALUES  
('Hugo', 'Victor', '1802-02-26', 1),  
('Dumas', 'Alexandre', '1802-07-24', 1),  
('Tolkien', 'J.R.R.', '1892-01-03', 2),  
('Rowling', 'J.K.', '1965-07-31', 2),  
('Hemingway', 'Ernest', '1899-07-21', 3),  
('Austen', 'Jane', '1775-12-16', 2),  
('Orwell', 'George', '1903-06-25', 2),  
('Camus', 'Albert', '1913-11-07', 1),  
('King', 'Stephen', '1947-09-21', 3),  
('Murakami', 'Haruki', '1949-01-12', 4);

INSERT INTO AUTEUR_LIVRE (auteur_id, livre_id)  
VALUES  
(1, 3), -- Victor Hugo a écrit "Les bases du CSS"  
(2, 5), -- Alexandre Dumas a écrit "Pratique du développement web"  
(3, 7), -- J.R.R. Tolkien a écrit "Les secrets de React"  
(4, 2), -- J.K. Rowling a écrit "Introduction à Node.js"  
(1, 4), -- Victor Hugo a écrit "Python pour débutants"  
(2, 6), -- Alexandre Dumas a écrit "Vue.js pour les développeurs"  
(3, 1), -- J.R.R. Tolkien a écrit "JavaScript Moderne"  
(4, 5), -- J.K. Rowling a écrit "Pratique du développement web"  
(1, 2), -- Victor Hugo a écrit "Introduction à Node.js"  
(2, 3); -- Alexandre Dumas a écrit "Les bases du CSS"

INSERT INTO CATEGORIES (nom_genre, description)  
VALUES  
('Classique', 'Œuvres littéraires intemporelles et majeures.'),  
('Aventure', 'Histoires épiques avec des péripéties et du suspense.'),  
('Fantasy', 'Univers imaginaires avec magie et créatures fantastiques.'),  
('Jeunesse', 'Livres destinés aux jeunes lecteurs et adolescents.'),  
('Philosophie', 'Œuvres explorant des idées et concepts profonds.'),  
('Dystopie', 'Mondes futurs sombres et régimes totalitaires.'),  
('Romance', 'Histoires centrées sur l\'amour et les relations humaines.'),  
('Horreur', 'Histoires effrayantes et surnaturelles.'),  
('Contemporain', 'Romans traitant de sujets modernes et de société.'),  
('Guerre', 'Récits sur des conflits historiques et leurs impacts.');

INSERT INTO LIVRE_CATEGORIES (livre_id, categorie_id)  
VALUES  
(1, 1), -- Les Misérables -> Classique  
(2, 2), -- Le Comte de Monte-Cristo -> Aventure  
(3, 3), -- Le Seigneur des Anneaux -> Fantasy  
(4, 4), -- Harry Potter à l'école des sorciers -> Jeunesse  
(4, 3), -- Harry Potter à l'école des sorciers -> Fantasy  
(5, 5), -- L'Étranger -> Philosophie  
(6, 6), -- 1984 -> Dystopie  
(7, 7), -- Orgueil et Préjugés -> Romance  
(8, 8), -- Shining -> Horreur  
(9, 9), -- Kafka sur le rivage -> Contemporain  
(10, 10); -- Pour qui sonne le glas -> Guerre

INSERT INTO EMPRUNT (membre_id, exemplaire_id, date_emprunt) VALUES
(1, 1, '2025-03-17'),
(2, 2, '2025-03-16'),
(3, 3, '2025-03-15'),
(4, 4, '2025-03-14'),
(5, 5, '2025-03-13'),
(6, 6, '2025-03-12'),
(1, 7, '2025-03-11'),
(2, 8, '2025-03-10'),
(3, 9, '2025-03-09'),
(4, 10, '2025-03-08'),
(5, 11, '2025-03-07'),
(6, 12, '2025-03-06'),
(1, 13, '2025-03-05'),
(2, 14, '2025-03-04'),
(3, 15, '2025-03-03');

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
(7, 'Correct', 0, '2023-09-11'),
(8, 'Neuf', 1, '2024-09-10'),
(8, 'Correct', 0, '2023-12-12'),
(9, 'Usagé', 1, '2023-05-05'),
(9, 'Correct', 0, '2022-07-30'),
(10, 'Neuf', 1, '2024-01-10'),
(10, 'Abîmé', 0, '2023-08-22');

INSERT INTO LIVRE (titre, ISBN, nb_pages, annee_publication, uniquement_sur_place)  
VALUES  
('Les Misérables', '9782070409208', 1232, '1862-01-01', 0),  
('Le Comte de Monte-Cristo', '9782253004226', 1312, '1844-01-01', 0),  
('Le Seigneur des Anneaux', '9782266154112', 1500, '1954-07-29', 0),  
('Harry Potter à l''école des sorciers', '9782070643022', 320, '1997-06-26', 0),  
('L''Étranger', '9782070360027', 185, '1942-05-01', 0),  
('1984', '9780451524935', 328, '1949-06-08', 1),  
('Orgueil et Préjugés', '9780141439518', 432, '1813-01-28', 0),  
('Shining', '9780307743657', 659, '1977-01-28', 0),  
('Kafka sur le rivage', '9780099458326', 505, '2002-09-12', 0),  
('Pour qui sonne le glas', '9780684803357', 480, '1940-10-21', 0);

INSERT INTO LIVRE_CATEGORIES (livre_id, categorie_id)  
VALUES  
(1, 1), -- Les Misérables -> Classique  
(2, 2), -- Le Comte de Monte-Cristo -> Aventure  
(3, 3), -- Le Seigneur des Anneaux -> Fantasy  
(4, 4), -- Harry Potter à l'école des sorciers -> Jeunesse  
(4, 3), -- Harry Potter à l'école des sorciers -> Fantasy  
(5, 5), -- L'Étranger -> Philosophie  
(6, 6), -- 1984 -> Dystopie  
(7, 7), -- Orgueil et Préjugés -> Romance  
(8, 8), -- Shining -> Horreur  
(9, 9), -- Kafka sur le rivage -> Contemporain  
(10, 10); -- Pour qui sonne le glas -> Guerre

INSERT INTO MEMBRE (nom_membre, prenom_membre, adresse_membre, email_membre, date_inscription) VALUES
('Cook', 'Tim', '25 bv de la République', 'timcook@génieduweb.com', '2025-03-07'),
('Smith', 'John', '12 rue des Lilas', 'john.smith@example.com', '2024-05-22'),
('Dupont', 'Marie', '14 avenue de la Liberté', 'marie.dupont@example.com', '2023-11-18'),
('Johnson', 'Emily', '2 impasse des Coquelicots', 'emily.johnson@example.com', '2022-08-10'),
('García', 'Carlos', '38 rue de la Paix', 'carlos.garcia@example.com', '2023-12-01'),
('Martin', 'Lucie', '5 rue du Moulin', 'lucie.martin@example.com', '2024-01-15'),
('Lopez', 'Juan', '29 avenue du Général', 'juan.lopez@example.com', '2023-09-23'),
('Nguyen', 'Sophie', '12 rue des Écureuils', 'sophie.nguyen@example.com', '2023-06-08'),
('Berger', 'Paul', '3 rue de l''Église', 'paul.berger@example.com', '2022-04-11'),
('Dufresne', 'Claire', '8 rue de la Gare', 'claire.dufresne@example.com', '2023-05-17'),
('Leclerc', 'David', '18 boulevard des Fleurs', 'david.leclerc@example.com', '2024-02-05');

INSERT INTO PAYS (id_pays, nom_pays) VALUES
(1, 'France'),
(2, 'États-Unis'),
(3, 'Royaume-Uni'),
(4, 'Japon');
