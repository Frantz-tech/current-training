import sqlite3 from "sqlite3";

// Connexion à la base de données
const db = new sqlite3.Database("biblio.db", (err) => {
  if (err) {
    console.error(
      `Impossible de se connecter à la base de données: ${err.message}`
    );
  } else {
    console.log("Connexion à la base de données réussie");
  }
});

// Exécution des différentes fonctions
async function runQueries() {
  try {
    await selectLivreAuteur(db);
    await selectCatagorieLivre(db);
    await selectAuteurFrancais(db);
    await LivreAuteurCatg(db);
    await categLivre(db);
    await maxLivreAuteur(db);
    await updateTitle(db);
    await deleteLivre(db);
    await updateNationalite(db);
  } catch (error) {
    console.error("Erreur lors de l'exécution des requêtes:", error.message);
  } finally {
    db.close((err) => {
      if (err) {
        console.error(
          "Erreur lors de la fermeture de la base de données:",
          err.message
        );
      } else {
        console.log("Base de données fermée avec succès");
      }
    });
  }
}

// Récupérer tous les auteurs
async function selectLivreAuteur(db) {
  try {
    const selectL = await new Promise((resolve, reject) => {
      db.all("SELECT * FROM AUTEUR", (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });

    console.table(selectL);
  } catch (error) {
    console.error(`Impossible de récupérer tous les auteurs: ${error.message}`);
  }
}

// Récupérer les livres d'une catégorie spécifique
async function selectCatagorieLivre(db) {
  try {
    const selectCL = await new Promise((resolve, reject) => {
      db.all(
        "SELECT * FROM LIVRE_CATEGORIES WHERE categories_id = 3",
        (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        }
      );
    });
    console.table(selectCL);
  } catch (error) {
    console.error(
      `Impossible de récupérer les livres d'une catégorie: ${error.message}`
    );
  }
}

// Récupérer les auteurs français
async function selectAuteurFrancais(db) {
  try {
    const selectAF = await new Promise((resolve, reject) => {
      db.all(
        "SELECT AUTEUR.nom_auteur, AUTEUR.prénom_auteur FROM AUTEUR JOIN PAYS ON AUTEUR.auteur_id = PAYS.id_pays WHERE PAYS.nom_pays = 'France'",
        (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        }
      );
    });
    console.table(selectAF);
  } catch (error) {
    console.error(
      `Impossible de récupérer les auteurs français: ${error.message}`
    );
  }
}

// Récupérer les livres avec leurs auteurs et catégories
async function LivreAuteurCatg(db) {
  try {
    const livreAC = await new Promise((resolve, reject) => {
      db.all(
        "SELECT LIVRE.titre, AUTEUR.nom_auteur, CATEGORIES.nom_genre FROM LIVRE JOIN AUTEUR_LIVRE ON LIVRE.livre_id = AUTEUR_LIVRE.livre_id JOIN AUTEUR ON AUTEUR_LIVRE.auteur_id = AUTEUR.auteur_id JOIN LIVRE_CATEGORIES ON LIVRE.livre_id = LIVRE_CATEGORIES.livre_id JOIN CATEGORIES ON LIVRE_CATEGORIES.categories_id = CATEGORIES.categories_id",
        (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        }
      );
    });
    console.table(livreAC);
  } catch (error) {
    console.error(
      `Impossible d'afficher les livres avec leurs auteurs et catégories: ${error.message}`
    );
  }
}

// Récupérer le nombre de livres par catégorie
async function categLivre(db) {
  try {
    const categL = await new Promise((resolve, reject) => {
      db.all(
        "SELECT CATEGORIES.nom_genre, COUNT(LIVRE_CATEGORIES.categories_id) AS total_livre_par_categories FROM CATEGORIES JOIN LIVRE_CATEGORIES ON CATEGORIES.categories_id = LIVRE_CATEGORIES.categories_id GROUP BY CATEGORIES.nom_genre",
        (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        }
      );
    });
    console.table(categL);
  } catch (error) {
    console.error(
      `Impossible d'afficher le nombre de livres par catégorie: ${error.message}`
    );
  }
}

// Récupérer l'auteur ayant écrit le plus de livres
async function maxLivreAuteur(db) {
  try {
    const maxLA = await new Promise((resolve, reject) => {
      db.all(
        "SELECT AUTEUR.nom_auteur, COUNT (AUTEUR_LIVRE.livre_id) AS nbr_livre_total FROM AUTEUR JOIN AUTEUR_LIVRE ON AUTEUR.auteur_id = AUTEUR_LIVRE.auteur_id GROUP BY AUTEUR.auteur_id ORDER BY nbr_livre_total DESC LIMIT 1",
        (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        }
      );
    });
    console.table(maxLA);
  } catch (error) {
    console.error(
      `Impossible d'afficher l'auteur ayant écrit le plus de livres: ${error.message}`
    );
  }
}

// Mettre à jour le titre d'un livre
async function updateTitle(db) {
  try {
    const updateT = await new Promise((resolve, reject) => {
      db.run(
        "UPDATE LIVRE SET titre = 'Blanche Neige et les 8 Nains' WHERE livre_id = 2",
        function (err) {
          if (err) reject(err);
          resolve(this); // retourne l'objet contenant `this.changes` pour savoir combien de lignes ont été modifiées
        }
      );
    });
    console.table(updateT);
  } catch (error) {
    console.error(
      `Impossible de modifier le titre d'un livre: ${error.message}`
    );
  }
}

// Supprimer un livre
async function deleteLivre(db) {
  try {
    const deleteLivre = await new Promise((resolve, reject) => {
      db.run("DELETE FROM LIVRE WHERE livre_id = 2", function (err) {
        if (err) reject(err);
        resolve(this);
      });
    });
    console.table(deleteLivre);
  } catch (error) {
    console.error(`Impossible de supprimer un livre: ${error.message}`);
  }
}

// Mettre à jour la nationalité d'un auteur
async function updateNationalite(db) {
  try {
    const updateN = await new Promise((resolve, reject) => {
      db.run(
        "UPDATE AUTEUR SET id_pays = 3 WHERE auteur_id = 1",
        function (err) {
          if (err) reject(err);
          resolve(this);
        }
      );
    });
    console.table(updateN);
  } catch (error) {
    console.error(
      `Impossible de modifier la nationalité d'un auteur: ${error.message}`
    );
  }
}

// Lancer les requêtes
runQueries();
