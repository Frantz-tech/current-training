export function errorServer(res) {
  res.writeHead(500, { "Content-Type": "application/json" });
  return res.end(JSON.stringify({ error: "Error server" }));
}

export function errorJson(res) {
  res.writeHead(400, { "Content-Type": "application/json" });
  return res.end(JSON.stringify({ error: "Format JSON invalide" }));
}
