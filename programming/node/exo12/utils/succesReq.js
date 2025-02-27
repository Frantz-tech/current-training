export function succesRequest(res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  return res.end(JSON.stringify());
}
