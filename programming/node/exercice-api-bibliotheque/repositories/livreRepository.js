import { openDb } from "../config/database.js";
const db = await openDb();

// verifier ici pour ajouter promesse
// Method GET
export async function getAllLivres() {
  const livres = await db.all("SELECT * FROM LIVRE");
  console.log(livres);
  return livres;
}

// Method POST
export async function createLivre(newLivre) {
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

// Method PUT
export async function updateLivre() {
  const updateLivre = await db.run(
    "UPDATE LIVRE SET titre = ?, ISBN = ?, nb_page = ?, annee_publication = ? , uniquement_sur_place = ?, disponible = ?",
    [
      updateLivre.titre,
      updateLivre.ISBN,
      updateLivre.nb_pages,
      updateLivre.annee_publication,
      updateLivre.uniquement_sur_place,
      updateLivre.disponible,
    ]
  );
}
