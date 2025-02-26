import { openDb } from "../utils/db.js";
import { validateArticle } from "../utils/validator.js";

export async function handleRequest(req, res) {
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
    } else if (req.method === "GET" && req.url.startsWith("/articles")) {
      // Method GET avec pagination
      if (!req.headers.host) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify({ error: "Host manquant dans les headers" })
        );
      }
      const urlObj = new URL(req.url, `http://${req.headers.host}`);
      const limit = parseInt(urlObj.searchParams.get("limit"), 10) || 10;
      const offset = parseInt(urlObj.searchParams.get("offset"), 10) || 0;

      console.log("Get avec Pagination | limit :", limit, " | offset:", offset);

      try {
        const { articles, total } = await getPaginatedArticles(
          db,
          limit,
          offset
        );
        console.log("Je récupère les paginated articles :| ", {
          articles,
          total,
        });

        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ total, articles }));
      } catch (error) {
        res.writeHead(500, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify({
            error: " Erreur lors de la récupération des articles paginés",
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

async function getAllArticles(db) {
  // Lecture des données du JSON
  try {
    return await db.all("SELECT * FROM articles");
  } catch (error) {
    throw new Error(
      `Impossible de récupérer tous les fichiers", ${error.message}`
    );
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

async function updateArticles(req, res, id) {
  // Method PUT
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

async function deleteArticles(res, id) {
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

async function getPaginatedArticles(db, limit, offset) {
  try {
    // récupère les articles avec pagination
    const articles = await db.all(
      // "SELECT * FROM articles ORDER BY id DESC LIMIT ? OFFSET ?", --> Autre option avec descendant
      "SELECT * FROM articles ORDER BY id ASC LIMIT ? OFFSET ?",
      [limit, offset]
    );
    console.log(("articles récup pour la pagination : | ", articles));

    // récupere le nombre total d'articles
    const totalRow = await db.get("SELECT COUNT (*) as total FROM articles");
    const total = totalRow.total;
    console.log("Nombre total d'articles :|", total);

    return { articles, total };
  } catch (error) {
    throw new Error(
      `Erreur lors de la récupération des articles paginés: ${error.message}`
    );
  }
}
