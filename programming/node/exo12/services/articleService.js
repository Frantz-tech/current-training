import {
  createArticle,
  getAllArticles,
  updateArticle,
} from "../repositories/articleRepository.js";
import { validateArticle } from "../utils/validator/emailValidator.js";

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

export async function ServiceUpdateArticles(db, body, id) {
  // Method PUT
  try {
    const errorArticle = validateArticle(body);
    if (errorArticle.length > 0) {
      return errorArticle;
    }
    const updateArt = await updateArticle(db, body, id);
    return updateArt;
  } catch (error) {
    console.log(`Impossible de modifier l'article : ${error.message}`);
  }
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
