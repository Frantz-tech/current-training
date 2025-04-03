import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Création d'un utilisateur avec les nouveaux champs
  const utilisateurTest = await prisma.user.create({
    data: {
      userName: "testuser",
      firstName: "Test",
      dateNaissance: new Date("2000-01-01"), // Exemple de date
      email: "testuser@example.com",
      password: "hashedpassword", // Assurez-vous de hacher le mot de passe
      pseudo: "testpseudo",
      profilPic: null,
      expertise: "Développement",
      bio: "Bio de l'utilisateur",
      badges: {
        create: [
          {
            name: "Influenceur",
            icon: "icon_url",
          },
        ],
      },
      usersGroupes: {
        create: [
          {
            groupId: 1, // Remplacez par un ID de groupe valide
            isAdmin: true,
          },
        ],
      },
    },
  });

  console.log("Utilisateur de test créé:", utilisateurTest);

  // Récupération de tous les utilisateurs avec leurs badges et groupes
  const utilisateurs = await prisma.user.findMany({
    include: {
      badges: true,
      usersGroupes: true,
    },
  });

  console.log("Liste des utilisateurs:", utilisateurs);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
