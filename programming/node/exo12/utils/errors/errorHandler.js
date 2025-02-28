export function errorServer(res, message) {
  res.writeHead(500, { "Content-Type": "application/json" });
  return res.end(JSON.stringify(message));
}

export function errorJson(res) {
  res.writeHead(400, { "Content-Type": "application/json" });
  return res.end(JSON.stringify({ error: "Format JSON invalide" }));
}
