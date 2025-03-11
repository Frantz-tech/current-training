import {
  createLivreService,
  deleteLivreService,
  getAllLivreService,
  updateLivreService,
} from "../services/livreService.js";
import { parseRequestBody } from "../utils/httpHelper.js";

export async function handleLivre(req, res) {
  const method = req.method;
  const url = req.url;
  try {
    if (method === "GET") {
      const allLivres = await getAllLivreService();
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(allLivres));
    } else if (method === "POST") {
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
    } else if (method === "PUT") {
      const match = url.match(/^\/livre\/(\d+)$/); // Correspond à /livre/{id}
      if (match) {
        const id = match[1]; // Récupère l'ID de l'URL
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

          if (succesUpdate) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Livre mis a jour" }));
          } else {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "Controller : Livre non trouvé" }));
          }
        } catch (error) {
          console.error("Erreur lors de la modification du livre", error);
          res.writeHead(404, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({ error: "Livre non trouvé pour la modification" })
          );
        }
      }
    } else if (method === "DELETE") {
      const match = url.match(/^\/livre\/(\d+)$/); // Correspond à /livre/{id}

      if (match) {
        const id = match[1]; // Récupère l'ID de l'URL

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
          res.end(
            JSON.stringify({ error: "Erreur serveur lors de la suppression" })
          );
        }
      } else {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            error: "URL invalide. Format attendu : /livre/{id}",
          })
        );
      }
    }
  } catch (error) {
    console.error("Erreur serveur", error);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Erreur Serveur" }));
  }
}
