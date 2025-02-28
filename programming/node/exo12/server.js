import http from "node:http";
import { handleArticlesRequest as handleArtRequest } from "./routes/articles.js";
import { handleUsersRequest as handleUsRequest } from "./routes/users.js";
import { errorJson } from "./utils/errors/errorHandler.js";
import { errorNotFound } from "./utils/errors/notFoundError.js";
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
      if (req.method === "POST" || req.method === "PUT") {
        console.log(
          "Je passe par la route '/articles', avec la methode POST || PUT"
        );

        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });
        req.on("end", async () => {
          try {
            const parseBody = JSON.parse(body);
            await handleArtRequest(res, req, parseBody);
            res.writeHead(200, { "Content-Type": "application/json" });
            return res.end(JSON.stringify(parseBody));
          } catch (error) {
            return errorJson(res);
          }
        });
      } else {
        const articles = await handleArtRequest(res, req, null);
        console.log(typeof articles, " je suis ici");

        res.writeHead(200, { "Content-Type": "application/json" });
        console.log(
          "Je passe par la route '/articles', avec la methode DELETE || GET"
        );

        return res.end(JSON.stringify(articles));
      }
      return;
    } else if (req.url.startsWith("/users")) {
      console.log("Je passe par la route : '/users' ");

      if (req.method === "POST" || req.method === "PUT") {
        console.log(
          "Je passe par la route '/user', avec la methode POST || PUT"
        );

        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });
        req.on("end", async () => {
          try {
            const parseBody = JSON.parse(body);
            await handleUsRequest(res, req, parseBody);
            res.writeHead(200, { "Content-Type": "application/json" });
            return res.end(JSON.stringify(parseBody));
          } catch (error) {
            return errorJson(res);
          }
        });
      } else {
        await handleUsRequest(res, req, null);
        console.log(
          "Je passe par la route '/users', avec la methode DELETE || GET"
        );

        return;
      }
      return;
    } else {
      return errorNotFound(res);
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
