import {
  createEmpruntService,
  deleteEmpruntService,
  getAllEmpruntService,
  updateEmpruntService,
} from "../services/empruntService.js";
import { parseRequestBody } from "../utils/httpHelper.js";

export async function getAllEmpruntController(res) {
  const result = await getAllEmpruntService();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(result));
}

export async function createEmpruntController(req, res) {
  try {
    const newEmprunt = await parseRequestBody(req);
    const createdEmprunt = await createEmpruntService(newEmprunt);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(createdEmprunt));
  } catch (error) {
    console.error("Erreur lors de la création de l'emprunt", error);
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Données Invalides" }));
  }
}

export async function updateEmpruntController(req, res, id) {
  if (!id) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "ID manquant" }));
    return;
  }
  try {
    const newEmpruntUpdate = await parseRequestBody(req);
    console.log("données modifiée dans postman", newEmpruntUpdate);
    const succesUpdate = await updateEmpruntService(id, newEmpruntUpdate);
    console.log("J'ai quoi dans succesUpdate ", succesUpdate);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Emprunt mis a jour" }));
  } catch (error) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Emprunt non trouvé" }));
  }
}
export async function deleteEmpruntController(res, id) {
  if (!id) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "ID manquant" }));
    return;
  }

  try {
    const succesDelete = await deleteEmpruntService(id);
    if (succesDelete) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Emprunt supprimé avec succès" }));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({ error: "Emprunt non trouvé pour la suppression" })
      );
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Erreur serveur lors de la suppression" }));
  }
}
