const http = require("http"); // Importation du module qui permet de créer un serveur HTTP
const fs = require("fs");

// fonction call back en paramètre
const server = http.createServer((req, res) => {
  // 200 : le code de statut HTTP (200 = succès).
  // "Content-Type": "text/plain" : le type de contenu de la réponse (text/plain = texte brut).

  if (req.method === "GET" && req.url.startsWith("/user")) {
    fs.readFile("folder.json", "utf8", (err, data) => {
      if (err) {
        console.log("test:" + err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Erreur interne du serveur");
      }
      try {
        const id = parseInt(req.url.split("/")[2]);
        console.log("type de l'ID:", "typeof id", id);
        const jsonData = JSON.parse(data);
        console.log(req.url);

        const users = id ? jsonData.user[id - 1] : jsonData;
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users));
      } catch (parseError) {
        console.log("Erreur de parsing JSON", err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Erreur de Parsing JSON");
      }
    });
  } else if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        const newData = JSON.parse(body);

        fs.readFile("folder.json", "utf8", (err, data) => {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Erreur interne du serveur");
          } else {
            const jsonData = JSON.parse(data);
            jsonData.push(newData);

            fs.writeFile(
              "folder.json",
              JSON.stringify(jsonData, null, 2),
              (err) => {
                if (err) {
                  res.writeHead(500, { "Content-Type": "text/plain" });
                  res.end("Erreur lors de l'écriture du fichier");
                } else {
                  res.writeHead(201, { "Content-Type": "application/json" });
                  res.end(
                    JSON.stringify({ message: "Donnée ajoutée avec succès" })
                  );
                }
              }
            );
          }
        });
      } catch (error) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Format JSON invalide");
      }
    });
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Méthode non autorisée");
  }
});
// // 🚀 Résumé du fonctionnement
// Vérifie si la requête est POST.
// Récupère les données envoyées par le client (req.on("data")).
// Quand la réception est terminée (req.on("end")), on :
// Convertit le JSON reçu (JSON.parse(body)).
// Lit le fichier folder.json.
// Ajoute la nouvelle donnée au tableau JSON.
// Écrit le tableau mis à jour dans folder.json.
// Répond au client avec un message de succès ou une erreur.

const PORT = process.argv[2];
server.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
