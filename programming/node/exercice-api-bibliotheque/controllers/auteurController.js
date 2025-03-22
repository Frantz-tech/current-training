import {
  createAuteurService,
  deleteAuteurService,
  getAllAuteursService,
  updateAuteurService,
} from "../services/auteurService.js";
import { parseRequestBody } from "../utils/httpHelper.js";

export async function getAllAuteurController(res) {
  const result = await getAllAuteursService();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(result));
}

export async function createAuteurController(req, res) {
  try {
    const newAuteur = await parseRequestBody(req);
    const createdAuteur = await createAuteurService(newAuteur);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(createdAuteur));
  } catch (error) {
    console.error("Erreur lors de la création de l'auteur", error);
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Données Invalides" }));
  }
}

export async function updateAuteurController(req, res, id) {
  if (!id) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "ID manquant" }));
    return;
  }
  try {
    const newAuteurUpdate = await parseRequestBody(req);
    console.log("données modifiée dans postman", newAuteurUpdate);
    const succesUpdate = await updateAuteurService(id, newAuteurUpdate);
    console.log("J'ai quoi dans succesUpdate ", succesUpdate);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Auteur mis a jour" }));
  } catch (error) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Atueur non trouvé" }));
  }
}
export async function deleteAuteurController(res, id) {
  if (!id) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "ID manquant" }));
    return;
  }

  try {
    const succesDelete = await deleteAuteurService(id);
    if (succesDelete) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Auteur supprimé avec succès" }));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({ error: "Auteur non trouvé pour la suppression" })
      );
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Erreur serveur lors de la suppression" }));
  }
}
