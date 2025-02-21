import fs from "fs/promises";
const ARTICLES_FILE = "./data/articles.json";

export async function handleRequest(req, res) {
  // Methods
  if (req.method === "GET" && req.url.startsWith("/articles")) {
    try {
      const allArticles = await getAllArticles();
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(allArticles));
    } catch (error) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({ error: "Erreur lors de la lecture des articles" })
      );
    }
  } else if (req.method === "POST" && req.url.startsWith("/articles")) {
    try {
      const article = await createArticle(req, res);
      res.writeHead(201, { "Content-Type": "application/json" });
      console.log("push réussit avec succès");
      return res.end(JSON.stringify(article));
    } catch (error) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({ error: "Erreur lors de la l'envoie des articles" })
      );
    }
  } else if (req.method === "PUT" && req.url.startsWith("/articles")) {
    try {
      const changeArticle = await updateArticle(req, res);
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(changeArticle));
    } catch (error) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({ error: "Erreur lors de la modification des articles" })
      );
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Route not found" }));
  }
}

async function writeArticles(articles) {
  // Ecrire dans le fichier JSON
  await fs.writeFile(ARTICLES_FILE, JSON.stringify(articles, null, 2));
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

async function getArticleById(id) {
  let articles = await getAllArticles();
  return articles.find((article) => Number(article.id) === id) || null;
}

async function createArticle(req, res) {
  // Method POST

  let body = "";
  req.on("data", (chunk) => (body += chunk));

  req.on("end", async () => {
    try {
      const article = JSON.parse(body);
      const data = await getAllArticles();
      article.id = Date.now();
      console.log("articles", article.id);

      data.articles.push(article);
      console.log("nouvelle données ", article);
      console.log("Data apres l'ajout de la nouvelle donnée ", data);

      await writeArticles(data);
    } catch (error) {
      res.writeHead(400, { "Content-Type": "application/json" });
      return res.end(
        JSON.stringify({ error: "Impossible d'envoyer le nouvel article" })
      );
    }
  });
}

async function updateArticle(req, res) {
  // Method PUT
  const idArt = parseInt(req.url.split("/").pop(), 10);
  if (isNaN(idArt)) {
    res.writeHead(400, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ error: "Id Invalide" }));
  }

  if (idArticle === -1) {
    res.writeHead(404, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ error: "Articlé introuvable" }));
  }
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", async () => {
    try {
      const updateData = JSON.parse(body);
      let articles = await getAllArticles();
      const idArticle = articles.findIndex((article) => article.id === idArt);
      console.log("voici le contenu modifié ", updateData.content);
      console.log("voici le contenu 2 modifié", updateData.title);
      if (!updateData.title || !updateData.content) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify({ error: "Il manque le content ou le title" })
        );
      }
      articles[idArticle] = {
        ...articles[idArticle],
        ...updateData,
      };
      await writeArticles(articles);
      console.log("Fichier JSON apres avoir été modifié : ", articles);
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(
        JSON.stringify({
          message: `Article ${idArt} modifié avec succès`,
        })
      );
    } catch (error) {
      console.error("Erreur lors de la modification :", error);
      res.writeHead(400, { "Content-Type": "application/json" });
      return res.end(
        JSON.stringify({ error: "Impossible de modifier le fichier" })
      );
    }
  });
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
