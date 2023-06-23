-- DropForeignKey
ALTER TABLE "Bom" DROP CONSTRAINT "Bom_productId_fkey";

-- AddForeignKey
ALTER TABLE "Bom" ADD CONSTRAINT "Bom_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
