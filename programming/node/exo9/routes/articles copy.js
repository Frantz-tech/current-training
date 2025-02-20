import fs from "fs/promises";
const ARTICLES_FILE = "./data/articles.json";

export async function handleRequest(req, res) {
  // Method GET
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

async function writeArticles(articles) {
  // Ecrire dans le fichier JSON
  await fs.writeFile("articles.json", JSON.stringify(articles, null, 2));
}
async function getAllArticles() {
  // Lecture des données du JSON
  try {
    const data = await fs.readFile(ARTICLES_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    throw new Error("Impossible de lire le fichier 'article.json' ");
  }
}

async function getArticleById(req, id) {
  // Récupération de l'ID
  // if (req.url.startsWith("/articles/id"))
  const id = parsentInt(req.url.split("/").pop(), 10);
  console.log("Id que je veux récuperer : ", id);

  let articlesId = await getAllArticles();
  console.log(articlesId);

  const indexId = articlesId.findIndex((article) => article.id === id);
  console.log(indexId);

  if (indexId === -1) {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ error: " Id non trouvé" }));
  }
}

async function createArticle(req, res) {
  // Method POST
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", async () => {
    try {
      const article = JSON.parse(body);
      const articles = await getAllArticles();
      article.id = Date.now();
      console.log("articles", article.id);

      articles.push(article);
      console.log(("Object articles :", articles));

      await writeArticles(articles);
    } catch (error) {
      res.writeHead(400);
      res.end(JSON.stringify({ error: "Impossible de lire les articles" }));
    }
  });
}

async function updateArticle(req, res, id) {
  // Method PUT
}

async function deleteArticle(req, res, id) {
  // Method DELETE
}

export {
  createArticle,
  deleteArticle,
  getAllArticles,
  getArticleById,
  updateArticle,
};
