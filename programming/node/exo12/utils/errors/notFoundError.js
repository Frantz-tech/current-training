export async function errorNotFound(res) {
  res.writeHead(404, { "Content-Type": "application/json" });
  return res.end(JSON.stringify({ error: "Page non trouvée" }));
}
