/*
  Warnings:

  - You are about to drop the column `content` on the `F1PagesData` table. All the data in the column will be lost.
  - You are about to drop the column `onTop` on the `F1PagesData` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `F1PagesData` table. All the data in the column will be lost.
  - Added the required column `link` to the `F1PagesData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "F1PagesData" DROP COLUMN "content",
DROP COLUMN "onTop",
DROP COLUMN "type",
ADD COLUMN     "link" TEXT NOT NULL;

-- DropEnum
DROP TYPE "F1PagesPostType";
