import { describe, expect, it } from "vitest";
import { createAuteurRepository } from "../../repositories/auteurRepository.js";

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
