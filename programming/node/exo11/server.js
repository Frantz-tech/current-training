import http from "node:http";
import { handleRequest as handleRequestArticle } from "./routes/articles.js";
import { logError } from "./utils/logger.js";
const server = http.createServer(async (req, res) => {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTION") {
    res.writeHead(204);
    return res.end();
  }

  try {
    if (req.url.startsWith("/articles")) {
      console.log("Je passe bien par /articles");
      await handleRequestArticle(req, res);
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Page non trouvée" }));
    }
  } catch (error) {
    await logError(error);
    console.log(error);
  }
});
const PORTsql = 3000;

server.listen(PORTsql, () => {
  console.log(`Front Server running on Port http://localhost:${PORTsql}`);
});
