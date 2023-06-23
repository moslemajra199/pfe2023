/*
  Warnings:

  - You are about to drop the column `name` on the `Bom` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Bom" DROP COLUMN "name",
ADD COLUMN     "description" TEXT;
