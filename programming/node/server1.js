// Exercice 4 : Créer un serveur Node.js qui affiche un fichier HTML
// 💡 Objectif : Charger dynamiquement un fichier index.html HTML et l'afficher dans le navigateur.

// ✅ Bonus :

// Créer plusieurs pages (index.html, about.html, contact.html) et gérer la navigation

const http = require("http");
const fs = require("fs");

const routes = {
  "/about": "about.html",
  "/contact": "contact.html",
  "/shop": "shop.html",
  "/": "index.html",
};

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    const file = routes[req.url];

    if (!file) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Page non trouvée");
      return;
    }

    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Erreur interne du serveur");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
