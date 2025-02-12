const http = require("http"); // Importation du module qui permet de créer un serveur HTTP
const fs = require("fs");
const { json } = require("stream/consumers");

// fonction call back en paramètre
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  // 200 : le code de statut HTTP (200 = succès).
  // "Content-Type": "text/plain" : le type de contenu de la réponse (text/plain = texte brut).
  res.end("Hello, World!\n");
});

fs.readFile("folder.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    try {
      const json = JSON.parse(data);
      console.log("Données du fichier Json", json);
    } catch (error) {
      console.log("Erreur de parsing JSON", error);
    }
    res.end(JSON.parse(data));
  }
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
