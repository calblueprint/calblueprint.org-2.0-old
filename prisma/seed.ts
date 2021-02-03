/* eslint-disable no-console */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  const test = await prisma.test.create({
    data: {
      sample: 'hello',
      bio: 'This is me',
      jobTitle: 'Developer',
    },
  });
  console.log({ test });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
