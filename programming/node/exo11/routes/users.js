import { openDb } from "../utils/db.js";
import { validateEmail } from "../utils/validator.js";

export async function handleUserRequest(req, res) {
  // Methods
  // mettre la fonction pour récup l'id
  console.log("Methode utilisée | : ", req.method);
  console.log("Url utilisée | :", req.url);
  const db = await openDb();
  const idMatch = req.url.match(/^\/users\/(\d+)$/);
  const id = idMatch ? parseInt(idMatch[1], 10) : null;
  const idMatchUser = req.url.match(/^\/users\/(\d+)\/articles$/);
  const userId = idMatchUser ? parseInt(idMatchUser[1], 10) : null;
  console.log("User ID récupéré :", userId);

  try {
    if (req.method === "GET" && req.url === "/users") {
      try {
        const user = await getAllUser(db);
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(user));
      } catch (error) {
        res.writeHead(500, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify({
            error: "Erreur lors de la lecture de getAllUsers",
          })
        );
      }
    } else if (req.method === "GET" && req.url.startsWith("/users?")) {
      // Method GET avec pagination
      if (!req.headers.host) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify({ error: "Host manquant dans les headers" })
        );
      }
      const urlObj = new URL(req.url, `http://${req.headers.host}`);
      const limit = parseInt(urlObj.searchParams.get("limit"), 10) || 10;
      const offset = parseInt(urlObj.searchParams.get("offset"), 10) || 0;

      try {
        const resPaginated = await getPaginatedUsers(db, limit, offset);
        console.log("Je récupère les paginated users :| ", resPaginated);

        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(resPaginated));
      } catch (error) {
        res.writeHead(500, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify({
            error: " Erreur lors de la récupération des users paginés",
          })
        );
      }
    } else if (req.method === "GET" && idMatchUser) {
      // Method GET avec ID & article
      const userArticle = await getUserArticles(db, userId);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(userArticle));
      console.log("User id :", userArticle);
    } else if (req.method === "GET" && id !== null) {
      // Method GET avec ID
      const users = await getAllUserId(db, id);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(users));
    } else if (req.method === "POST" && req.url === "/users") {
      //Method POST
      await createUser(req, res);
    } else if (req.method === "PUT" && id !== null) {
      //Method PUT
      await updateUsers(req, res, id);
    } else if (req.method === "DELETE" && id !== null) {
      //Method DELETE
      await deleteUsers(res, id);
    } else {
      // Route inconnue
      res.writeHead(404, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ error: "Route introuvable" }));
    }
  } catch (error) {
    console.error("Erreur serveur :", error);
    res.writeHead(500, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ error: "Erreur serveur" }));
  }
}

async function getAllUser(db) {
  // Lecture des données du JSON
  try {
    return await db.all("SELECT * FROM users");
  } catch (error) {
    throw new Error(
      `Impossible de récupérer tous les fichiers", ${error.message}`
    );
  }
}
async function getUserArticles(db, user_id) {
  // Lecture des données du JSON
  try {
    return await db.all("SELECT * FROM articles WHERE user_id = ?", [user_id]);
  } catch (error) {
    throw new Error(
      `Impossible de récupérer tous les fichiers", ${error.message}`
    );
  }
}
async function getAllUserId(db, id) {
  // Lecture des données du JSON
  try {
    return await db.all("SELECT * FROM users WHERE id = ?", [id]);
  } catch (error) {
    throw new Error(
      `Impossible de récupérer tous les fichiers", ${error.message}`
    );
  }
}

async function createUser(req, res) {
  // Method POST
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", async () => {
    try {
      const newUsers = JSON.parse(body);
      const db = await openDb();
      if (!validateEmail(newUsers.email)) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ error: "Email invalide" }));
      }
      const result = await db.run(
        "INSERT INTO users (name, email) VALUES (?, ?)",
        [newUsers.name, newUsers.email]
      );
      newUsers.id = result.lastID;
      console.log("Method POST | données de l'ajout  | : ", newUsers);

      res.writeHead(201, { "Content-Type": "application/json" });
      return res.end(
        JSON.stringify({
          message: `Nouvel user envoyé avec succès`,
          id: newUsers.id,
        })
      );
    } catch (error) {
      res.writeHead(400, { "Content-Type": "application/json" });
      return res.end(
        JSON.stringify({ error: "impossible d'envoyer le nouvel user" })
      );
    }
  });
}

async function updateUsers(req, res, id) {
  // Method PUT
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", async () => {
    try {
      const newUsers = JSON.parse(body);
      const db = await openDb();

      function IsValidEmail(email) {
        return emailRegex.test(email);
      }
      if (!IsValidEmail(newUsers.email)) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ error: "Email invalide" }));
      }
      const result = await db.run(
        "UPDATE users SET name = ?, email = ? WHERE id = ?",
        [newUsers.name, newUsers.email, id]
      );

      if (result.changes === 0) {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ error: "User non trouvé " }));
      }
      console.log("Données de la DB après l'update", newUsers);
      res.writeHead(202, { "Content-Type": "application/json" });
      return res.end(
        JSON.stringify({
          message: `User modifié avec succès,`,
          id: id,
        })
      );
    } catch (error) {
      res.writeHead(400, { "Content-Type": "application/json" });
      return res.end(
        JSON.stringify({ error: "Impossible de modifier l'user" })
      );
    }
  });
}

async function deleteUsers(res, id) {
  try {
    const db = await openDb();

    if (isNaN(id) || !id) {
      res.writeHead(400, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "ID de l'user requis" }));
    }
    const deleteUser = await db.run("DELETE FROM users WHERE id = ?", [id]);

    if (deleteUser.changes === 0 && deleteArticle.changes === 0) {
      res.writeHead(404, { "Content-Type": "application/json" });
      return res.end(
        JSON.stringify({ message: "Articlé non trouvé pour la suppression" })
      );
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(
      JSON.stringify({
        message: `User supprimé avec succès`,
        id,
      })
    );
  } catch (error) {
    console.error(error);
    res.writeHead(500, { "Content-Type": "application/json" });
    return res.end(
      JSON.stringify({ message: "Impossible de supprimer l'user" })
    );
  }
}

async function getPaginatedUsers(db, limit, offset) {
  try {
    // récupère les users avec pagination
    const user = await db.all(
      // "SELECT * FROM users ORDER BY id DESC LIMIT ? OFFSET ?", --> Autre option avec descendant
      "SELECT * FROM users ORDER BY id ASC LIMIT ? OFFSET ?",
      [limit, offset]
    );

    // récupere le nombre total d'users
    const totalRow = await db.get("SELECT COUNT (*) as total FROM users");
    const total = totalRow.total;
    console.log("Nombre total d'user :|", total);

    return { user, total };
  } catch (error) {
    throw new Error(
      `Erreur lors de la récupération des users paginés: ${error.message}`
    );
  }
}
