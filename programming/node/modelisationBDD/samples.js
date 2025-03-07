import sqlite3 from "sqlite3";
const sampleLivres = [
  {
    titre: "JavaScript Moderne",
    ISBN: "987654321098765",
    nb_pages: 600,
    année_publication: "2024-11-10",
    uniquement_sur_place: 0,
    disponible: 1,
  },
  {
    titre: "Introduction à Node.js",
    ISBN: "564738291047562",
    nb_pages: 350,
    année_publication: "2023-06-15",
    uniquement_sur_place: 1,
    disponible: 1,
  },
  {
    titre: "Les bases du CSS",
    ISBN: "745839102456789",
    nb_pages: 450,
    année_publication: "2022-03-19",
    uniquement_sur_place: 0,
    disponible: 0,
  },
  {
    titre: "Python pour débutants",
    ISBN: "963852741036258",
    nb_pages: 400,
    année_publication: "2023-05-05",
    uniquement_sur_place: 0,
    disponible: 1,
  },
  {
    titre: "Pratique du développement web",
    ISBN: "258147963025478",
    nb_pages: 700,
    année_publication: "2022-07-30",
    uniquement_sur_place: 1,
    disponible: 1,
  },
  {
    titre: "Vue.js pour les développeurs",
    ISBN: "159753486032159",
    nb_pages: 500,
    année_publication: "2024-09-10",
    uniquement_sur_place: 0,
    disponible: 1,
  },
  {
    titre: "Les secrets de React",
    ISBN: "321654987753258",
    nb_pages: 650,
    année_publication: "2023-12-12",
    uniquement_sur_place: 0,
    disponible: 0,
  },
];
const sampleAuteur = [
  {
    nom_auteur: "Sens",
    prénom_auteur: "George",
    date_naissance: "1965-05-15",
    id_pays: 1,
  },
  {
    nom_auteur: "Spilberg",
    prénom_auteur: "Steven",
    date_naissance: "1959-08-02",
    id_pays: 5,
  },
  {
    nom_auteur: "Roadman",
    prénom_auteur: "Dani",
    date_naissance: "1961-12-30",
    id_pays: 3,
  },
  {
    nom_auteur: "Polak",
    prénom_auteur: "Zoelski",
    date_naissance: "1948-05-08",
    id_pays: 4,
  },
];
const sampleCategories = [
  {
    nom_genre: "Policier",
    description: "Enquêtes criminelles et mystères.",
  },
  {
    nom_genre: "Romance",
    description: "Histoires d'amour et émotions.",
  },
  {
    nom_genre: "Science-Fiction",
    description: "Voyages dans le futur.",
  },
  {
    nom_genre: "Jeunesse",
    description: "Aventures pour jeunes lecteurs.",
  },
  {
    nom_genre: "Histoire",
    description: "Récits d'événements passés.",
  },
];
const sampleMembre = [
  {
    nom_membre: "Cook",
    prenom_membre: "Tim",
    adresse_membre: "25 bv de la République",
    email_membre: "timcook@génieduweb.com",
    date_inscription: "2025-03-07",
  },
  {
    nom_membre: "Smith",
    prenom_membre: "John",
    adresse_membre: "12 rue des Lilas",
    email_membre: "john.smith@example.com",
    date_inscription: "2024-05-22",
  },
  {
    nom_membre: "Dupont",
    prenom_membre: "Marie",
    adresse_membre: "14 avenue de la Liberté",
    email_membre: "marie.dupont@example.com",
    date_inscription: "2023-11-18",
  },
  {
    nom_membre: "Johnson",
    prenom_membre: "Emily",
    adresse_membre: "2 impasse des Coquelicots",
    email_membre: "emily.johnson@example.com",
    date_inscription: "2022-08-10",
  },
  {
    nom_membre: "García",
    prenom_membre: "Carlos",
    adresse_membre: "38 rue de la Paix",
    email_membre: "carlos.garcia@example.com",
    date_inscription: "2023-12-01",
  },
];
const sampleEmprunt = [
  {
    membre_id: 1,
    exemplaire_id: 3,
    date_emprunt: "2025-03-07",
    date_retour_prévu: "2025-04-07",
    date_retour_effective: null,
  },
  {
    membre_id: 2,
    exemplaire_id: 1,
    date_emprunt: "2024-05-22",
    date_retour_prévu: "2024-06-22",
    date_retour_effective: "2024-06-20",
  },
  {
    membre_id: 3,
    exemplaire_id: 5,
    date_emprunt: "2023-11-18",
    date_retour_prévu: "2023-12-18",
    date_retour_effective: "2023-12-16",
  },
  {
    membre_id: 4,
    exemplaire_id: 2,
    date_emprunt: "2022-08-10",
    date_retour_prévu: "2022-09-10",
    date_retour_effective: null,
  },
  {
    membre_id: 5,
    exemplaire_id: 4,
    date_emprunt: "2023-12-01",
    date_retour_prévu: "2024-01-01",
    date_retour_effective: null,
  },
];

