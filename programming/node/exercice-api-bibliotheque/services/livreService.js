import {
  createLivre,
  deleteLivre,
  getAllLivres,
  livreUpdate,
} from "../repositories/livreRepository.js";

// Récupération de tout les livres
export async function getAllLivreService() {
  try {
    return await getAllLivres();
  } catch (error) {
    console.error("Erreur lors de la récupération des livres", error);
    throw new Error("Erreur lors de la récupération des livres");
  }
}

// Création d'un livre
export async function createLivreService(newLivre) {
  try {
    if (
      !newLivre.titre ||
      !newLivre.ISBN ||
      !newLivre.nb_pages ||
      !newLivre.annee_publication
    ) {
      throw new Error("Donnée manquantes pour la création du livre");
    }

    const createdLivre = await createLivre(newLivre);
    return createdLivre;
  } catch (error) {
    console.error("Erreur lors de la création du livre", error);
    throw new Error("Erreur lors de la création du livre");
  }
}

// Modification d'un livre avec son id
export async function updateLivreService(id, updateLivre) {
  try {
    if (!id) {
      throw new Error("Id incorrect pour la suppression du livre");
    }
    const updatedLivre = await livreUpdate(id, updateLivre);
    return updatedLivre;
  } catch (error) {
    console.error("Erreur lors de la modification du livre", error);
    throw new Error("Erreur lors de la modification du livre");
  }
}

// Suppression d'un livre avec son id
export async function deleteLivreService(id) {
  try {
    if (!id) {
      throw new Error("Id incorrect pour la suppression du livre");
    }
    const deleteDlivre = await deleteLivre(id);
    return deleteDlivre;
  } catch (error) {
    console.error("Erreur lors de la suppression du livre", error);
    throw new Error("Erreur lors de la suppression du livre ");
  }
}
