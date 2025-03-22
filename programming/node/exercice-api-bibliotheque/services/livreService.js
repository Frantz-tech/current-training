import {
  createLivreRepository,
  deleteLivreRepository,
  getAllLivresRepository,
  getLivreAuteurByIdRepository,
  getLivreCategorieRepository,
  getPaginatedLivreRepository,
  getPaginatedLivreTotalRowsRepository,
  updateLivreRepository,
} from "../repositories/livreRepository.js";

// Récupération de tout les livres
export async function getAllLivreService() {
  try {
    return await getAllLivresRepository();
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

    const createdLivre = await createLivreRepository(newLivre);
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
    const updatedLivre = await updateLivreRepository(id, updateLivre);
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
    const deletedLivre = await deleteLivreRepository(id);
    return deletedLivre;
  } catch (error) {
    console.error("Erreur lors de la suppression du livre", error);
    throw new Error("Erreur lors de la suppression du livre ");
  }
}
// Récupération de limit et offset
export async function paginatedLivreService(limit, offset) {
  try {
    const paginatedLivreRepo = await getPaginatedLivreRepository(limit, offset);
    const totalLivre = await getPaginatedLivreTotalRowsRepository();
    return { total: totalLivre, data: paginatedLivreRepo };
  } catch (error) {
    console.error("Erreur lors de la récupération des livres paginés", error);
    throw new Error("Erreur lors de la récup des livres paginés");
  }
}

// Récupération d'un livre par auteur spécifique

export async function getLivreAuteurByIdService(id) {
  try {
    const LivreAuteurById = await getLivreAuteurByIdRepository(id);
    return LivreAuteurById;
  } catch (error) {
    console.error("Erreur lors de la récupération du livreAuteurById", error);
    throw new Error("Erreur lors de la récupération du livreAuteurById");
  }
}

// Récupération d'un livre par catégorie spécifique

export async function getLivreCategorieService(id) {
  try {
    const livreCategories = await getLivreCategorieRepository(id);
    return livreCategories;
  } catch (error) {
    console.error("Erreur lors de la récupération des livreCategories", error);
    throw new Error("Erreur lors de la récupération des livresCategories");
  }
}
