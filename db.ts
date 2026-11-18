declare global {
  var prisma: PrismaClient | undefined;
}

// import { PrismaClient } from "@prisma/client"; // v6 -> v7
import { PrismaClient } from "./prisma/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = global.prisma || new PrismaClient({ adapter });
if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma