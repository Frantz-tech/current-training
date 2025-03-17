import { openDb } from "../config/database.js";
import { Emprunt } from "../models/empruntModel.js";

// Method GET pour récup tous les emprunts
export async function getAllEmpruntRepository() {
  const db = await openDb();

  return await db.all("SELECT * FROM EMPRUNT");
}

export async function getEmpruntIdRepository(id) {
  const db = await openDb();
  const emprunt = await db.get("SELECT * FROM EMPRUNT WHERE emprunt_id = ?", [
    id,
  ]);
  return emprunt;
}
// Method POST pour ajouter un nouveau emprunt
export async function createEmpruntRepository(newEmprunt) {
  const emprunt = new Emprunt(newEmprunt.membre_id, newEmprunt.exemplaire_id);
  console.log("Validator Emprunt ", emprunt.estValide());
  // console.log("Erreur: ", emprunt.estValide()[0].erreur);

  if (emprunt.estValide().length < 0) {
    return {
      error: "Un ou plusieurs champs posent problèmes",
      validation: emprunt.estValide(),
    };
  }

  const db = await openDb();
  const result = await db.run(
    "INSERT INTO EMPRUNT (membre_id,exemplaire_id) VALUES(?,?)",
    [newEmprunt.membre_id, newEmprunt.exemplaire_id]
  );
  return { id: result.lastID, ...newEmprunt }; // Retourne l'emprunt avec son ID
}

// Method PUT pour modifier un Emprunt existant
export async function updateEmpruntRepository(id, updateEmprunt) {
  const db = await openDb();
  const result = await db.run(
    "UPDATE EMPRUNT SET membre_id = ?, exemplaire_id = ? WHERE emprunt_id = ?",
    [updateEmprunt.membre_id, updateEmprunt.exemplaire_id, id]
  );

  return result.changes > 0;
}
// Method DELETE pour supprimer un emprunt existant
export async function deleteEmpruntRepository(id) {
  const db = await openDb();

  const result = await db.run("DELETE FROM EMPRUNT WHERE emprunt_id = ?", [id]);
  return result.changes > 0;
}
