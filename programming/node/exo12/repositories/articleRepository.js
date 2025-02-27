export async function getallArticle(db) {
  try {
    const articles = await db.all("SELECT * FROM articles");
    return articles;
  } catch (error) {
    res.writeHead(400, { "Content-Type": "application/json" });
    return res.end(
      JSON.stringify({ error: "impossible de récuperer tous les articles" })
    );
  }
}
export async function getArticleById(db, id) {
  try {
    const getArticleId = await db.all("SELECT * FROM articles WHERE id =?", [
      id,
    ]);
    console.log(getArticleId);
    return getArticleId;
  } catch (error) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({ error: "Impossible de récupérer l'id de l'article " })
    );
  }
}

export async function createArticle(res, db) {
  try {
    const newArticle = await db.run(
      "INSERT INTO articles (title, content, user_id) VALUES (?, ?, ?)",
      [newArticle.title, newArticle.content, newArticle.user_id]
    );
    console.log(newArticle);
    return newArticle;
  } catch (error) {
    res.writeHead(400, { "Content-Type": "application/json" });
    return res.end(
      JSON.stringify({ error: "impossible d'envoyer le nouvel article" })
    );
  }
}

export async function updateArticle(res, db, id) {
  try {
    const updateResult = await db.run(
      "UPDATE articles SET title = ?, content =?, user_id =? WHERE id = ?",
      [newArticle.title, newArticle.content, newArticle.user_id, id]
    );
    return updateResult;
    console.log(updateResult);
  } catch (error) {
    res.writeHead(400, { "Content-Type": "application/json" });
    return res.end(
      JSON.stringify({ error: "impossible de modifier l'article" })
    );
  }
}

export async function deleteArticle(db, id) {
  try {
    const deleteResult = await db.run("DELETE FROM articles WHERE id = ?", [
      id,
    ]);
    console.log(deleteResult);
  } catch (error) {
    res.writeHead(400, { "Content-Type": "application/json" });
    return res.end(
      JSON.stringify({ error: "Impossible de supprimer l'article" })
    );
  }
}
