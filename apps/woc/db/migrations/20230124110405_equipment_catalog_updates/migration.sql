/*
  Warnings:

  - You are about to drop the column `createdAt` on the `EquipmentCatalog` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `EquipmentCatalog` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `EquipmentCatalog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "EquipmentCatalog" DROP COLUMN "createdAt",
DROP COLUMN "createdBy",
DROP COLUMN "updatedAt";
