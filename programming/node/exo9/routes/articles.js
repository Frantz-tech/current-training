import fs from "fs/promises";
const ARTICLES_FILE = "./data/articles.json";

export async function handleRequest(req, res) {
  if (req.method === "GET" && req.url.startsWith("/articles")) {
    try {
      const allArticles = await getAllArticles();
      res.writeHead(200, { "content-type": "application/json" });
      return res.end(JSON.stringify(allArticles));
    } catch (error) {
      res.writeHead(500, { "content-  type": "application/json" });
      res.end(
        JSON.stringify({ error: "Erreur lors de la lecture des articles" })
      );
    }
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ error: "Route not found" }));
  }
}

async function getAllArticles() {
  try {
    const data = await fs.readFile(ARTICLES_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    throw new Error("Impossible de lire le fichier 'article.json' ");
  }
}

async function getArticleById(req, res, id) {}

async function createArticle(req, res) {}

async function updateArticle(req, res, id) {}

async function deleteArticle(req, res, id) {}

export {
  createArticle,
  deleteArticle,
  getAllArticles,
  getArticleById,
  updateArticle,
};
