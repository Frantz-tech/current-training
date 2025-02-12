import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const fileName = join(dir, "demo-deep.txt");

console.log(await readFile(fileName, { encoding: "utf-8" }));
