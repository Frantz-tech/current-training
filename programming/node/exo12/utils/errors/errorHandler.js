export function errorServer(res) {
  res.writeHead(500, { "Content-Type": "application/json" });
  return res.end(JSON.stringify({ error: "Error server" }));
}
