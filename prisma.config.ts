import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  // engine: "classic", // v6 -> v7
  datasource: {
    url: env("DATABASE_URL"),
  },
});
