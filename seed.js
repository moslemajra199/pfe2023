import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const product = await prisma.product.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Round Table',
      description: 'This a simple tabme',
      unit_price: 50000,
      type: 'For Sale',
      quantityInStock: 5,
      bom: {
        connectOrCreate: {
          where: {
            id: 10
          },
          create: {
            description: "this is a test",
            quantity: 20
          }
        }
      },
    },
  });

  console.log({ product });
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log('A product has been addes successfly to the database');
  })

  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
