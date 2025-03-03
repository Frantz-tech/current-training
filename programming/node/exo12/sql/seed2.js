import { openDb } from "../utils/db.js";
import { logError } from "../utils/logger.js";
const users = [
  { name: "Charlie", email: "charlie@devmail.com" },
  { name: "Eva", email: "eva@devmail.com" },
  { name: "Lucas", email: "lucas@devmail.com" },
];
const articles = [
  {
    title: "Introduction à JavaScript",
    content:
      "Découvrez les bases de JavaScript, le langage incontournable du web.",
    user_id: 1,
  },
  {
    title: "Comprendre les API REST",
    content:
      "Apprenez comment fonctionnent les API REST et comment les consommer efficacement.",
    user_id: 2,
  },
  {
    title: "Guide pratique sur Git",
    content:
      "Maîtrisez les commandes essentielles de Git pour gérer vos projets.",
    user_id: 3,
  },
  {
    title: "Optimisation des performances web",
    content:
      "Explorez différentes techniques pour accélérer le chargement de vos pages.",
    user_id: 1,
  },
  {
    title: "Découverte de React",
    content:
      "Initiez-vous à React et construisez des interfaces modernes et dynamiques.",
    user_id: 2,
  },
];
async function seedDatab() {
  try {
    const db = await openDb();
    // Supprime les données existantes
    await db.run("DELETE FROM articles");
    await db.run("DELETE FROM users");
    await db.run("DELETE FROM sqlite_sequence WHERE name='users'");
    await db.run("DELETE FROM sqlite_sequence WHERE name='articles'");

    // Insère les données de test
    for (const us of users) {
      await db.run("INSERT INTO users (name, email) VALUES (?, ?)", [
        us.name,
        us.email,
      ]);
    }
    for (const art of articles) {
      await db.run(
        "INSERT INTO articles (title, content, user_id) VALUES (?, ?, ?)",
        [art.title, art.content, art.user_id]
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

seedDatab();
