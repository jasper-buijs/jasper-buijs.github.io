/*
  Warnings:

  - You are about to drop the column `courseCode` on the `Exam` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Exam" DROP COLUMN "courseCode",
ADD COLUMN     "kulCourseCode" TEXT,
ADD COLUMN     "vubCourseCode" TEXT;
