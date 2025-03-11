import {
  createAuteurController,
  deleteAuteurController,
  getAllAuteurController,
  updateAuteurController,
} from "../controllers/auteurController.js";
import {
  createLivreController,
  deleteLivreController,
  getAllLivreController,
  updateLivreController,
} from "../controllers/livreController.js";
import { logger } from "../utils/logger.js";

export async function handleRoutes(req, res) {
  const url = req.url;
  const method = req.method;
  if (url === "/livre" && method === "GET") {
    await getAllLivreController(res);
  } else if (url === "/livre" && method === "POST") {
    await createLivreController(req, res);
  } else if (url.match(/^\/livre\/(\d+)$/) && method === "PUT") {
    const match = url.match(/^\/livre\/(\d+)$/);
    if (match) {
      const id = match[1];
      await updateLivreController(req, res, id);
    }
  } else if (url.match(/^\/livre\/(\d+)$/) && method === "DELETE") {
    const match = url.match(/^\/livre\/(\d+)$/);
    if (match) {
      const id = match[1];
      await deleteLivreController(res, id);
    }
  } else if (url === "/api/auteurs" && method === "GET") {
    await getAllAuteurController(res);
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
  } else {
    logger.warn(`Route non trouvée : ${method} ${url}`);
    res.writeHead(404, { "Content-Type ": "application/json" });
    res.end(JSON.stringify({ success: false, error: "Route non trouvée" }));
  }
}
