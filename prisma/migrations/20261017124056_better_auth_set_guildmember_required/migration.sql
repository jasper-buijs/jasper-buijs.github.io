/*
  Warnings:

  - Made the column `guildMember` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "user" ALTER COLUMN "guildMember" SET NOT NULL,
ALTER COLUMN "guildMember" SET DEFAULT false;