const samplePays = [
  {
    id_pays: 1,
    nom_pays: "France",
  },
  {
    id_pays: 2,
    nom_pays: "États-Unis",
  },
  {
    id_pays: 3,
    nom_pays: "Royaume-Uni",
  },
  {
    id_pays: 4,
    nom_pays: "Allemagne",
  },
  {
    id_pays: 5,
    nom_pays: "Espagne",
  },
];

const sampleAuteurLivre = [
  {
    auteur_id: 1,
    livre_id: 3,
  },
  {
    auteur_id: 2,
    livre_id: 5,
  },
  {
    auteur_id: 3,
    livre_id: 7,
  },
  {
    auteur_id: 4,
    livre_id: 2,
  },
  {
    auteur_id: 1,
    livre_id: 4,
  },
  {
    auteur_id: 2,
    livre_id: 6,
  },
  {
    auteur_id: 3,
    livre_id: 1,
  },
  {
    auteur_id: 4,
    livre_id: 5,
  },
  {
    auteur_id: 1,
    livre_id: 2,
  },
  {
    auteur_id: 2,
    livre_id: 3,
  },
];
const sampleLivreCategories = [
  {
    livre_id: 1,
    categories_id: 1,
  },
  {
    livre_id: 1,
    categories_id: 2,
  },
  {
    livre_id: 2,
    categories_id: 3,
  },
  {
    livre_id: 2,
    categories_id: 4,
  },
  {
    livre_id: 3,
    categories_id: 1,
  },
  {
    livre_id: 3,
    categories_id: 5,
  },
  {
    livre_id: 4,
    categories_id: 2,
  },
  {
    livre_id: 4,
    categories_id: 3,
  },
  {
    livre_id: 5,
    categories_id: 4,
  },
  {
    livre_id: 5,
    categories_id: 5,
  },
  {
    livre_id: 6,
    categories_id: 1,
  },
  {
    livre_id: 6,
    categories_id: 2,
  },
  {
    livre_id: 7,
    categories_id: 3,
  },
  {
    livre_id: 7,
    categories_id: 4,
  },
  {
    livre_id: 8,
    categories_id: 2,
  },
  {
    livre_id: 8,
    categories_id: 5,
  },
  {
    livre_id: 9,
    categories_id: 1,
  },
  {
    livre_id: 9,
    categories_id: 3,
  },
  {
    livre_id: 10,
    categories_id: 4,
  },
  {
    livre_id: 10,
    categories_id: 5,
  },
];

const sampleExemplaires = [
  {
    livre_id: 1,
    etat: "Neuf",
    disponibilite: true,
    date_dachat: "2024-01-15",
  },
  {
    livre_id: 1,
    etat: "Usagé",
    disponibilite: false,
    date_dachat: "2022-05-10",
  },
  {
    livre_id: 2,
    etat: "Neuf",
    disponibilite: true,
    date_dachat: "2023-06-05",
  },
  {
    livre_id: 2,
    etat: "Correct",
    disponibilite: false,
    date_dachat: "2021-07-20",
  },
  {
    livre_id: 3,
    etat: "Abîmé",
    disponibilite: true,
    date_dachat: "2020-03-15",
  },
  {
    livre_id: 3,
    etat: "Correct",
    disponibilite: false,
    date_dachat: "2019-12-05",
  },
  {
    livre_id: 4,
    etat: "Usagé",
    disponibilite: true,
    date_dachat: "2022-02-18",
  },
  {
    livre_id: 4,
    etat: "Neuf",
    disponibilite: false,
    date_dachat: "2021-11-11",
  },
  {
    livre_id: 5,
    etat: "Correct",
    disponibilite: true,
    date_dachat: "2023-04-30",
  },
  {
    livre_id: 5,
    etat: "Usagé",
    disponibilite: false,
    date_dachat: "2020-01-10",
  },
  {
    livre_id: 6,
    etat: "Neuf",
    disponibilite: true,
    date_dachat: "2024-07-22",
  },
  {
    livre_id: 6,
    etat: "Correct",
    disponibilite: false,
    date_dachat: "2022-08-13",
  },
  {
    livre_id: 7,
    etat: "Abîmé",
    disponibilite: true,
    date_dachat: "2021-04-03",
  },
  {
    livre_id: 7,
    etat: "Correct",
    disponibilite: false,
    date_dachat: "2023-09-11",
  },
  {
    livre_id: 8,
    etat: "Usagé",
    disponibilite: true,
    date_dachat: "2022-12-05",
  },
  {
    livre_id: 8,
    etat: "Neuf",
    disponibilite: false,
    date_dachat: "2023-02-17",
  },
  {
    livre_id: 9,
    etat: "Neuf",
    disponibilite: true,
    date_dachat: "2024-01-25",
  },
  {
    livre_id: 9,
    etat: "Abîmé",
    disponibilite: false,
    date_dachat: "2022-07-28",
  },
  {
    livre_id: 10,
    etat: "Correct",
    disponibilite: true,
    date_dachat: "2023-11-18",
  },
  {
    livre_id: 10,
    etat: "Usagé",
    disponibilite: false,
    date_dachat: "2021-09-15",
  },
];

