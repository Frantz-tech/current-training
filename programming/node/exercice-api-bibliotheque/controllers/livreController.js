import {
  createLivreService,
  deleteLivreService,
  getAllLivreService,
  paginatedLivreService,
  updateLivreService,
} from "../services/livreService.js";
import { parseRequestBody } from "../utils/httpHelper.js";

export async function getAllLivreController(res) {
  const result = await getAllLivreService();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(result));
}

export async function createLivreController(req, res) {
  try {
    const newLivre = await parseRequestBody(req);
    const createdLivre = await createLivreService(newLivre);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(createdLivre));
  } catch (error) {
    console.error("Erreur lors de la création du livre", error);
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Données Invalides" }));
  }
}

export async function updateLivreController(req, res, id) {
  if (!id) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "ID manquant" }));
    return;
  }
  try {
    const newLivreUpdate = await parseRequestBody(req);
    console.log("données modifiée dans postman", newLivreUpdate);
    const succesUpdate = await updateLivreService(id, newLivreUpdate);
    console.log("J'ai quoi dans succesUpdate ", succesUpdate);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Livre mis a jour" }));
  } catch (error) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Livre non trouvé" }));
  }
}
export async function deleteLivreController(res, id) {
  if (!id) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "ID manquant" }));
    return;
  }

  try {
    const succesDelete = await deleteLivreService(id);
    if (succesDelete) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Livre supprimé avec succès" }));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({ error: "Livre non trouvé pour la suppression" })
      );
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Erreur serveur lors de la suppression" }));
  }
}

export async function getPaginatedLivreController(res, limit, offset) {
  try {
    const livres = await paginatedLivreService(limit, offset);
    console.log(
      "Get all livres avec pagination |limit, :",
      limit,
      "| offset :",
      offset
    );

    console.log("Voici les livres paginées : | ", livres);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(livres));
    console.log(typeof livres);
  } catch (error) {
    console.error("Erreur lors de la recup des livres", error);

    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({ error: "Erreur lors de la récupération des livres." })
    );
  }
}
