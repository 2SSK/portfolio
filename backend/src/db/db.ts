import { PrismaClient } from "@prisma/client";

// Use SQLite for development, PostgreSQL for production
const setupPrisma = (): PrismaClient => {
  // For development
  if (process.env.NODE_ENV !== "production") {
    console.log("Using SQLite for development");
    return new PrismaClient();
  }

  // For production
  console.log("Using PostgreSQL for production");
  return new PrismaClient();
};

const prisma = setupPrisma();
export { prisma };
