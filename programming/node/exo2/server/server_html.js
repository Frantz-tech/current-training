const http = require("http");
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const route = {
  "/": { path: "../public/index.html", contentType: "text/html" },
  "/style.css": {
    path: "../public/style.css",
    contentType: "text/css",
  },
  "/script.js": {
    path: "../public/script.js",
    contentType: "application/javascript",
  },
  "/assets/node-js2.png": {
    path: "../assets/node-js2.png",
    contentType: "image/png",
  },
  "/assets/node-js1.png": {
    path: "../assets/node-js1.png",
    contentType: "image/png",
  },
  "/admin": {
    path: "../public/admin.html",
    contentType: "text/html",
  },
};

const server = http.createServer((req, res) => {
  if (req.method !== "GET") {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Méthode non autorisée");
    return;
  }

  const url = route[req.url];

  if (!url) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page non trouvée");
    return;
  }

  const filePath = path.join(__dirname, url.path);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Fichier non trouvé");
      return;
    }

    if (
      ["text/html", "text/css", "application/javascript"].includes(
        url.contentType
      )
    ) {
      res.writeHead(200, {
        "Content-Type": url.contentType,
        "Content-Encoding": "gzip",
      });
      const fileStream = fs.createReadStream(filePath);
      fileStream.pipe(zlib.createGzip()).pipe(res);
    } else if (url.contentType.startsWith("image")) {
      res.writeHead(200, { "Content-Type": url.contentType });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(415, { "Content-Type": "text/plain" });
      res.end("Type de fichier non supporté");
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
