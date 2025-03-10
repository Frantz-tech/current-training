import { handleLivre } from "../controllers/livreController.js";

export async function handleRoutes(req, res) {
  const url = req.url;
  if (url.startsWith("/livre")) {
    await handleLivre(req, res);
  }
  //  else if (url.startsWith("/auteur")) {
  //   await handleAuteur();
  // } else if (url.startsWith("/emprunt")) {
  //   await handleEmprunt();
  // }
}
