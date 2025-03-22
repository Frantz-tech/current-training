import { describe, expect, it } from "vitest";
import {
  createAuteurRepository,
  deleteAuteurRepository,
  updateAuteurRepository,
} from "../../repositories/auteurRepository.js";

// Test créer un auteur
describe("createAuteurRepository", () => {
  it("doit ajouter un auteur dans la base", async () => {
    const auteur = {
      nom_auteur: "Le Mitho",
      prenom_auteur: "SERGE",
      date_naissance: "1959-02-10",
      id_pays: 3,
    };

    const result = await createAuteurRepository(auteur);
    console.log("createAuteurRepository, result: ", result);
    expect(result).toHaveProperty("id");
    expect(result.nom_auteur).toBe("Le Mitho");
  });
});

// Test modifier un auteur
describe("updateAuteurRepository", () => {
  it("doit modifier une auteur dans la base de données", async () => {
    const auteur = {
      nom_auteur: "Le Flambeur",
      prenom_auteur: "Sergio",
      date_naissance: "1959-01-10",
      id_pays: 2,
    };
    const updatedLivre = await createAuteurRepository(auteur);
    console.log("updateRepository, result : | ", updatedLivre);
    const updated = await updateAuteurRepository(updatedLivre.id, {
      ...auteur,
      nom_auteur: "La Famberino",
      prenom_auteur: "Sergioni",
      date_naissance: "1984-10-02",
      id_pays: 3,
    });
    expect(updated).toBe(true);
  });
});

// Test supprimer un auteur
describe("deleteAuteurRepository", () => {
  it("doit supprimer un auteur dans la base", async () => {
    const auteur = {
      nom_auteur: "Sergini",
      prenom_auteur: "De la vega",
      date_naissance: "1969-05-11",
      id_pays: 3,
    };
    const deleteBook = await createAuteurRepository(auteur);
    console.log("deleteRepository, result : | ", deleteBook);
    const deleted = await deleteAuteurRepository(deleteBook.id);

    expect(deleted).toBe(true);
  });
});
