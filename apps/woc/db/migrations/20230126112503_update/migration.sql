/*
  Warnings:

  - You are about to drop the column `address` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `postalcode` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `primary_email` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `stateprovince` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `vendorname` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `vendortype` on the `Vendor` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[globaluniqueid]` on the table `Invoice` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[globaluniqueid]` on the table `Proposal` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `globaluniqueid` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `globaluniqueid` to the `Proposal` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EquipmentSymptoms" DROP CONSTRAINT "EquipmentSymptoms_equipmentcatlogid_fkey";

-- DropIndex
DROP INDEX "Vendor_vendorname_key";

-- AlterTable
ALTER TABLE "AssetInfo" ADD COLUMN     "audit_comments" TEXT;

-- AlterTable
ALTER TABLE "EquipmentSymptoms" ALTER COLUMN "equipmentcatlogid" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Invoice" ADD COLUMN     "globaluniqueid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Proposal" ADD COLUMN     "globaluniqueid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Vendor" DROP COLUMN "address",
DROP COLUMN "city",
DROP COLUMN "country",
DROP COLUMN "postalcode",
DROP COLUMN "primary_email",
DROP COLUMN "stateprovince",
DROP COLUMN "vendorname",
DROP COLUMN "vendortype",
ADD COLUMN     "Pemail" VARCHAR(100);

-- CreateTable
CREATE TABLE "StoreAttachments" (
    "id" SERIAL NOT NULL,
    "tenantid" TEXT NOT NULL,
    "storeid" VARCHAR(100) NOT NULL,
    "attachmentname" TEXT NOT NULL,
    "attachmenturl" TEXT NOT NULL,
    "contenttype" TEXT,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL DEFAULT -2,
    "updatedBy" INTEGER NOT NULL DEFAULT -2,

    CONSTRAINT "StoreAttachments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetAttachments" (
    "id" SERIAL NOT NULL,
    "tenantid" TEXT NOT NULL,
    "assetid" INTEGER NOT NULL,
    "attachmentname" TEXT NOT NULL,
    "attachmenturl" TEXT NOT NULL,
    "contenttype" TEXT,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL DEFAULT -2,
    "updatedBy" INTEGER NOT NULL DEFAULT -2,

    CONSTRAINT "AssetAttachments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WOAttachments" (
    "id" SERIAL NOT NULL,
    "tenantid" TEXT NOT NULL,
    "object" TEXT NOT NULL,
    "objectrefid" TEXT NOT NULL,
    "attachmentname" TEXT NOT NULL,
    "attachmenturl" TEXT NOT NULL,
    "contenttype" TEXT,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL DEFAULT -2,
    "updatedBy" INTEGER NOT NULL DEFAULT -2,

    CONSTRAINT "WOAttachments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VendorAttachments" (
    "id" SERIAL NOT NULL,
    "tenantid" TEXT NOT NULL,
    "vendorid" INTEGER NOT NULL,
    "attachmentname" TEXT NOT NULL,
    "attachmenturl" TEXT NOT NULL,
    "contenttype" TEXT,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL DEFAULT -2,
    "updatedBy" INTEGER NOT NULL DEFAULT -2,

    CONSTRAINT "VendorAttachments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_globaluniqueid_key" ON "Invoice"("globaluniqueid");

-- CreateIndex
CREATE UNIQUE INDEX "Proposal_globaluniqueid_key" ON "Proposal"("globaluniqueid");

-- AddForeignKey
ALTER TABLE "StoreAttachments" ADD CONSTRAINT "StoreAttachments_tenantid_fkey" FOREIGN KEY ("tenantid") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreAttachments" ADD CONSTRAINT "StoreAttachments_storeid_fkey" FOREIGN KEY ("storeid") REFERENCES "Storelocations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreAttachments" ADD CONSTRAINT "StoreAttachments_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreAttachments" ADD CONSTRAINT "StoreAttachments_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EquipmentSymptoms" ADD CONSTRAINT "EquipmentSymptoms_equipmentcatlogid_fkey" FOREIGN KEY ("equipmentcatlogid") REFERENCES "EquipmentCatalog"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetAttachments" ADD CONSTRAINT "AssetAttachments_tenantid_fkey" FOREIGN KEY ("tenantid") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetAttachments" ADD CONSTRAINT "AssetAttachments_assetid_fkey" FOREIGN KEY ("assetid") REFERENCES "AssetInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetAttachments" ADD CONSTRAINT "AssetAttachments_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetAttachments" ADD CONSTRAINT "AssetAttachments_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WOAttachments" ADD CONSTRAINT "WOAttachments_tenantid_fkey" FOREIGN KEY ("tenantid") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WOAttachments" ADD CONSTRAINT "WOAttachments_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WOAttachments" ADD CONSTRAINT "WOAttachments_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VendorAttachments" ADD CONSTRAINT "VendorAttachments_tenantid_fkey" FOREIGN KEY ("tenantid") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VendorAttachments" ADD CONSTRAINT "VendorAttachments_vendorid_fkey" FOREIGN KEY ("vendorid") REFERENCES "Vendor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VendorAttachments" ADD CONSTRAINT "VendorAttachments_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VendorAttachments" ADD CONSTRAINT "VendorAttachments_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