export function seedDatabase() {
  const db = new sqlite3.Database("./bibliotheque.db");
  try {
    db.run("DELETE FROM LIVRE");
    db.run("DELETE FROM AUTEUR_LIVRE");
    db.run("DELETE FROM CATEGORIES");
    db.run("DELETE FROM EMPRUNT");
    db.run("DELETE FROM EXEMPLAIRES");
    db.run("DELETE FROM LIVRE_CATEGORIES");
    db.run("DELETE FROM MEMBRE");
    db.run("DELETE FROM PAYS");
    for (const livre of sampleLivres) {
      db.run(
        "INSERT INTO LIVRE (titre,ISBN,nb_pages,année_publication,uniquement_sur_place,disponible) VALUES (?,?,?,?,?,?)",
        [
          livre.titre,
          livre.ISBN,
          livre.nb_pages,
          livre.année_publication,
          livre.uniquement_sur_place,
          livre.disponible,
        ]
      );
    }

    for (const auteur of sampleAuteur) {
      db.run(
        "INSERT INTO AUTEUR(nom_auteur, prénom_auteur, date_naissance, id_pays) VALUES (?,?,?,?)",
        [
          auteur.nom_auteur,
          auteur.prénom_auteur,
          auteur.date_naissance,
          auteur.id_pays,
        ]
      );
    }
    for (const Categories of sampleCategories) {
      db.run("INSERT INTO CATEGORIES (nom_genre,description) VALUES (?,?)", [
        Categories.nom_genre,
        Categories.description,
      ]);
    }
    for (const Membres of sampleMembre) {
      db.run(
        "INSERT INTO MEMBRE(nom_membre, prenom_membre,adresse_membre,email_membre,date_inscription) VALUES (?,?,?,?,?)",
        [
          Membres.nom_membre,
          Membres.prenom_membre,
          Membres.adresse_membre,
          Membres.email_membre,
          Membres.date_inscription,
        ]
      );
    }
    for (const Emprunt of sampleEmprunt) {
      db.run(
        "INSERT INTO EMPRUNT(membre_id,exemplaire_id,date_emprunt,date_retour_prévu,date_retour_effective) VALUES (?,?,?,?,?)",
        [
          Emprunt.membre_id,
          Emprunt.exemplaire_id,
          Emprunt.date_emprunt,
          Emprunt.date_retour_prévu,
          Emprunt.date_retour_effective,
        ]
      );
    }
    for (const pays of samplePays) {
      db.run("INSERT INTO PAYS (id_pays,nom_pays) VALUES (?,?)", [
        pays.id_pays,
        pays.nom_pays,
      ]);
    }

    for (const AuteurLivre of sampleAuteurLivre) {
      db.run("INSERT INTO AUTEUR_LIVRE(auteur_id,livre_id) VALUES (?,?)", [
        AuteurLivre.auteur_id,
        AuteurLivre.livre_id,
      ]);
    }
    for (const LivreCategories of sampleLivreCategories) {
      db.run(
        "INSERT INTO LIVRE_CATEGORIES(livre_id,categories_id) VALUES (?,?)",
        [LivreCategories.livre_id, LivreCategories.categories_id]
      );
    }
    for (const exemplaires of sampleExemplaires) {
      db.run(
        "INSERT INTO EXEMPLAIRES(livre_id,etat,disponibilite,date_dachat) VALUES (?,?,?,?)",
        [
          exemplaires.livre_id,
          exemplaires.etat,
          exemplaires.disponibilite,
          exemplaires.date_dachat,
        ]
      );
    }
  } catch (error) {
    console.error("Error seeding database", error.message);
    process.exit(1);
  }
}

seedDatabase();
