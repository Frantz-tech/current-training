export function parseRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const parsedBody = JSON.parse(body); // Parser le JSON
        resolve(parsedBody);
      } catch (error) {
        reject(new Error("Invalid JSON format"));
      }
    });

    req.on("error", (error) => {
      reject(new Error("Request body parsing error"));
    });
  });
}
