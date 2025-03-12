import {
  createLivreService,
  deleteLivreService,
  getAllLivreService,
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

export async function getPaginatedLivre(db, limit, offset) {
  try {
    const livres = await db.all(
      "SELECT * FROM LIVRE ORDER BY livre_id ASC LIMIT ? OFFSET ?",
      [limit, offset]
    );
    console.log("articles récup pour la pagination : | ", livres);

    const totalRow = await db.get("SELECT COUNT (*) as total FROM LIVRE");
    const total = totalRow.total;
    return { livres, total };
  } catch (error) {
    throw new Error(`Erreur lors de la pagination : | ${error.message}`);
  }
}
