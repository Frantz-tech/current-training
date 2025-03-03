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

// export async function updateUser(db, body, id) {
//   console.log("user repository | id :", id);
//   try {
//     const result = await db.run(
//       "UPDATE users SET name = ?, email = ? WHERE id = ?",
//       [body.name, body.email, id]
//     );
//     if (result.changes === 0) {
//       throw new Error(`No user found with this ID `); // Message modifié pour correspondre au test
//     }
//     console.log("repository | updateUser | données modifiées | : ", body);
//     return body;
//   } catch (error) {
//     throw new Error(` ${error.message}`);
//   }
// }
export async function updateUser(db, body, id) {
  console.log("user repository | id :", id);
  try {
    const result = await db.run(
      "UPDATE users SET name = ?, email = ? WHERE id = ?",
      [body.name, body.email, id]
    );
    if (result.changes === 0) {
      throw new Error(`No user found with this ID `); // Message correspondant au test
    }
    console.log("repository | updateUser | données modifiées | : ", body);
    return body;
  } catch (error) {
    // Si l'erreur vient du bloc précédent (utilisateur non trouvé), la propager
    if (error.message.includes("No user found")) {
      throw error;
    }
    // Sinon, il s'agit d'une erreur de base de données ou autre
    throw new Error(`Database error: ${error.message}`);
  }
}

export async function deleteUser(db, id) {
  try {
    const deleteResult = await db.run("DELETE FROM users WHERE id = ?", [id]);
    console.log(
      "repository | updateArticle | données supprimées  | : ",
      deleteResult
    );

    return id;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}
