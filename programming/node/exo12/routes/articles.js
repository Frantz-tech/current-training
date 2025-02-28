import {
  createArticle,
  getallArticle,
} from "../repositories/articleRepository.js";
import { errorServer } from "../utils/errors/errorHandler.js";
import { errorNotFound } from "../utils/errors/notFoundError.js";

export async function handleArticlesRequest(req, res) {
  try {
    console.log("hello");
    if (req.method === "GET") {
      try {
        const articles = await getallArticle(db);
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(articles));
      } catch {
        return errorNotFound(res);
      }
    } else if (req.method === "POST") {
      try {
        console.log("je suis en post ", typeof articles);
        const articles = await createArticle(db);
        res.writeHead(200, { "Content-Type": "application/json" });

        return res.end(JSON.stringify(articles));
      } catch {
        return errorNotFound(res);
      }
    } else if (req.method === "PUT") {
    } else if (req.method === "DELETE") {
    } else {
    }
  } catch (error) {
    return errorServer(res);
  }
}
