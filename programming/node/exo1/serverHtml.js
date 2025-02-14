// Exercice 5 : Créer un serveur Node.js qui sert plusieurs fichiers statiques (HTML, CSS, JS)
// 💡 Objectif : Rendre accessibles plusieurs fichiers statiques (index.html, style.css, script.js).
// ✅ Bonus :
// Ajouter la gestion des images (/images/logo.png)
// Compresser les fichiers (gzip) pour optimiser les performances

const http = require("http"); // Module HTTP de Node.js pour créer le serveur
const fs = require("fs"); // Module FS pour lire les fichiers
const path = require("path"); // Module Path pour manipuler les chemins de fichiers
const zlib = require("zlib"); // Module Zlib pour compresser les fichiers en gzip

// Définition des routes et des fichiers à servir
const route = {
  "/": { path: "index.html", contentType: "text/html" }, // Fichier HTML principal
  "/style.css": { path: "style.css", contentType: "text/css" }, // Fichier CSS
  "/script.js": { path: "script.js", contentType: "application/javascript" }, // Fichier JS
  "/about": { path: "about.html", contentType: "text/html" }, // Autre page HTML
  "/assets/node-js2.png": {
    path: "./assets/node-js2.png",
    contentType: "image/png",
  }, // Image PNG
  "/assets/node-js1.png": {
    path: "./assets/node-js1.png",
    contentType: "image/png",
  }, // Autre image PNG
};

// Création du serveur HTTP
const server = http.createServer((req, res) => {
  // Vérification que la méthode est GET
  if (req.method === "GET") {
    const url = route[req.url]; // Récupère les informations associées à l'URL demandée
    console.log("URL demandée : " + req.url); // Affiche l'URL demandée
    console.log("Voici le path que je cherche : " + url?.path); // Affiche le chemin du fichier
    console.log(url.contentType.startsWith("image"));

    // Si la route n'existe pas, renvoyer une erreur 404
    if (!url) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Page non trouvée");
      return;
    }

    const filePath = path.join(__dirname, url.path); // Résolution correcte du chemin du fichier

    // Gestion de la compression gzip pour les fichiers texte (HTML, CSS, JS)
    if (
      url.contentType === "text/html" ||
      url.contentType === "text/css" ||
      url.contentType === "application/javascript"
    ) {
      // Lecture du fichier texte
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Erreur interne du serveur");
        } else {
          // Envoi de l'image sans compression
          res.writeHead(200, { "Content-Type": url.contentType });
          res.end(data);
        }
      });
    }

    // Si le fichier est une image ou un autre fichier binaire (par exemple .png)
    else if (url.contentType.startsWith("image")) {
      // Lecture du fichier image
      fs.readFile(filePath, (err, compressedData) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Erreur de compression");
        } else {
          // Envoi des données compressées avec l'encodage gzip
          res.writeHead(200, {
            "Content-Type": url.contentType,
          });
          res.end(compressedData);
        }
      });
    } else {
      // Si le type de fichier est non pris en charge (exemple : fichier audio ou vidéo), renvoyer 415
      res.writeHead(415, { "Content-Type": "text/plain" }); // Unsupported media type
      res.end("Type de fichier non supporté");
    }
  } else {
    // Si la méthode HTTP n'est pas GET, renvoyer une erreur 405 (Method Not Allowed)
    res.writeHead(405, { "Content-Type": "text/plain" }); // Method Not Allowed
    res.end("Méthode non autorisée");
  }
});

// Démarre le serveur sur le port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
