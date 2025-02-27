export function succesRequest(res, message) {
  res.writeHead(200, { "Content-Type": "application/json" });
  return res.end(JSON.stringify(message));
}
