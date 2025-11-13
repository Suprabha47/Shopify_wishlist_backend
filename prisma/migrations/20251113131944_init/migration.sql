/*
  Warnings:

  - You are about to drop the column `ProductbuttonLabel` on the `ShopSettings` table. All the data in the column will be lost.
  - You are about to drop the column `backgroundColor` on the `ShopSettings` table. All the data in the column will be lost.
  - You are about to drop the column `collectionIconColor` on the `ShopSettings` table. All the data in the column will be lost.
  - You are about to drop the column `productIconColor` on the `ShopSettings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ShopSettings" DROP COLUMN "ProductbuttonLabel",
DROP COLUMN "backgroundColor",
DROP COLUMN "collectionIconColor",
DROP COLUMN "productIconColor";
