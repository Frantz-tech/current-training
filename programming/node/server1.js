const http = require("http");
const fs = require("fs");
const path = require("path");

const routes = {
  "/about": "about.html",
  "/contact": "contact.html",
  "/shop": "shop.html",
};

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    Object.entries(routes).forEach(([path, file]) => {
      console.log(routes);

      fs.readFile(file, "utf8", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Erreur interne du serveur");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        }
      });
    });
  } else if (req.url === "/" && req.method === "GET") {
    fs.readFile("index.html", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Erreur interne du serveur");
      }
      res.writeHead(200, { "Content-Type": "text.html" });
      res.end(data);
    });
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
