import { openDb } from "../config/database.js";

// Method GET pour récup tous les Auteurs
export async function getAllAuteursRepository() {
  const db = await openDb();

  return await db.all("SELECT * FROM AUTEUR");
}
export async function getAuteurIdRepository(id) {
  const db = await openDb();
  const auteur = await db.get("SELECT * FROM AUTEUR WHERE auteur_id = ?", [id]);
  return auteur;
}

// Method POST pour ajouter un nouveau auteur
export async function createAuteurRepository(newAuteur) {
  const db = await openDb();
  const result = await db.run(
    "INSERT INTO AUTEUR (nom_auteur,prenom_auteur,date_naissance, id_pays) VALUES(?,?,?,?)",
    [
      newAuteur.nom_auteur,
      newAuteur.prenom_auteur,
      newAuteur.date_naissance,
      newAuteur.id_pays,
    ]
  );
  return { id: result.lastID, ...newAuteur }; // Retourne l'auteur avec son ID
}

// Method PUT pour modifier un auteur existant
export async function updateAuteurRepository(id, updateAuteur) {
  const db = await openDb();
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
export async function deleteAuteurRepository(id) {
  const db = await openDb();

  const result = await db.run("DELETE FROM AUTEUR WHERE auteur_id = ?", [id]);
  return result.changes > 0;
}
