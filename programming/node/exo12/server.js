import http from "node:http";
import { handleArticle as handleArticleRequest } from "./routes/articles.js";
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
      console.log("Je passe bien par /articles");
      await handleArticleRequest(req, res);
    } else if (req.url.startsWith("/users")) {
      console.log("Je passe bien par /users");
      await handleRequestUser(req, res);
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Page non trouvée" }));
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
