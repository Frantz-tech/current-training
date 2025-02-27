export async function getallUser(res, db) {
  try {
    return await db.all("SELECT * FROM users");
  } catch (error) {
    res.writeHead(400, { "Content-Type": "application/json" });
    return res.end(
      JSON.stringify({ error: "impossible de récuperer tous les users" })
    );
  }
}
export async function getUserById(res, db) {
  try {
    return await db.all("SELECT * FROM users");
  } catch (error) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({ error: "Impossible de récupérer l'id de l'user " })
    );
  }
}

export async function createUser(res, db) {
  try {
    const newUser = await db.run(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [newUser.name, newUser.email]
    );
    console.log(newUser);
  } catch (error) {
    res.writeHead(400, { "Content-Type": "application/json" });
    return res.end(
      JSON.stringify({ error: "impossible d'envoyer le nouvel user" })
    );
  }
}

export async function updateUser(res, db) {
  try {
    const updateUser = await db.run(
      "UPDATE INTO users (name, email) VALUES (?, ?)",
      [updateUser.name, updateUser.email]
    );
    console.log(updateUser);
  } catch (error) {
    res.writeHead(400, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ error: "impossible de modifier l'user" }));
  }
}

export async function deleteUser(res, db) {
  try {
    const deleteUser = await db.run("DELETE FROM users WHERE id = ?", [id]);
    console.log(deleteUser);
  } catch (error) {
    res.writeHead(400, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ error: "Impossible de supprimer l'user" }));
  }
}
