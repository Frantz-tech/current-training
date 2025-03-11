import { openDb } from "../config/database.js";

let db;

async function getDbConnexion() {
  if (!db) {
    db = await openDb();
  }
  return db;
}
// Method GET pour récup tous les Auteurs
export async function getAllAuteurs() {
  const db = await getDbConnexion();

  return await db.all("SELECT * FROM AUTEUR");
}

// Method POST pour ajouter un nouveau auteur
export async function createAuteur(newAuteur) {
  const db = await getDbConnexion();
  const result = await db.run(
    "INSERT INTO AUTEUR (nom_auteur,prenom_auteur,date_naissance) VALUES(?,?,?)",
    [newAuteur.nom_auteur, newAuteur.prenom_auteur, newAuteur.date_naissance]
  );
  return { id: result.lastID, ...newAuteur }; // Retourne l'auteur avec son ID
}

// Method PUT pour modifier un auteur existant
export async function AuteurUpdate(id, updateAuteur) {
  const db = await getDbConnexion();
  const result = await db.run(
    "UPDATE AUTEUR SET nom_auteur = ?, prenom_auteur = ?, date_naissance = ?, id_pays = ? WHERE auteur_id = ?",
    [
      updateAuteur.nom_auteur,
      updateAuteur.prenom_auteur,
      updateAuteur.date_naissance,
      updateAuteur.id_pays,
      id,
    ]
  );

  return result.changes > 0;
}
// Method DELETE pour supprimer un auteur existant
export async function deleteAuteur(id) {
  const db = await getDbConnexion();

  const result = await db.run("DELETE FROM AUTEUR WHERE auteur_id = ?", [id]);
  return result.changes > 0;
}
