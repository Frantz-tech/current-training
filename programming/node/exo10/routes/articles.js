import fs from "fs/promises";
import { openDb } from "../utils/db.js";

export async function handleRequest(req, res) {
  // Methods
  // mettre la fonction pour récup l'id
  console.log("", req.method);
  console.log(req.url);
  const db = await openDb();
  const idMatch = req.url.match(/^\/articles\/(\d+)$/);
  const id = idMatch ? parseInt(idMatch[1], 10) : null;
  try {
    if (req.method === "GET" && req.url === "/articles") {
      // Method GET
      console.log("Je passe dans la method 'GET' ");
      try {
        const article = await getAllArticles(db);
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(article));
      } catch {
        res.writeHead(500, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify({
            error: "Erreur lors de la lecture de getAllArticles",
          })
        );
      }
    } else if (req.method === "GET" && id !== null) {
      // Method GET avec ID

      const articles = await getAllArticles();
      const article = articles.find((a) => a.id === id);
      if (!article) {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ error: "Article non trouvé" }));
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(article));
    } else if (req.method === "POST" && req.url === "/articles") {
      //Method POST
      await createArticle(req, res);
    } else if (req.method === "PUT" && id !== null) {
      //Method PUT
      await updateArticles(req, res, id);
    } else if (req.method === "DELETE" && id !== null) {
      //Method DELETE
      await deleteArticles(req, res, id);
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

async function writeArticles(articles) {
  // Ecriture des données du JSON
  await fs.writeFile(database, JSON.stringify(articles, null, 2));
}

async function getAllArticles(db) {
  // Lecture des données du JSON
  try {
    return await db.all("SELECT * FROM articles");
  } catch (error) {
    throw new Error("Impossible de lire le fichier 'article.json' ");
  }
}

async function createArticle(req, res) {
  // Method POST
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", async () => {
    try {
      const newArticle = JSON.parse(body);
      const db = await openDb();
      const result = await db.run(
        "INSERT INTO articles (title, content) VALUES (?, ?)",
        [newArticle.title, newArticle.content]
      );
      newArticle.id = result.lastID;
      console.log("Method POST | données de l'ajout  | : ", newArticle);

      res.writeHead(201, { "Content-Type": "application/json" });
      return res.end(
        JSON.stringify({
          message: `Nouvel article envoyé avec succès,`,
          id: newArticle.id,
        })
      );
    } catch (error) {
      res.writeHead(400, { "Content-Type": "application/json" });
      return res.end(
        JSON.stringify({ error: "impossible d'envoyer le nouvel article" })
      );
    }
  });
}

async function updateArticles(req, res) {
  // Method PUT
  let body = "";

  req.on("data", (chunk) => (body += chunk));
  req.on("end"),
    async () => {
      try {
        const updateArticle = JSON.parse(body);
        const newdataArticle = await getAllArticles();
        console.log("Données de la DB avant l'update", updateArticle);
      } catch (error) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify, { error: "Impossible de modifier l'article" });
      }
    };
}
