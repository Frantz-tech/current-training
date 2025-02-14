const http = require("http"); // Module HTTP de Node.js pour créer le serveur
const fs = require("fs"); // Module FS pour lire les fichiers
const path = require("path"); // Module Path pour manipuler les chemins de fichiers

// Définition des routes et des fichiers à servir
// Création du serveur API JSON
const server = http.createServer((req, res) => {
  // Vérifie si la requête est une requête GET et que l'URL demandée est "/api/data"
  if (req.method === "GET" && req.url === "/api/data") {
    // Lecture du fichier database.json en utilisant un chemin absolu
    fs.readFile(
      path.join(__dirname, "..", "data", "database.json"),
      "utf8",
      (err, data) => {
        // Si une erreur se produit lors de la lecture du fichier
        if (err) {
          console.log("Erreur lors de la lecture du fichier JSON : " + err); // Affichage de l'erreur dans la console

          // Renvoie une réponse HTTP avec un code 500 (Erreur interne du serveur)
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Erreur interne du serveur");
          return;
        }

        // Si la lecture du fichier réussit, envoie une réponse HTTP 200 avec le JSON
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(data); // Envoie le contenu du fichier JSON comme réponse

        // Affiche les données JSON dans la console (utile pour le débogage)
        console.log(data);
      }
    );
  } else {
    // Si l'URL demandée ne correspond pas à "/api/data", renvoie une erreur 404 (Non trouvé)
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Erreur de route");
  }
});
// Démarre le serveur sur le port 3000
const PORT_API = 4000;
server.listen(PORT_API, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT_API}`);
});
