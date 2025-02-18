const { createServer } = require("http");
const path = require("path");
const fs = require("fs");
const zlib = require("zlib");
const routes = {
  "/": {
    path: "../public/index.html",
    contentType: "text/html",
  },
  "/style.css": {
    path: "../public/style.css",
    contentType: "text/css",
  },
  "/script.js": {
    path: "../public/script.js",
    contentType: "application/javascript",
  },
};

const server = createServer((req, res) => {
  if (req.method !== "GET") {
    res.writeHead(405);
    res.end("Méthode non autorisée");
    return;
  }

  // lecture des fichiers images
  if (req.url.startsWith("/assets/")) {
    const assetPath = path.join(
      __dirname,
      "..",
      "assets",
      req.url.replace("/assets", "")
    );
    const ext = path.extname(assetPath).toLowerCase();
    console.log(assetPath);

    const mimeTypesImg = {
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".png": "image/png",
      ".gif": "image/gif",
      ".svg": "image/svg+xml",
      ".webp": "image/webp",
    };
    if (!mimeTypesImg[ext]) {
      res.writeHead(400, { "content-type": "application/json" });
      res.end(JSON.stringify({ error: "Format non pris en charge" }));
      return;
    }

    fs.readFile(assetPath, (err, data) => {
      if (err) {
        res.writeHead(404, { "content-type": "application/json" });
        res.end(JSON.stringify({ error: "Image non trouvée" }));
        return;
      }
      console.log("Chemin de l'image | :", assetPath);

      zlib.gzip(data, (err, compressedData) => {
        if (err) {
          res.writeHead(500, { "content-type": "application/json" });
          res.end(JSON.stringify({ error: "Erreur de compression" }));
          return;
        }
        res.writeHead(200, {
          "content-type": mimeTypesImg[ext],
          "content-encoding": "gzip",
        });
        res.end(compressedData);
      });
    });
    return;
  }

  // gestion des fichiers statiques :

  const route = routes[req.url];
  if (!route) {
    res.writeHead(404, { "Content-type": "application/json" });
    res.end(JSON.stringify({ error: "Page non trouvée" }));
    return;
  }

  const filePath = path.join(__dirname, "..", "public", route.path);
  // lecture des fichiers

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: " Fichier introuvable" }));
      return;
    }
    res.writeHead(200, { "content-type": route.contentType });
    res.end(data);
  });
});
const portFront = 3000;
server.listen(portFront, () => {
  console.log(`Server en écoute sur http://localhost:${portFront}`);
});
