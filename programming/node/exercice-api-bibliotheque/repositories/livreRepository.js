import { openDb } from "../config/database.js";
import { Livre } from "../models/livreModel.js";

// Method GET pour récup tous les livres
export async function getAllLivresRepository() {
  const db = await openDb();
  return await db.all("SELECT * FROM LIVRE");
}

// Method POST pour ajouter un nouveau livre
export async function createLivreRepository(newLivre) {
  const book = new Livre(
    newLivre.titre,
    newLivre.ISBN,
    newLivre.nb_pages,
    newLivre.annee_publication,
    newLivre.uniquement_sur_place
  );
  console.log("Validator book ", book.estValide());
  if (book.estValide().length > 0) {
    return {
      error: "Un ou plusieurs champs pose(nt) problème.",
      validation: book.estValide(),
    };
  }

  const db = await openDb();
  const result = await db.run(
    "INSERT INTO LIVRE (titre, ISBN,nb_pages,annee_publication, uniquement_sur_place) VALUES(?,?,?,?,?)",
    [
      newLivre.titre,
      newLivre.ISBN,
      newLivre.nb_pages,
      newLivre.annee_publication,
      newLivre.uniquement_sur_place,
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
    "UPDATE LIVRE SET titre = ?, ISBN = ?, nb_pages = ?, annee_publication = ? , uniquement_sur_place = ? WHERE livre_id = ?",
    [
      updateLivre.titre,
      updateLivre.ISBN,
      updateLivre.nb_pages,
      updateLivre.annee_publication,
      updateLivre.uniquement_sur_place,
      id,
    ]
  );

  return result.changes > 0;
}
// Method DELETE pour supprimer un livre existant
export async function deleteLivreRepository(id) {
  const db = await openDb();

  await db.run("DELETE FROM AUTEUR_LIVRE WHERE livre_id = ?", [id]);
  await db.run("DELETE FROM AUTEUR_LIVRE WHERE livre_id = ?", [id]);
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

export async function getLivreAuteurByIdRepository(id) {
  const db = await openDb();
  const livreAuteur = await db.all(
    "SELECT LIVRE.titre, AUTEUR.nom_auteur FROM LIVRE JOIN AUTEUR_LIVRE ON LIVRE.livre_id = AUTEUR_LIVRE.livre_id JOIN AUTEUR ON AUTEUR.auteur_id = AUTEUR_LIVRE.auteur_id WHERE AUTEUR.auteur_id  = ? ",
    [id]
  );
  console.log(livreAuteur);
  return livreAuteur;
}

export async function getLivreCategorieRepository(id) {
  const db = await openDb();
  const livreCategorie = await db.all(
    "SELECT LIVRE.titre, CATEGORIES.nom_genre, CATEGORIES.description FROM LIVRE JOIN LIVRE_CATEGORIES ON LIVRE.livre_id = LIVRE_CATEGORIES.livre_id JOIN CATEGORIES ON CATEGORIES.categories_id = LIVRE_CATEGORIES.categories_id WHERE CATEGORIES.categories_id = ?",
    [id]
  );

  return livreCategorie;
}
