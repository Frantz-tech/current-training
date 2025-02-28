import {
  createArticle,
  deleteArticle,
  getAllArticles,
  updateArticle,
} from "../repositories/articleRepository.js";
import { validateArticle } from "../utils/validator/articleValidator.js";

export async function ServiceGetAllArticles(db) {
  // Lecture des données du JSON
  const article = await getAllArticles(db);
  return article;
}

export async function ServiceCreateArticles(db, body) {
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

export async function ServiceDeleteArticles(db, id) {
  try {
    const deleteArt = await deleteArticle(db, id);
    return deleteArt;
  } catch (error) {
    console.log(`Impossible de supprimer l'article`);
  }
}
