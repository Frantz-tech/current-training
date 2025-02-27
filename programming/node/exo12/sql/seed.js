import { openDb } from "../utils/db.js";
import { logError } from "../utils/logger.js";

const sampleArticles = [
  {
    title: "Premier article",
    content: "Contenu du premier article",
    user_id: 1,
  },
  {
    title: "Deuxième article",
    content: "Contenu du deuxième article",
    user_id: 2,
  },
  {
    title: "Troisième article",
    content: "Contenu du troisième article",
    user_id: 3,
  },
];
const sampleUsers = [
  { name: "Alice", email: "alice@sqlite.com" },
  { name: "Bob", email: "bob@sqlite.com" },
  { name: "Dan", email: "dan@sqlite.com" },
];
async function seedDatabase() {
  try {
    const db = await openDb();

    // Supprime les données existantes
    await db.run("DELETE FROM articles");
    await db.run("DELETE FROM users");

    // Insère les données de test
    for (const user of sampleUsers) {
      await db.run("INSERT INTO users (name,email) VALUES (?, ?)", [
        user.name,
        user.email,
      ]);
    }
    for (const article of sampleArticles) {
      await db.run(
        "INSERT INTO articles (title, content, user_id) VALUES (?, ?, ?)",
        [article.title, article.content, article.user_id]
      );
    }

    console.log("Database seeded successfully");
    process.exit(0);
  } catch (error) {
    await logError(error);
    console.error("Error seeding database:", error.message);
    process.exit(1);
  }
}

seedDatabase();

console.log("Sezegerge");
