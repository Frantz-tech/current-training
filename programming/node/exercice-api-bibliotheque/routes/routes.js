import { createLivre, getAllLivres } from "../repositories/livreRepository.js";

export async function handleLivre(req, res) {
  try {
    if (req.method === "GET") {
      const allLivres = await getAllLivres();
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(allLivres));
    } else if (req.method === "POST") {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", async () => {
        try {
          const newLivre = JSON.parse(body); // 🔥 Ici, on récupère le livre envoyé par le client

          const createdLivre = await createLivre(newLivre);

          res.writeHead(201, { "Content-Type": "application/json" });
          res.end(JSON.stringify(createdLivre));
        } catch (error) {
          console.error("Erreur lors de la création du livre :", error);
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Données invalides" }));
        }
      });

      return;
    }
  } catch (error) {
    console.error("Erreur Serveur :", error);
  }
}
