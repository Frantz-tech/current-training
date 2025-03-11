import {
  createEmprunt,
  deleteEmprunt,
  empruntUpdate,
  getAllEmprunt,
} from "../repositories/empruntRepository.js";

// Récupération de tout les emprunts
export async function getAllEmpruntService() {
  try {
    return await getAllEmprunt();
  } catch (error) {
    console.error("Erreur lors de la récupération des emprunts", error);
    throw new Error("Erreur lors de la récupération des emprunts");
  }
}

// Création d'un emrpunt
export async function createEmpruntService(newEmprunt) {
  try {
    const createdEmprunt = await createEmprunt(newEmprunt);
    return createdEmprunt;
  } catch (error) {
    console.error("Erreur lors de la création de l'emprunt", error);
    throw new Error("Erreur lors de la création de l'emprunt");
  }
}

// Modification d'un emprunt avec son id
export async function updateEmpruntService(id, updateEmprunt) {
  try {
    if (!id) {
      throw new Error("Id incorrect pour la suppression de l'emprunt");
    }
    const updatedEmprunt = await empruntUpdate(id, updateEmprunt);
    return updatedEmprunt;
  } catch (error) {
    console.error("Erreur lors de la modification de l'emprunt", error);
    throw new Error("Erreur lors de la modification de l'emprunt");
  }
}

// Suppression d'un emprunt avec son id
export async function deleteEmpruntService(id) {
  try {
    if (!id) {
      throw new Error("Id incorrect pour la suppression de l'emprunt");
    }
    const deletedEmprunt = await deleteEmprunt(id);
    return deleteEmprunt;
  } catch (error) {
    console.error("Erreur lors de la suppression de l'emprunt", error);
    throw new Error("Erreur lors de la suppression de l'emprunt ");
  }
}
