import { openDb } from "../utils/db.js";
import { errorServer } from "../utils/errors/errorHandler.js";

export async function handleUsersRequest(req, res) {
  try {
    const db = await openDb();
    const idMatch = req.url.match(/^\/users\/(\d+)$/);
    const id = idMatch ? parseInt(idMatch[1], 10) : null;
    const idMatchUser = req.url.match(/^\/users\/(\d+)\/articles$/);
    const userId = idMatchUser ? parseInt(idMatchUser[1], 10) : null;
    console.log("User ID récupéré :", userId);

    if (req.method === "GET") {
    } else if (req.method === "POST") {
    } else if (req.method === "PUT") {
    } else if (req.method === "DELETE") {
    } else {
    }
  } catch (error) {
    return errorServer;
  }
}
