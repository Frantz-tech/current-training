export async function getAllUser(db) {
  // Lecture des données du JSON
  try {
    return await db.all("SELECT * FROM users");
  } catch (error) {
    throw new Error(
      `Impossible de récupérer tous les users", ${error.message}`
    );
  }
}

export async function createUser(db, body) {
  try {
    await db.run("INSERT INTO users ( name,email) VALUES(?, ?)", [
      body.name,
      body.email,
    ]);

    console.log("repository | createUser | données de l'ajout  | : ", body);
    return body;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}

export async function updateUser(db, body, id) {
  console.log("user repository | id :", id);
  try {
    await db.run("UPDATE users SET name = ?, email =? WHERE id = ?", [
      body.name,
      body.email,
      id,
    ]);
    console.log("repository | updateUser | données modifié  | : ", body);
    return body;
  } catch (error) {
    throw new Error(` ${error.message}`);
  }
}

export async function deleteUser(db, id) {
  try {
    const deleteResult = await db.run("DELETE FROM users WHERE id = ?", [id]);

    return id;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}
