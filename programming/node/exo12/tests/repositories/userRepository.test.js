import assert from "node:assert/strict";
import { beforeEach, describe, it } from "node:test";
import {
  createUser,
  deleteUser,
  getAllUser,
  updateUser,
} from "../../repositories/userRepository.js";

// Simuler une base de données avec des méthodes `.run` et `.all`
let dbMock;

beforeEach(() => {
  // Réinitialiser dbMock avant chaque test
  dbMock = {
    all: (query) => {
      if (query.startsWith("SELECT * FROM users")) {
        return new Promise((resolve) => {
          resolve([{ id: 1, name: "Jhon Doe", email: "jhon@example.com" }]); // Simulation des données
        });
      }
      return new Promise((_, reject) => reject(new Error("Database error")));
    },
    run: (query, params) => {
      if (query.startsWith("INSERT INTO users")) {
        return new Promise((resolve) => resolve({ changes: 1 })); // Simuler une insertion réussie
      }
      if (query.startsWith("UPDATE users")) {
        return new Promise((resolve) => resolve({ changes: 1 })); // Simuler une mise à jour réussie
      }
      if (query.startsWith("DELETE FROM users")) {
        return new Promise((resolve) => resolve({ changes: 1 })); // Simuler une suppression réussie
      }
      return new Promise((_, reject) =>
        reject(new Error("Database query failed"))
      );
    },
  };
});

describe("User Repository", function () {
  it("Should fetch all users", async function () {
    try {
      const result = await getAllUser(dbMock);
      assert.strictEqual(result.length, 1);
      assert.strictEqual(result[0].name, "Jhon Doe");
      assert.strictEqual(result[0].email, "jhon@example.com");
    } catch (error) {
      assert.fail(`Unexpected error: ${error.message}`);
    }
  });

  it("Should create user successfully", async function () {
    const body = { name: "Jhon Doe", email: "jhon@example.com" };
    try {
      const result = await createUser(dbMock, body);
      assert.strictEqual(result.name, "Jhon Doe");
      assert.strictEqual(result.email, "jhon@example.com");
    } catch (error) {
      assert.fail(`Unexpected error: ${error.message}`);
    }
  });

  it("Should throw error when createUser fails", async function () {
    const body = { name: "Error User", email: "error@example.com" };

    // Simuler une erreur dans l'insertion
    dbMock.run = () => {
      return new Promise((_, reject) =>
        reject(new Error("Database insert error"))
      );
    };

    try {
      await createUser(dbMock, body);
      assert.fail("Expected error, but got none");
    } catch (error) {
      assert.strictEqual(error.message, "Database insert error");
    }
  });

  it("Should update user successfully", async function () {
    const body = { name: "Jhon Update", email: "jhonupdate@example.com" };
    const id = 1;

    try {
      const result = await updateUser(dbMock, body, id);
      assert.strictEqual(result.name, "Jhon Update");
      assert.strictEqual(result.email, "jhonupdate@example.com");
    } catch (error) {
      assert.fail(`Unexpected error: ${error.message}`);
    }
  });

  // it("Should throw error when updateUser fails", async function () {
  //   const body = { name: "Error Update", email: "errorupdate@example.com" };
  //   const id = -1; // Id qui ne correspond à aucun utilisateur

  //   // Simuler une erreur dans la mise à jour
  //   dbMock.run = () => {
  //     return new Promise((_, reject) =>
  //       reject(new Error("Database update error"))
  //     );
  //   };

  //   try {
  //     await updateUser(dbMock, body, id);
  //     assert.fail("Expected error, but got none");
  //   } catch (error) {
  //     throw new Error(error.message, `User not found with this id ${id}`);
  //   }
  // });

  // it("Should throw error when updateUser fails", async function () {
  //   const body = { name: "Error Update", email: "errorupdate@example.com" };
  //   const id = -1; // Id qui ne correspond à aucun utilisateur

  //   // Simuler une erreur dans la mise à jour
  //   dbMock.run = () => {
  //     return { changes: 0 }; // Simuler qu'aucune ligne n'a été affectée
  //   };

  //   try {
  //     await updateUser(dbMock, body, id);
  //     assert.fail("Expected error, but got none");
  //   } catch (error) {
  //     assert.strictEqual(error.message, `User not found with this id ${id}`);
  //   }
  // });

  it("Should throw 'no user found' error when no rows affected", async function () {
    const body = { name: "Error Update", email: "errorupdate@example.com" };
    const id = -1;

    dbMock.run = async () => {
      return { changes: 0 }; // Aucune ligne affectée
    };

    try {
      await updateUser(dbMock, body, id);
      assert.fail("Expected error, but got none");
    } catch (error) {
      assert.strictEqual(error.message, "No user found with this ID ");
    }
  });

  it("Should throw database error when db.run fails", async function () {
    const body = { name: "Error Update", email: "errorupdate@example.com" };
    const id = -1;

    dbMock.run = async () => {
      throw new Error("Database update error");
    };

    try {
      await updateUser(dbMock, body, id);
      assert.fail("Expected error, but got none");
    } catch (error) {
      assert.strictEqual(
        error.message,
        "Database error: Database update error"
      );
    }
  });
  it("Should delete user successfully", async function () {
    const id = 1;

    try {
      const result = await deleteUser(dbMock, id);
      console.log("test result delete user:", result);
      assert.strictEqual(result, 1); // Vérifie que l'ID du résultat est correct
    } catch (error) {
      assert.fail(`Unexpected error: ${error.message}`);
    }
  });

  it("Should throw error when deleteUser fails", async function () {
    const id = -1; // Id qui ne correspond à aucun utilisateur

    // Simuler une erreur dans la suppression
    dbMock.run = () => {
      return new Promise((_, reject) =>
        reject(new Error("Database delete error"))
      );
    };

    try {
      await deleteUser(dbMock, id);
      assert.fail("Expected error, but got none");
    } catch (error) {
      assert.strictEqual(error.message, "Database delete error");
    }
  });
});
