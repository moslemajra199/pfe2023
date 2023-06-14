import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const product = await prisma.product.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Round Table',
      description: 'This a simple rounde table for dinner',
      unit_price: 50000,
      type: 'For Sale',
      quantityInStock: 5,
      boms: {
        create: {
          name: 'screw',
          description: 'used to get table part together',
          quantity: 23,
          unit: 'piece',
        },
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
