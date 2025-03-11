import {
  AuteurUpdate,
  createAuteur,
  deleteAuteur,
  getAllAuteurs,
} from "../repositories/auteurRepository.js";

// Récupération de tout les auteurs
export async function getAllAuteursService() {
  try {
    return await getAllAuteurs();
  } catch (error) {
    console.error("Erreur lors de la récupération des auteurs", error);
    throw new Error("Erreur lors de la récupération des auteurs");
  }
}

// Création d'un auteur
export async function createAuteurService(newAuteur) {
  try {
    if (
      !newAuteur.nom_auteur ||
      !newAuteur.prenom_auteur ||
      !newAuteur.date_naissance
    ) {
      throw new Error("Donnée manquantes pour la création de l'auteur");
    }

    const createdAuteur = await createAuteur(newAuteur);
    return createdAuteur;
  } catch (error) {
    console.error("Erreur lors de la création de l'auteur", error);
    throw new Error("Erreur lors de la création de l'auteur");
  }
}

// Modification d'un auteur avec son id
export async function updateAuteurService(id, updateAuteur) {
  try {
    if (!id) {
      throw new Error("Id incorrect pour la suppression du auteur");
    }
    const updatedAuteur = await AuteurUpdate(id, updateAuteur);
    return updatedAuteur;
  } catch (error) {
    console.error("Erreur lors de la modification de l'auteur", error);
    throw new Error("Erreur lors de la modification de l'auteur");
  }
}

// Suppression d'un auteur avec son id
export async function deleteAuteurService(id) {
  try {
    if (!id) {
      throw new Error("Id incorrect pour la suppression de l'auteur");
    }
    const deletedAuteur = await deleteAuteur(id);
    return deletedAuteur;
  } catch (error) {
    console.error("Erreur lors de la suppression de l'auteur", error);
    throw new Error("Erreur lors de la suppression de l'auteur ");
  }
}
