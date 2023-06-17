/*
  Warnings:

  - You are about to drop the `ProductionOperation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Machine" DROP CONSTRAINT "Machine_operationId_fkey";

-- DropForeignKey
ALTER TABLE "ProductionOperation" DROP CONSTRAINT "ProductionOperation_productId_fkey";

-- DropTable
DROP TABLE "ProductionOperation";

-- CreateTable
CREATE TABLE "ManufacturingOperation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "operationSquence" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "planned_start_date" TIMESTAMP(3),
    "planned_end_date" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ManufacturingOperation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Machine" ADD CONSTRAINT "Machine_operationId_fkey" FOREIGN KEY ("operationId") REFERENCES "ManufacturingOperation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ManufacturingOperation" ADD CONSTRAINT "ManufacturingOperation_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
