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
    return { id: result.lastID, ...body };
  } catch (error) {
    throw new Error(`Impossible de créer un nouvel article ${error.message}`);
  }
}

export async function updateArticle(db, id) {
  try {
    const updateResult = await db.run(
      "UPDATE articles SET title = ?, content =?, user_id =? WHERE id = ?",
      [newArticle.title, newArticle.content, newArticle.user_id, id]
    );
    console.log(updateResult);
    return updateResult;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteArticle(db, id) {
  try {
    const deleteResult = await db.run("DELETE FROM articles WHERE id = ?", [
      id,
    ]);
    console.log(deleteResult);
  } catch (error) {
    throw new Error(error);
  }
}
