import { describe, expect, it } from "vitest";
import {
  createEmpruntRepository,
  deleteEmpruntRepository,
  updateEmpruntRepository,
} from "../../repositories/empruntRepository.js";

describe("createEmpruntRepository", () => {
  it("doit ajouter un emprunt dans la base", async () => {
    const emprunt = {
      membre_id: 1,
      exemplaire_id: 2,
    };
    const result = await createEmpruntRepository(emprunt);
    console.log("createEmpruntRepository, result : |", result);

    expect(result).toHaveProperty("id");
    expect(result.membre_id).toBe(1);
    expect(result.exemplaire_id).toBe(2);
  });
});

describe("updateEmpruntRepository", () => {
  it("doit modifier un emprunt existant dans la base", async () => {
    const emprunt = {
      membre_id: 5,
      exemplaire_id: 6,
    };
    const createEmprunt = await createEmpruntRepository(emprunt);
    const updateEmprunt = await updateEmpruntRepository(createEmprunt.id, {
      ...emprunt,
      membre_id: 1,
      exemplaire_id: 5,
    });
    expect(updateEmprunt).toBe(true);
  });
});

describe("deleteEmpruntRepository", () => {
  it("doit supprimer un Emprunt de la base", async () => {
    const emprunt = {
      membre_id: 1,
      exemplaire_id: 2,
    };
    const createEmprunt = await createEmpruntRepository(emprunt);
    const deleted = await deleteEmpruntRepository(createEmprunt.id);
    expect(deleted).toBe(true);
  });
});
