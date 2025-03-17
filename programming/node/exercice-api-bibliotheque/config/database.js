import fs from "fs";
import { Sequelize } from "sequelize";
import { open } from "sqlite";
import sqlite3 from "sqlite3";
import { logError } from "../utils/logger.js";

const isTestEnv = process.env.NODE_ENV === "test";

if (isTestEnv) console.log("NODE_ENV:", process.env.NODE_ENV);

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.db",
  logging: false, // Désactiver les logs en test
});

export async function openDb() {
  try {
    const db = await open({
      filename: isTestEnv ? "database.test.db" : "./database.db",
      driver: sqlite3.Database,
    });
    await db.exec("PRAGMA foreign_keys = ON;");

    if (!isTestEnv) {
      await initDb(db);
    }

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

openDb();
