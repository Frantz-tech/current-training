export async function getAllArticles(db) {
  // Lecture des données du JSON
  try {
    return await db.all("SELECT * FROM articles");
  } catch (error) {
    throw new Error(
      `Impossible de récupérer tous les fichiers", ${error.message}`
    );
  }
}

export async function createArticle(db, body) {
  try {
    await db.run(
      "INSERT INTO articles ( title, content, user_id) VALUES(?, ?, ?)",
      [body.title, body.content, body.user_id]
    );

    console.log("repository | createArticle | données de l'ajout  | : ", body);
    return body;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}

export async function updateArticle(db, body, id) {
  console.log("user repository | id :", id);
  try {
    const result = await db.run(
      "UPDATE articles SET name = ?, email = ? WHERE id = ?",
      [body.name, body.email, id]
    );
    if (result.changes === 0) {
      throw new Error(`No articles found with this ID `); // Message modifié pour correspondre au test
    }
    console.log("repository | updateArticle | données modifiées | : ", body);
    return body;
  } catch (error) {
    throw new Error(` ${error.message}`);
  }
}

export async function deleteArticle(db, id) {
  try {
    const deleteResult = await db.run("DELETE FROM articles WHERE id = ?", [
      id,
    ]);
    console.log(
      "repository | deleteArticle | données supprimées  | : ",
      deleteResult
    );

    return id;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}
