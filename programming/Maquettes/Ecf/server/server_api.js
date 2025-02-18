const { log } = require("console");
const { createServer } = require("http");
const path = require("path");
const fs = require("fs");

const dataPath = path.join(__dirname, "..", "data", "saisons.json");
const server = createServer((req, res) => {
  // Cors Headers
  res.setHeader("Content-type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }
  // Lecture des donnés du JSON Saisons.json
  if (req.method === "GET" && req.url === "/data") {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        console.log("Erreur lors de la lecture du fichier JSON |: ", err);
        res.writeHead(500);
        res.end(
          JSON.stringify({
            error: "Impossible de lire le fichier saisons.json",
          })
        );
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ error: "Route n'existe pas ou pas trouvée" }));
  }
});

const portApi = 4000;
server.listen(portApi, () => {
  console.log(`Server en écoute sur http://localhost:${portApi}`);
});
