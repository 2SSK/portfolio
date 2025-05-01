import { PrismaClient } from "@prisma/client";

// Properly declare global namespace augmentation
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Set up Prisma with connection pooling
const setupPrisma = (): PrismaClient => {
  if (global.prisma) {
    return global.prisma;
  }
  
  const client = new PrismaClient();
  
  if (process.env.NODE_ENV !== "production") {
    global.prisma = client;
    console.log("Prisma client initialized (development)");
  } else {
    console.log("Prisma client initialized (production)");
  }
  
  return client;
};

export const prisma = setupPrisma();
