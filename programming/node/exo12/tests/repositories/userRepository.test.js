import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  createUser,
  deleteUser,
  getAllUser,
  updateUser,
} from "../../repositories/userRepository.js";

// Simuler une base de données avec des méthodes `.run` et `.all`

const createDbMock = () => ({
  all: (query) => {
    if (query === "SELECT * FROM users") {
      return Promise.resolve([
        { id: 1, name: "John Doe", email: "john@example.com" },
      ]);
    }
    return Promise.reject(new Error("Database error"));
  },
  run: (query, params) => {
    if (query.startsWith("INSERT INTO users")) {
      return Promise.resolve({ changes: 1 });
    }
    if (query.startsWith("UPDATE users")) {
      return Promise.resolve({ changes: 1 });
    }
    if (query.startsWith("DELETE FROM users")) {
      return Promise.resolve({ changes: 1 });
    }
    return Promise.reject(new Error("Database error"));
  },
});

describe("User Repository", () => {
  it("Should fetch all users", async () => {
    const dbMock = createDbMock();
    try {
      const result = await getAllUser(dbMock);
      assert.strictEqual(result.length, 1);
      assert.strictEqual(result[0].name, "John Doe");
      assert.strictEqual(result[0].email, "john@example.com");
    } catch (error) {
      assert.fail(`Unexpected error: ${error.message}`);
    }
  });

  it("Should create user successfully", async () => {
    const dbMock = createDbMock();
    const body = { name: "John Doe", email: "john@example.com" };
    try {
      const result = await createUser(dbMock, body);
      assert.strictEqual(result.name, "John Doe");
      assert.strictEqual(result.email, "john@example.com");
    } catch (error) {
      assert.fail(`Unexpected error: ${error.message}`);
    }
  });

  it("Should throw error when createUser fails", async () => {
    const dbMock = createDbMock();
    const body = { name: "Error User", email: "error@example.com" };

    // Redéfinir la méthode run pour simuler une erreur
    dbMock.run = () => Promise.reject(new Error("Database insert error"));

    try {
      await createUser(dbMock, body);
      assert.fail("Expected error, but got none");
    } catch (error) {
      assert.ok(error instanceof Error);
      assert.ok(error.message.includes("Database insert error"));
    }
  });

  it("Should update user successfully", async () => {
    const dbMock = createDbMock();
    const body = { name: "John Update", email: "johnupdate@example.com" };
    const id = 1;

    try {
      const result = await updateUser(dbMock, body, id);
      assert.strictEqual(result.name, "John Update");
      assert.strictEqual(result.email, "johnupdate@example.com");
    } catch (error) {
      assert.fail(`Unexpected error: ${error.message}`);
    }
  });

  it("Should throw error when updateUser fails", async () => {
    const dbMock = createDbMock();
    const body = {
      name: "Error UpdateUser",
      email: "updateError@example.com",
    };
    const id = -1; // Id qui ne correspond à aucun utilisateur

    // Redéfinir la méthode run pour simuler une erreur
    dbMock.run = () => Promise.reject(new Error("Database update error"));

    try {
      await updateUser(dbMock, body, id);
      assert.fail("Expected error, but got none");
    } catch (error) {
      assert.ok(error instanceof Error);
      assert.ok(error.message.includes("Database update error"));
    }
  });

  it("Should delete a user successfully", async () => {
    const dbMock = createDbMock();
    const id = 1;
    try {
      const result = await deleteUser(dbMock, id);
      assert.strictEqual(result, id);
    } catch (error) {
      assert.fail(`Unexpected error: ${error.message}`);
    }
  });

  it("Should throw error when deleteUser fails", async () => {
    const dbMock = createDbMock();
    const id = -1; // Id qui ne correspond à aucun utilisateur

    // Redéfinir la méthode run pour simuler une erreur
    dbMock.run = () => Promise.reject(new Error("Database delete error"));

    try {
      await deleteUser(dbMock, id);
      assert.fail("Expected error, but got none");
    } catch (error) {
      assert.ok(error instanceof Error);
      assert.ok(error.message.includes("Database delete error"));
    }
  });
});
