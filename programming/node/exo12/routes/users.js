import {
  ServiceCreateUser,
  ServiceDeleteUser,
  ServiceGetAllUser,
  ServiceUpdateUser,
} from "../services/userService.js";
import { openDb } from "../utils/db.js";
import { errorServer } from "../utils/errors/errorHandler.js";

export async function handleUsers(req, res) {
  // Methods
  // mettre la fonction pour récup l'id
  console.log("Methode utilisée | : ", req.method);
  console.log("Url utilisée | :", req.url);
  const db = await openDb();
  const idMatch = req.url.match(/^\/users\/(\d+)$/);
  const id = idMatch ? parseInt(idMatch[1], 10) : null;
  const idMatchUser = req.url.match(/^\/users\/(\d+)\/articles$/);
  const userId = idMatchUser ? parseInt(idMatchUser[1], 10) : null;
  console.log("User ID récupéré : | ", userId);

  try {
    if (req.method === "GET" && req.url === "/users") {
      try {
        const users = await ServiceGetAllUser(db);
        res.writeHead(200, { "Content-Type": "application/json" });
        console.log("Users trouvé avec succès");
        return res.end(JSON.stringify({ message: "Info", data: users }));
      } catch (error) {
        return errorServer();
      }
    } else if (req.method === "GET" && idMatch) {
      // Method GET avec ID
      console.log("Method utilisée | : ", req.method, "avec ID");
      const users = await ServiceGetAllUser(db);

      const user = users.find((a) => a.id === id);
      if (!user) {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ error: "User non trouvé" }));
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      console.log("Users avec ID trouvé avec succès");
      return res.end(JSON.stringify(user));
    } else if (req.method === "POST" && req.url === "/users") {
      //Method POST
      let body = "";
      req.on("data", (chunk) => (body += chunk));
      req.on("end", async () => {
        try {
          const parseUser = JSON.parse(body);
          const newUser = await ServiceCreateUser(db, parseUser);
          res.writeHead(201, { "Content-Type": "application/json" });
          return res.end(JSON.stringify({ message: "Info", data: newUser }));
        } catch (error) {
          throw new Error(
            `Impossible de créer un nouvel user, ${error.message}`
          );
        }
      });
    } else if (req.method === "PUT" && id !== null) {
      //Method PUT
      let body = "";
      req.on("data", (chunk) => (body += chunk));
      req.on("end", async () => {
        try {
          const parseUser = JSON.parse(body);
          const updateUser = await ServiceUpdateUser(db, parseUser, id);
          res.writeHead(202, { "Content-Type": "application/json" });
          return res.end(
            JSON.stringify({
              message: "Info",
              data: updateUser,
            })
          );
        } catch (error) {
          throw new Error(`${error.message}`);
        }
      });
    } else if (req.method === "DELETE" && id !== null) {
      //Method DELETE
      const deleteUs = await ServiceDeleteUser(db, id);
      console.log("ici", deleteUs);

      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(
        JSON.stringify({
          message: "Info",
          data: deleteUs,
        })
      );
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
