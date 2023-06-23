-- DropForeignKey
ALTER TABLE "Component" DROP CONSTRAINT "Component_bomId_fkey";

-- DropForeignKey
ALTER TABLE "ManufacturingOder" DROP CONSTRAINT "ManufacturingOder_productId_fkey";

-- AddForeignKey
ALTER TABLE "Component" ADD CONSTRAINT "Component_bomId_fkey" FOREIGN KEY ("bomId") REFERENCES "Bom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ManufacturingOder" ADD CONSTRAINT "ManufacturingOder_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
