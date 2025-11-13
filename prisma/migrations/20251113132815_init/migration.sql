/*
  Warnings:

  - You are about to drop the column `ProductButtonStyle` on the `ShopSettings` table. All the data in the column will be lost.
  - You are about to drop the column `productShpwIcon` on the `ShopSettings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ShopSettings" DROP COLUMN "ProductButtonStyle",
DROP COLUMN "productShpwIcon",
ADD COLUMN     "productButtonStyle" TEXT,
ADD COLUMN     "productShowIcon" BOOLEAN DEFAULT true;
