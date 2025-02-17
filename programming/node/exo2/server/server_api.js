const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "data", "database.json");

const server = http.createServer((req, res) => {
  console.log(`Requête reçue : ${req.method} ${req.url}`);

  // 🔹 CORS Headers
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // 🔹 Gérer les requêtes OPTIONS pour CORS
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // 🔹 GET : Lire le fichier JSON
  if (req.method === "GET" && req.url === "/data") {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.log("Erreur de lecture JSON :", err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Erreur interne du serveur");
        return;
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
    });

    // 🔹 POST : Ajouter un utilisateur avec un ID unique
  } else if (req.method === "POST" && req.url === "/data") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        const newUser = JSON.parse(body);
        newUser.id = Date.now().toString(); // Génération d'un ID unique

        fs.readFile(filePath, "utf8", (err, data) => {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Erreur interne du serveur");
            return;
          }

          const database = JSON.parse(data);
          database["user"].push(newUser);

          fs.writeFile(filePath, JSON.stringify(database, null, 2), (err) => {
            if (err) {
              res.writeHead(500, { "Content-Type": "text/plain" });
              res.end("Erreur lors de l'écriture du fichier");
            } else {
              res.writeHead(201, { "Content-Type": "application/json" });
              res.end(
                JSON.stringify({
                  message: "Utilisateur ajouté avec succès",
                  user: newUser,
                })
              );
            }
          });
        });
      } catch (error) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Format JSON invalide");
      }
    });

    // 🔹 DELETE : Supprimer un utilisateur par son ID
  } else if (req.method === "DELETE" && req.url.startsWith("/data/{userid}")) {
    const id = req.url.split("/")[2];

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Erreur interne du serveur");
        return;
      }

      let dataJson = JSON.parse(data);
      const userIndex = dataJson.user.findIndex((user) => user.id === id);

      if (userIndex === 0) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Utilisateur non trouvé" }));
        return;
      }

      // 🔹 Suppression de l'utilisateur
      dataJson.user.splice(userIndex, 1);

      fs.writeFile(filePath, JSON.stringify(dataJson, null, 2), (err) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Erreur lors de la suppression");
        } else {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({ message: "Utilisateur supprimé avec succès" })
          );
        }
      });
    });
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Méthode non autorisée");
  }
});

// Démarre le serveur sur le port 4000
const PORT_API = 4000;
server.listen(PORT_API, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT_API}`);
});
