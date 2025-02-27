import { getArticle } from "../repositories/articleRepository.js";
import { succesRequest } from "../utils/errors/succesReq.js";

export async function handleArticlesRequest(req, res) {
  try {
    if (req.method === "GET") {
      console.log("je suis dans le handle");

      await getArticle(req, res, db);
      await succesRequest(message);
    }
    // else if (req.method === "POST") {
    // } else if (req.method === "PUT") {
    // } else if (req.method === "DELETE") {
    // } else {
    // }
  } catch (error) {
    throw new Error();
  }
}
