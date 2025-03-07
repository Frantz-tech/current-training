import fs from "fs";
import sqlite3 from "sqlite3";

// Connexion à la base SQLite
export const sqliteDb = new sqlite3.Database("./bibliotheque.db");

// Fonction pour initialiser la base de données avec le fichier SQL
async function initDB() {
  try {
    // Lire le contenu du fichier SQL
    const sql = fs.readFileSync("init.sql", "utf8");

    // Exécuter le SQL pour créer les tables
    sqliteDb.exec(sql, (err) => {
      if (err) {
        console.error("Erreur lors de l'exécution du SQL :", err);
        return;
      }
      console.log("Base de données initialisée avec succès");
    });
  } catch (error) {
    console.error(
      "Erreur lors de l'initialisation de la base de données :",
      error
    );
  } finally {
    sqliteDb.close();
  }
}

// Lancer l'initialisation de la base de données
initDB();
