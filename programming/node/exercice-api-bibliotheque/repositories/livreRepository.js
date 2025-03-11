import { openDb } from "../config/database.js";

let db;

async function getDbConnexion() {
  if (!db) {
    db = await openDb();
  }
  return db;
}
// Method GET pour récup tous les livres
export async function getAllLivres() {
  const db = await getDbConnexion();

  return await db.all("SELECT * FROM LIVRE");
}

// Method POST pour ajouter un nouveau livre
export async function createLivre(newLivre) {
  const db = await getDbConnexion();
  const result = await db.run(
    "INSERT INTO LIVRE (titre, ISBN,nb_pages,annee_publication, uniquement_sur_place,disponible) VALUES(?,?,?,?,?,?)",
    [
      newLivre.titre,
      newLivre.ISBN,
      newLivre.nb_pages,
      newLivre.annee_publication,
      newLivre.uniquement_sur_place,
      newLivre.disponible,
    ]
  );
  return { id: result.lastID, ...newLivre }; // Retourne le livre avec son ID
}

// Method PUT pour modifier un livre existant
export async function livreUpdate(id, updateLivre) {
  const db = await getDbConnexion();
  console.log("livreUpdateRepository | id: ", id);
  console.log("livreUpdateRepository | updatelivre:", updateLivre);
  const result = await db.run(
    "UPDATE LIVRE SET titre = ?, ISBN = ?, nb_pages = ?, annee_publication = ? , uniquement_sur_place = ?, disponible = ? WHERE livre_id = ?",
    [
      updateLivre.titre,
      updateLivre.ISBN,
      updateLivre.nb_pages,
      updateLivre.annee_publication,
      updateLivre.uniquement_sur_place,
      updateLivre.disponible,
      id,
    ]
  );

  return result.changes > 0;
}
// Method DELETE pour supprimer un livre existant
export async function deleteLivre(id) {
  const db = await getDbConnexion();

  const result = await db.run("DELETE FROM LIVRE WHERE livre_id = ?", [id]);
  return result.changes > 0;
}
