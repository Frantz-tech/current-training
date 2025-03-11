import { openDb } from "../config/database.js";

let db;

async function getDbConnexion() {
  if (!db) {
    db = await openDb();
  }
  return db;
}
// Method GET pour récup tous les emprunts
export async function getAllEmprunt() {
  const db = await getDbConnexion();

  return await db.all("SELECT * FROM EMPRUNT");
}

// Method POST pour ajouter un nouveau emprunt
export async function createEmprunt(newEmprunt) {
  const db = await getDbConnexion();
  const result = await db.run(
    "INSERT INTO EMPRUNT (membre_id,exemplaire_id) VALUES(?,?)",
    [newEmprunt.membre_id, newEmprunt.exemplaire_id]
  );
  return { id: result.lastID, ...newEmprunt }; // Retourne l'emprunt avec son ID
}

// Method PUT pour modifier un Emprunt existant
export async function empruntUpdate(id, updateEmprunt) {
  const db = await getDbConnexion();
  const result = await db.run(
    "UPDATE EMPRUNT SET membre_id = ?, exemplaire_id = ? WHERE emprunt_id = ?",
    [updateEmprunt.membre_id, updateEmprunt.exemplaire_id, id]
  );

  return result.changes > 0;
}
// Method DELETE pour supprimer un emprunt existant
export async function deleteEmprunt(id) {
  const db = await getDbConnexion();

  const result = await db.run("DELETE FROM EMPRUNT WHERE emprunt_id = ?", [id]);
  return result.changes > 0;
}
