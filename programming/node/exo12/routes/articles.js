import {
  ServiceCreateArticle,
  ServiceGetAllArticles,
  ServiceUpdateArticles,
} from "../services/articleService.js";
import { openDb } from "../utils/db.js";
import { errorServer } from "../utils/errors/errorHandler.js";

export async function handleArticle(req, res) {
  // Methods
  // mettre la fonction pour récup l'id
  console.log("Methode utilisée | : ", req.method);
  console.log("Url utilisée | :", req.url);
  const db = await openDb();
  const idMatch = req.url.match(/^\/articles\/(\d+)$/);
  const id = idMatch ? parseInt(idMatch[1], 10) : null;
  try {
    if (req.method === "GET" && req.url === "/articles") {
      try {
        const articles = await ServiceGetAllArticles(db);
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(articles));
      } catch (error) {
        return errorServer();
      }
    } else if (req.method === "GET" && idMatch) {
      // Method GET avec ID
      console.log("Method utilisée | : ", req.method, "avec ID");
      const articles = await ServiceGetAllArticles(db);
      console.log(typeof articles);

      const article = articles.find((a) => a.id === id);
      if (!article) {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ error: "Article non trouvé" }));
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(article));
    } else if (req.method === "POST" && req.url === "/articles") {
      //Method POST
      let body = "";
      req.on("data", (chunk) => (body += chunk));
      req.on("end", async () => {
        try {
          const parseArticle = JSON.parse(body);
          const newArticle = await ServiceCreateArticle(db, parseArticle);
          res.writeHead(201, { "Content-Type": "application/json" });
          res.end(JSON.stringify(newArticle));
        } catch (error) {
          throw new Error(
            `Impossible de créer un nouvel article, ${error.message}`
          );
        }
      });
      console.log(typeof body);
    } else if (req.method === "PUT" && id !== null) {
      //Method PUT
      let body = "";
      req.on("data", (chunk) => (body += chunk));
      req.on("end", async () => {
        try {
          const parseArticle = JSON.parse(body);
          const updateArticlerticle = await ServiceUpdateArticles(
            db,
            parseArticle,
            id
          );
          res.writeHead(202, { "Content-Type": "application/json" });
          return res.end(JSON.stringify(updateArticlerticle));
        } catch (error) {
          throw new Error(`${error.message}`);
        }
      });
      console.log(typeof body);
    } else if (req.method === "DELETE" && id !== null) {
      //Method DELETE
      await deleteArticles(res, id);
    } else {
      // Route inconnue
      res.writeHead(404, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ error: "Route introuvable" }));
    }
  } catch (error) {
    console.error("Erreur serveur :", error);
    res.writeHead(500, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ error: "Erreur serveur" }));
  }
}
