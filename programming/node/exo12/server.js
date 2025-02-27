import http from "node:http";
import { handleArticlesRequest as handleArtRequest } from "./routes/articles.js";
import { handleUsersRequest as handleUsRequest } from "./routes/users.js";
import { logError } from "./utils/logger.js";
const server = http.createServer(async (req, res) => {
  // Cors Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204); // 204 est une requete no content
    return res.end();
  }

  try {
    if (req.url.startsWith("/articles")) {
      console.log("Je passe par la route : '/articles' ");
      await handleArtRequest(res, req);
      console.log("bjr");
    } else if (req.url.startsWith("/users")) {
      console.log("Je passe par la route : '/users' ");
      await handleUsRequest(req, res);
    } else {
    }
  } catch (error) {
    await logError(error);
    console.log(error);
  }
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Port server running on : http://localhost:${3000} `);
});
