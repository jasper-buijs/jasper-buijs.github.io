-- CreateEnum
CREATE TYPE "F1PagesPostType" AS ENUM ('HEADER', 'NORMAL', 'ALERT');

-- CreateTable
CREATE TABLE "F1PagesData" (
    "id" SERIAL NOT NULL,
    "page" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "onTop" BOOLEAN NOT NULL DEFAULT false,
    "type" "F1PagesPostType" NOT NULL DEFAULT 'NORMAL',
    "content" JSONB NOT NULL,

    CONSTRAINT "F1PagesData_pkey" PRIMARY KEY ("id")
);
