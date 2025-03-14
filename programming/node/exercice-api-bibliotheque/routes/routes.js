import {
  createAuteurController,
  deleteAuteurController,
  getAllAuteurController,
  updateAuteurController,
} from "../controllers/auteurController.js";
import {
  createEmpruntController,
  deleteEmpruntController,
  getAllEmpruntController,
  updateEmpruntController,
} from "../controllers/empruntController.js";
import {
  createLivreController,
  deleteLivreController,
  getAllLivreController,
  getLivreAuteurByIdController,
  getLivreCategorieController,
  getPaginatedLivreController,
  updateLivreController,
} from "../controllers/livreController.js";
import { getAuteurIdRepository } from "../repositories/auteurRepository.js";
import { getEmpruntIdRepository } from "../repositories/empruntRepository.js";
import { logger } from "../utils/logger.js";

export async function handleRoutes(req, res) {
  const url = req.url;
  const method = req.method;

  if (url.startsWith("/api/livre") && method === "GET") {
    const urlObj = new URL(req.url, `http://${req.headers.host}`);
    const idAuteur = parseInt(urlObj.searchParams.get("auteur"));
    const idCategoriesLivre = parseInt(urlObj.searchParams.get("categories"));
    if (idAuteur) {
      console.log("Quest-ce qu'il y a dans nameAuteur: ", idAuteur);
      return await getLivreAuteurByIdController(res, idAuteur);
    } else if (idCategoriesLivre) {
      console.log(
        "Quest-ce qu'il y a dans categoriesLivre: ",
        idCategoriesLivre
      );
      return await getLivreCategorieController(res, idCategoriesLivre);
    }
    await getAllLivreController(res);
  } else if (url.startsWith("/api/livre") && method === "GET") {
    const urlObj = new URL(req.url, `http://${req.headers.host}`);
    const limit = parseInt(urlObj.searchParams.get("limit"), 10) || 10;
    console.log("Param de limit : ", limit);
    const offset = parseInt(urlObj.searchParams.get("offset"), 10) || 0;
    await getPaginatedLivreController(res, limit, offset);
  } else if (url === "/api/livre" && method === "POST") {
    await createLivreController(req, res);
  } else if (url.match(/^\/api\/livre\/(\d+)$/) && method === "PUT") {
    const match = url.match(/^\/api\/livre\/(\d+)$/);
    if (match) {
      const id = match[1];
      await updateLivreController(req, res, id);
    }
  } else if (url.match(/^\/api\/livre\/(\d+)$/) && method === "DELETE") {
    const match = url.match(/^\/api\/livre\/(\d+)$/);
    if (match) {
      const id = match[1];
      await deleteLivreController(res, id);
    }
  } else if (url === "/api/auteurs" && method === "GET") {
    await getAllAuteurController(res);
  } else if (url.match(/^\/api\/auteurs\/(\d+)$/) && method === "GET") {
    const match = url.match(/^\/api\/auteurs\/(\d+)$/);
    if (match) {
      const id = match[1];
      console.log(id);

      try {
        const auteur = await getAuteurIdRepository(id);
        console.log(typeof auteur);
        console.log(auteur);

        if (!auteur) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Auteur non trouvé" }));
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(auteur));
      } catch (error) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Error serv 500" }));
      }
    }
  } else if (url === "/api/auteurs" && method === "POST") {
    await createAuteurController(req, res);
  } else if (url.match(/^\/api\/auteurs\/(\d+)$/) && method === "PUT") {
    const match = url.match(/^\/api\/auteurs\/(\d+)$/);
    if (match) {
      const id = match[1];
      await updateAuteurController(req, res, id);
    }
  } else if (url.match(/^\/api\/auteurs\/(\d+)$/) && method === "DELETE") {
    const match = url.match(/^\/api\/auteurs\/(\d+)$/);
    if (match) {
      const id = match[1];
      await deleteAuteurController(res, id);
    }
  } else if (url === "/api/emprunts" && method === "GET") {
    await getAllEmpruntController(res);
  } else if (url.match(/^\/api\/emprunts\/(\d+)$/) && method === "GET") {
    const match = url.match(/^\/api\/emprunts\/(\d+)$/);
    if (match) {
      const id = match[1];
      console.log(id);

      try {
        const emprunt = await getEmpruntIdRepository(id);
        console.log(typeof emprunt);
        console.log(emprunt);

        if (!emprunt) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Emprunt non trouvé" }));
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(emprunt));
      } catch (error) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Error serv 500" }));
      }
    }
  } else if (url === "/api/emprunts" && method === "POST") {
    await createEmpruntController(req, res);
  } else if (url.match(/^\/api\/emprunts\/(\d+)$/) && method === "PUT") {
    const match = url.match(/^\/api\/emprunts\/(\d+)$/);
    if (match) {
      const id = match[1];
      await updateEmpruntController(req, res, id);
    }
  } else if (url.match(/^\/api\/emprunts\/(\d+)$/) && method === "DELETE") {
    const match = url.match(/^\/api\/emprunts\/(\d+)$/);
    if (match) {
      const id = match[1];
      await deleteEmpruntController(res, id);
    } else {
      logger.warn(`Route non trouvée : ${method} ${url}`);
      res.writeHead(404, { "Content-Type ": "application/json" });
      res.end(JSON.stringify({ success: false, error: "Route non trouvée" }));
    }
  }
}
