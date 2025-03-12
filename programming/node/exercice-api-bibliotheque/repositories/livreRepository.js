import { openDb } from "../config/database.js";

// Method GET pour récup tous les livres
export async function getAllLivresRepository() {
  const db = await openDb();

  return await db.all("SELECT * FROM LIVRE");
}

// Method POST pour ajouter un nouveau livre
export async function createLivreRepository(newLivre) {
  const db = await openDb();
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
export async function updateLivreRepository(id, updateLivre) {
  const db = await openDb();
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
export async function deleteLivreRepository(id) {
  const db = await openDb();

  const result = await db.run("DELETE FROM LIVRE WHERE livre_id = ?", [id]);
  return result.changes > 0;
}

export async function getPaginatedLivreRepository(limit, offset) {
  const db = await openDb();
  const livres = await db.all(
    "SELECT * FROM LIVRE ORDER BY livre_id ASC LIMIT ? OFFSET ?",
    [limit, offset]
  );

  return livres;
}

export async function getPaginatedLivreTotalRowsRepository() {
  const db = await openDb();
  const totalRow = await db.get("SELECT COUNT (*) as total FROM LIVRE");
  const total = totalRow.total;
  console.log("Total de livres dans la table : |", total);

  return total;
}
