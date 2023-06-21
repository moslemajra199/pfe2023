/*
  Warnings:

  - You are about to drop the column `description` on the `Bom` table. All the data in the column will be lost.
  - You are about to drop the column `unit` on the `Bom` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Machine` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ManufacturingOperation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ManufacturingOrder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Material` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BomToProduct` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[productId]` on the table `Bom` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `productId` to the `Bom` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Machine" DROP CONSTRAINT "Machine_operationId_fkey";

-- DropForeignKey
ALTER TABLE "ManufacturingOperation" DROP CONSTRAINT "ManufacturingOperation_productId_fkey";

-- DropForeignKey
ALTER TABLE "ManufacturingOrder" DROP CONSTRAINT "ManufacturingOrder_productId_fkey";

-- DropForeignKey
ALTER TABLE "_BomToProduct" DROP CONSTRAINT "_BomToProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_BomToProduct" DROP CONSTRAINT "_BomToProduct_B_fkey";

-- AlterTable
ALTER TABLE "Bom" DROP COLUMN "description",
DROP COLUMN "unit",
ADD COLUMN     "productId" INTEGER NOT NULL,
ALTER COLUMN "quantity" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "image";

-- DropTable
DROP TABLE "Machine";

-- DropTable
DROP TABLE "ManufacturingOperation";

-- DropTable
DROP TABLE "ManufacturingOrder";

-- DropTable
DROP TABLE "Material";

-- DropTable
DROP TABLE "_BomToProduct";

-- DropEnum
DROP TYPE "State";

-- CreateTable
CREATE TABLE "Component" (
    "id" SERIAL NOT NULL,
    "bomId" INTEGER NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Component_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ManufacturingOder" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" INTEGER NOT NULL,
    "quantityToProduct" DOUBLE PRECISION NOT NULL,
    "sheduled_start_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sheduled_end_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ManufacturingOder_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bom_productId_key" ON "Bom"("productId");

-- AddForeignKey
ALTER TABLE "Bom" ADD CONSTRAINT "Bom_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Component" ADD CONSTRAINT "Component_bomId_fkey" FOREIGN KEY ("bomId") REFERENCES "Bom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ManufacturingOder" ADD CONSTRAINT "ManufacturingOder_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
