import fs from "fs";
import { open } from "sqlite";
import sqlite3 from "sqlite3";
import { logError } from "./logger.js";

export async function openDb() {
  try {
    const db = await open({
      filename: "./database.db",
      driver: sqlite3.Database,
    });
    await db.exec("PRAGMA foreign_keys = ON;");
    // S'assurer que la table existe
    await initDb(db);

    return db;
  } catch (error) {
    await logError(error);
    throw new Error("Failed to open database");
  }
}

async function initDb(db) {
  try {
    // Lecture fichier SQL
    const sql = fs.readFileSync("init.sql", "utf8");
    // Exec fichier sql pour créer les tables
    await db.exec(sql);
    console.log("Base de donnée initialisé avec succès !");
  } catch (error) {
    console.error(
      "Erreur lors de l'initialisation de la base de donnée: ",
      error
    );
  }
}

//  Lancer l'initialisation de la bdd :

openDb();
