import { validateArticle } from "../services/articleService.js";
import { errorNotFound } from "../utils/errors/notFoundError.js";

export async function getAllArticles(db) {
  // Lecture des données de la database
  try {
    return await db.all("SELECT * FROM articles");
  } catch (error) {
    throw new Error(
      `Impossible de récupérer tous les fichiers", ${error.message}`
    );
  }
}

export async function getArticle(req, res, db) {
  if (req.method === "GET" && req.url === "/articles")
    try {
      const articles = await getAllArticles(db);
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(articles));
    } catch (error) {
      res.writeHead(500, { "Content-Type": "application/json" });
      return res.end(
        JSON.stringify({
          error: "Erreur lors de la lecture de getAllArticles",
        })
      );
    }
  // else if (req.method === "GET" && id !== null) {
  //   const articles = await getAllArticles(db);
  //   const article = articles.find((a) => a.id === id);
  //   if (!article) {
  //     await errorNotFound(res);
  //   }
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   return res.end(JSON.stringify(article));
  // }
}

export async function createArticle(req, res) {
  // Method POST
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", async () => {
    try {
      const newArticle = JSON.parse(body);
      const db = await openDb();
      // Vérifie que le titre fait au moins 3 characters et que le content fait au moins 10 charaters

      const errorArticle = validateArticle(newArticle);

      if (Array.isArray(errorArticle) && errorArticle.length > 0) {
        console.log(" Obligatoire pour envoyer les données", errorArticle);
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify({ error: "Les données sont incorrectes " })
        );
      }
      // Vérifier si user_id est un nombre

      const userId = parseInt(newArticle.user_id, 10);
      if (isNaN(userId)) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify({ error: "User ID n'est pas un nombre " })
        );
      }

      const userExist = await db.get("SELECT * FROM users WHERE id = ? ", [
        newArticle.user_id,
      ]);
      if (!userExist) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify({
            error: "L'user avec cet Id n'existe pas",
          })
        );
      }
      const result = await db.run(
        "INSERT INTO articles (title, content, user_id) VALUES (?, ?, ?)",
        [newArticle.title, newArticle.content, newArticle.user_id]
      );
      newArticle.id = result.lastID;
      console.log("Method POST | données de l'ajout  | : ", newArticle);

      res.writeHead(201, { "Content-Type": "application/json" });
      return res.end(
        JSON.stringify({
          message: `Nouvel article envoyé avec succès`,
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

export async function updateArticle(req, res) {
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", async () => {
    try {
      const newArticle = JSON.parse(body);
      const db = await openDb();
      const result = await db.run(
        "UPDATE articles SET title = ?, content = ? WHERE id = ?",
        [newArticle.title, newArticle.content, newArticle.id]
      );
      const errorArticle = validateArticle(newArticle);

      if (Array.isArray(errorArticle) && errorArticle.length > 0) {
        console.log(" Obligatoire pour envoyer les données", errorArticle);
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify({ error: "Les données sont incorrectes " })
        );
      }

      if (result.changes === 0) {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ error: "Article non trouvé " }));
      }
      console.log("Données de la DB après l'update", newArticle);
      res.writeHead(202, { "Content-Type": "application/json" });
      return res.end(
        JSON.stringify({
          message: `Article modifié avec succès,`,
          id: id,
        })
      );
    } catch (error) {
      res.writeHead(400, { "Content-Type": "application/json" });
      return res.end(
        JSON.stringify({ error: "Impossible de modifier l'article" })
      );
    }
  });
}

export async function deleteArticle(req, res) {
  try {
    const db = await openDb();
    // const idMatch = req.url.match(/^\/articles\/(\d+)$/);
    // const id = idMatch ? parseInt(idMatch[1], 10) : null;
    if (isNaN(id) || !id) {
      res.writeHead(400, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "ID de l'article requis" }));
    }
    const deleteArt = await db.run("DELETE FROM articles WHERE id = ?", [id]);

    if (deleteArt.changes === 0) {
      res.writeHead(404, { "Content-Type": "application/json" });
      return res.end(
        JSON.stringify({ message: "Articlé non trouvé pour la suppression" })
      );
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(
      JSON.stringify({
        message: `Article supprimé avec succès`,
        id,
      })
    );
  } catch (error) {
    console.error(error);
    res.writeHead(500, { "Content-Type": "application/json" });
    return res.end(
      JSON.stringify({ message: "Impossible de supprimer l'article" })
    );
  }
}
