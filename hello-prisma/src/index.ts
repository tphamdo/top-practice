import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'ariadne@prisma.io',
      name: 'Ariadne',
      posts: {
        create: [
          {
            title: 'My first day at Prisma',
            categories: {
              create: {
                name: 'Office',
              },
            },
          },
          {
            title: 'How to connect to a SQLite database',
            categories: {
              create: [{name: 'Databases'}, {name: 'Tutorials'}],
            },
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
