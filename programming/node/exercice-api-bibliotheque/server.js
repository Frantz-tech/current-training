import http from "node:http";
import { handleRoutes } from "./routes/routes.js";
import { logError } from "./utils/logger.js";

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  try {
    await handleRoutes(req, res);
  } catch (error) {
    await logError(error);
    console.log(error);
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Port server is running on http://localhost:${PORT}`);
});
