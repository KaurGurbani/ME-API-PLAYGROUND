import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Delete existing data (optional)
  await prisma.skill.deleteMany({});
  await prisma.project.deleteMany({});
  await prisma.profile.deleteMany({});

  // Create a sample profile
  const profile = await prisma.profile.create({
    data: {
      name: "Gurbani Kaur",
      bio: "Aspiring Software & AI Developer",
      email: "gurbanikaur1702@gmail.com",
      skills: {
        create: [
          { name: "Python", level: "Intermediate" },
          { name: "Node.js", level: "Intermediate" },
          { name: "TypeScript", level: "Intermediate" },
          { name: "MySQL", level: "Intermediate" },
        ],
      },
      projects: {
        create: [
          {
            title: "Me API Playground",
            description: "A personal profile API playground for the Process Venue assessment",
            url: "https://github.com/gurbanikaur/me-api-playground",
          },
        ],
      },
    },
  });

  console.log("Seeded profile:", profile);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

