//index.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const nouvelUtilisateur = await prisma.user.create({
    data: {
      email: "alice@example.com",
      name: "Alice",
      posts: {
        create: {
          title: "Mon premier post",
          content: "Voici le contenu de mon post.",
        },
      },
    },
  });
  console.log("Utilisateur créé:", nouvelUtilisateur);

  const utilisateurs = await prisma.user.findMany({
    include: { posts: true },
  });
  console.log("Liste des utilisateurs:", utilisateurs);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
