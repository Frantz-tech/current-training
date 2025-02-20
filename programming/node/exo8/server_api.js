const { error } = require("console");
const http = require("http");
const fs = require("fs").promises;

// Lecture du fichier JSON
async function readArticles() {
  const data = await fs.readFile("articles.json", "utf8");
  return JSON.parse(data);
}

// Écriture dans le fichier JSON
async function writeArticles(articles) {
  await fs.writeFile("articles.json", JSON.stringify(articles, null, 2));
}

const server = http.createServer(async (req, res) => {
  // Headers CORS
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Gestion du preflight CORS
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // Logging des requêtes
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);

  // Routes API
  if (req.url === "/articles" && req.method === "GET") {
    const articles = await readArticles();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(articles));
  } else if (req.url === "/articles" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", async () => {
      try {
        const article = JSON.parse(body);
        console.log("article", article);
        const articles = await readArticles();
        article.id = Date.now(); // Simple ID unique
        console.log("article", article.id);
        articles.push(article);
        console.log("objet articles : ", articles);
        await writeArticles(articles);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(article));
      } catch (error) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: "Invalid data" }));
      }
    });
  } else if (req.url.match(/\/articles\/\d+$/) && req.method === "DELETE") {
    //Code
    try {
      const id = parseInt(req.url.split("/").pop(), 10);
      console.log("Id a supprimé :|", id);

      let articles = await readArticles();
      console.log("Articles a supprimer :", articles[2]);

      const indexId = articles.findIndex((articles) => articles.id === id);
      if (indexId === -1) {
        res.writeHead(404, { "content-type": "application/json" });
        res.end(JSON.stringify({ error: "Article non trouvé" }));
      }
      articles.splice(indexId, 1);

      await writeArticles(articles);
      console.log("Articles après suppression :", articles);

      // 6️⃣ Envoyer une réponse de succès
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(
        JSON.stringify({ message: `Article ${id} supprimé avec succès` })
      );
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
      res.writeHead(500, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ error: "Erreur serveur" }));
    }
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Not found" }));
  }
});

server.listen(4000, () => {
  console.log("API Server running on port http://localhost:4000");
});
