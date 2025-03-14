// Fichier test des livresRepository
import { describe, expect, it } from "vitest";
import {
  createLivreRepository,
  deleteLivreRepository,
  updateLivreRepository,
} from "../../repositories/livreRepository.js";

// // 🟢 TEST : Ajouter un livre
describe("createLivreRepository", () => {
  it("doit ajouter un livre dans la base", async () => {
    const livre = {
      titre: "Le Petit Prince",
      ISBN: `${Math.floor(Math.random() * 9e14) + 1e14}`,
      nb_pages: 100,
      annee_publication: "1943-12-01",
      uniquement_sur_place: false,
      disponible: true,
    };

    const result = await createLivreRepository(livre);

    expect(result).toHaveProperty("id");
    expect(result.titre).toBe("Le Petit Prince");
  });
});

// 🟢 TEST : Modifier un livre
describe("updateLivreRepository", () => {
  it("doit mettre à jour un livre existant", async () => {
    const livre = {
      titre: "Livre Test",
      ISBN: `${Math.floor(Math.random() * 9e14) + 1e14}`,
      nb_pages: 200,
      annee_publication: "1943-12-01",
      uniquement_sur_place: false,
      disponible: true,
    };

    const createdBook = await createLivreRepository(livre);
    const updated = await updateLivreRepository(createdBook.id, {
      ...livre,
      titre: "Nouveau Titre",
    });

    expect(updated).toBe(true);
  });
});

// 🟢 TEST : Supprimer un livre
describe("deleteLivreRepository", () => {
  it("doit supprimer un livre existant", async () => {
    const livre = {
      titre: "Livre à supprimer",
      ISBN: `${Math.floor(Math.random() * 9e14) + 1e14}`,
      nb_pages: 150,
      annee_publication: "1943-12-01",
      uniquement_sur_place: false,
      disponible: true,
    };

    const createdBook = await createLivreRepository(livre);
    const deleted = await deleteLivreRepository(createdBook.id);

    expect(deleted).toBe(true);
  });
});
