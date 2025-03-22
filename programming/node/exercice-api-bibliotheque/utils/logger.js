import { appendFile } from "fs/promises";

export async function logError(message) {
  const logMessage = `${new Date().toISOString()} - ${message}\n`;
  try {
    await appendFile("server-log", logMessage);
  } catch (err) {
    console.log("erreur lors de l'écriture du log: ", err);
  }
}
export const logger = {
  warn(message) {
    console.warn(`[WARN] ${new Date().toISOString()} - ${message}`);
  },
};
