import { error } from "console";
import fs from "fs/promises";
import sqlite3 from "sqlite3";
export const sqliteDb = new sqlite3.Database(".api_biblio.db");

async function initDb() {
  try {
    const sql = fs.readfileSync("init.sql", "utf8");
    sqliteDb.exec(sql, (err) => {
      if (err) {
        error("Erreur lors de l'exec du SQL :", error);
        return;
      }
      console.log("Base de donnée initialisé avec succès !");
    });
  } catch (error) {
    console.error("Erreur lors de l'initialisation de la base de donné");
  } finally {
    sqliteDb.close();
  }
}

//  Lancer l'initialisation de la bdd :

initDb();
