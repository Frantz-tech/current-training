import {
  createArticle,
  getAllArticles,
} from "../repositories/articleRepository.js";

export function validateArticle(article) {
  const errors = [];
  if (!article.title || article.title.length < 3) {
    errors.push("Title must be at least 3 characters");
  }
  if (!article.content || article.content.length < 10) {
    errors.push("Content must be at least 10 characters");
  }
  return errors;
}

export async function ServiceGetAllArticles(db) {
  // Lecture des données du JSON
  const article = await getAllArticles(db);
  return article;
}

export async function ServiceCreateArticle(db, body) {
  // Method POST
  try {
    const errorArticle = validateArticle(body);
    if (errorArticle.length > 0) {
      return errorArticle;
    }

    const newArticle = await createArticle(db, body);
    return newArticle;
  } catch (error) {
    throw new Error(`Impossible de créer l'article : ${error.message}`);
  }
}

export async function ServiceUpdateArticles(req, res, id) {
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
      // Vérifier si user_id est un nombre
      const userId = parseInt(newArticle.user_id, 10);
      if (isNaN(userId)) {
        throw new Error(`UserId n'est pas un nombre`);
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

export async function deleteArticles(res, id) {
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
