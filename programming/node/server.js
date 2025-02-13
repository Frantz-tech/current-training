const http = require("http"); // Importation du module qui permet de créer un serveur HTTP
const fs = require("fs");
const { json } = require("stream/consumers");

// fonction call back en paramètre
const server = http.createServer((req, res) => {
  // 200 : le code de statut HTTP (200 = succès).
  // "Content-Type": "text/plain" : le type de contenu de la réponse (text/plain = texte brut).

  fs.readFile("folder.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Erreur interne du serveur");
    } else {
      try {
        const jsonData = JSON.parse(data);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(jsonData));
      } catch (error) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error");
        console.log("Erreur de parsing JSON", error);
      }
      res.end(JSON.parse(data));
    }
  });
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
