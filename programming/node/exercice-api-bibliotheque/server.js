import http from "node:http";
import { logError } from "./utils/logger.js";

const server = http.createServer(async (req, res) => {
  res.setHeaders("Access-Control-Allow-Origin", "*");
  res.setHeaders("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.setHeaders("Access-Control-Allow-Headers", "Content-Type");

  if (method === "OPTION") {
    res.writeHead(204);
    return res.end();
  }

  try {
    if (req.url === "") console.log("Hello");
  } catch (error) {
    await logError(error);
    console.log(error);
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Port server is running on http://localhost:${PORT}`);
});
