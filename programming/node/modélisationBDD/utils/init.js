/**
 * Ouvre une connexion à la base de données SQLite.
 * @returns {Promise<import('sqlite').Database>} Instance de la base de données.
 */

import { logError } from "./logger";

export async function open() {
  try {
    const dbsql = await open({
      filename: "./bibliotheque.db",
      driver: sqlite3.Database,
    });

    await initDb(dbsql);
    return dbsql;
  } catch (error) {
    await logError(error);
    throw new Error("Failed to open DB");
  }
}
