/*
  Warnings:

  - You are about to drop the column `assetbrand` on the `AssetInfo` table. All the data in the column will be lost.
  - You are about to drop the column `assettypeid` on the `AssetInfo` table. All the data in the column will be lost.
  - You are about to drop the column `facility_zone` on the `AssetInfo` table. All the data in the column will be lost.
  - You are about to drop the column `installed_date` on the `AssetInfo` table. All the data in the column will be lost.
  - The primary key for the `Tenants` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uniqueid` on the `Tenants` table. All the data in the column will be lost.
  - You are about to drop the column `tenantId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `assettypeid` on the `Workorder` table. All the data in the column will be lost.
  - You are about to drop the column `assignedTo` on the `Workorder` table. All the data in the column will be lost.
  - You are about to drop the column `wo_nte` on the `Workorder` table. All the data in the column will be lost.
  - You are about to drop the column `work_summary` on the `Workorder` table. All the data in the column will be lost.
  - You are about to drop the `AssetSymptom` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Assetcatalog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FFAattachments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FFAsurvey` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FFAsurveysections` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FMTrainingTracker` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Lookbook` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StoreTurnOverTracker` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Tenants` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,name]` on the table `Tenants` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `asset_spec_addl_info` to the `AssetInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `assetcatalogid` to the `AssetInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zone` to the `AssetInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Tenants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tenantid` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `assignedto` to the `Workorder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nte` to the `Workorder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resolution_summary` to the `Workorder` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AssetInfo" DROP CONSTRAINT "AssetInfo_assettypeid_fkey";

-- DropForeignKey
ALTER TABLE "AssetInfo" DROP CONSTRAINT "AssetInfo_tenantid_fkey";

-- DropForeignKey
ALTER TABLE "AssetSymptom" DROP CONSTRAINT "AssetSymptom_assettypeid_fkey";

-- DropForeignKey
ALTER TABLE "AssetSymptom" DROP CONSTRAINT "AssetSymptom_createdBy_fkey";

-- DropForeignKey
ALTER TABLE "AssetSymptom" DROP CONSTRAINT "AssetSymptom_updatedBy_fkey";

-- DropForeignKey
ALTER TABLE "Assetcatalog" DROP CONSTRAINT "Assetcatalog_createdBy_fkey";

-- DropForeignKey
ALTER TABLE "Assetcatalog" DROP CONSTRAINT "Assetcatalog_storeid_fkey";

-- DropForeignKey
ALTER TABLE "Assetcatalog" DROP CONSTRAINT "Assetcatalog_tenantid_fkey";

-- DropForeignKey
ALTER TABLE "Assetcatalog" DROP CONSTRAINT "Assetcatalog_updatedBy_fkey";

-- DropForeignKey
ALTER TABLE "Audit" DROP CONSTRAINT "Audit_tenantid_fkey";

-- DropForeignKey
ALTER TABLE "FFAattachments" DROP CONSTRAINT "FFAattachments_createdby_fkey";

-- DropForeignKey
ALTER TABLE "FFAattachments" DROP CONSTRAINT "FFAattachments_ffasectionid_fkey";

-- DropForeignKey
ALTER TABLE "FFAattachments" DROP CONSTRAINT "FFAattachments_tenantid_fkey";

-- DropForeignKey
ALTER TABLE "FFAattachments" DROP CONSTRAINT "FFAattachments_updatedby_fkey";

-- DropForeignKey
ALTER TABLE "FFAsurvey" DROP CONSTRAINT "FFAsurvey_createdby_fkey";

-- DropForeignKey
ALTER TABLE "FFAsurvey" DROP CONSTRAINT "FFAsurvey_facilitymanager_fkey";

-- DropForeignKey
ALTER TABLE "FFAsurvey" DROP CONSTRAINT "FFAsurvey_storeid_fkey";

-- DropForeignKey
ALTER TABLE "FFAsurvey" DROP CONSTRAINT "FFAsurvey_tenantid_fkey";

-- DropForeignKey
ALTER TABLE "FFAsurvey" DROP CONSTRAINT "FFAsurvey_updatedby_fkey";

-- DropForeignKey
ALTER TABLE "FFAsurveysections" DROP CONSTRAINT "FFAsurveysections_createdby_fkey";

-- DropForeignKey
ALTER TABLE "FFAsurveysections" DROP CONSTRAINT "FFAsurveysections_facilitymanager_fkey";

-- DropForeignKey
ALTER TABLE "FFAsurveysections" DROP CONSTRAINT "FFAsurveysections_ffasurveyid_fkey";

-- DropForeignKey
ALTER TABLE "FFAsurveysections" DROP CONSTRAINT "FFAsurveysections_tenantid_fkey";

-- DropForeignKey
ALTER TABLE "FFAsurveysections" DROP CONSTRAINT "FFAsurveysections_updatedby_fkey";

-- DropForeignKey
ALTER TABLE "FMTrainingTracker" DROP CONSTRAINT "FMTrainingTracker_tenantid_fkey";

-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_tenantid_fkey";

-- DropForeignKey
ALTER TABLE "Lookbook" DROP CONSTRAINT "Lookbook_tenantid_fkey";

-- DropForeignKey
ALTER TABLE "Picklist" DROP CONSTRAINT "Picklist_tenantid_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_tenantid_fkey";

-- DropForeignKey
ALTER TABLE "Proposal" DROP CONSTRAINT "Proposal_tenantid_fkey";

-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_tenantid_fkey";

-- DropForeignKey
ALTER TABLE "StoreTurnOverTracker" DROP CONSTRAINT "StoreTurnOverTracker_tenantid_fkey";

-- DropForeignKey
ALTER TABLE "Storelocations" DROP CONSTRAINT "Storelocations_tenantid_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_tenantId_fkey";

-- DropForeignKey
ALTER TABLE "Vendor" DROP CONSTRAINT "Vendor_tenantid_fkey";

-- DropForeignKey
ALTER TABLE "Workorder" DROP CONSTRAINT "Workorder_assettypeid_fkey";

-- DropForeignKey
ALTER TABLE "Workorder" DROP CONSTRAINT "Workorder_assignedTo_fkey";

-- DropForeignKey
ALTER TABLE "Workorder" DROP CONSTRAINT "Workorder_tenantid_fkey";

-- DropIndex
DROP INDEX "Tenants_id_uniqueid_key";

-- DropIndex
DROP INDEX "Tenants_uniqueid_key";

-- AlterTable
ALTER TABLE "AssetInfo" DROP COLUMN "assetbrand",
DROP COLUMN "assettypeid",
DROP COLUMN "facility_zone",
DROP COLUMN "installed_date",
ADD COLUMN     "asset_spec_addl_info" JSONB NOT NULL,
ADD COLUMN     "assetcatalogid" INTEGER NOT NULL,
ADD COLUMN     "brand" TEXT,
ADD COLUMN     "install_date" TIMESTAMP(3),
ADD COLUMN     "job_num" TEXT,
ADD COLUMN     "zone" TEXT NOT NULL,
ALTER COLUMN "tenantid" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Audit" ALTER COLUMN "tenantid" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Invoice" ALTER COLUMN "tenantid" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Picklist" ALTER COLUMN "tenantid" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "tenantid" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Proposal" ALTER COLUMN "tenantid" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Role" ALTER COLUMN "tenantid" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Storelocations" ALTER COLUMN "tenantid" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Tenants" DROP CONSTRAINT "Tenants_pkey",
DROP COLUMN "uniqueid",
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE VARCHAR(100),
ADD CONSTRAINT "Tenants_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Tenants_id_seq";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "tenantId",
ADD COLUMN     "tenantid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Vendor" ALTER COLUMN "tenantid" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Workorder" DROP COLUMN "assettypeid",
DROP COLUMN "assignedTo",
DROP COLUMN "wo_nte",
DROP COLUMN "work_summary",
ADD COLUMN     "assetcatalogid" INTEGER,
ADD COLUMN     "assignedto" INTEGER NOT NULL,
ADD COLUMN     "nte" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "resolution_summary" TEXT NOT NULL,
ALTER COLUMN "tenantid" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "AssetSymptom";

-- DropTable
DROP TABLE "Assetcatalog";

-- DropTable
DROP TABLE "FFAattachments";

-- DropTable
DROP TABLE "FFAsurvey";

-- DropTable
DROP TABLE "FFAsurveysections";

-- DropTable
DROP TABLE "FMTrainingTracker";

-- DropTable
DROP TABLE "Lookbook";

-- DropTable
DROP TABLE "StoreTurnOverTracker";

-- CreateTable
CREATE TABLE "Equipmentcatalog" (
    "id" VARCHAR(100) NOT NULL,
    "name" TEXT NOT NULL,
    "catagory" TEXT NOT NULL,
    "primarytrade" TEXT NOT NULL,
    "default_wo_priority" TEXT,
    "avg_repair_nte" DOUBLE PRECISION,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL DEFAULT -2,

    CONSTRAINT "Equipmentcatalog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EquipmentSymptoms" (
    "id" VARCHAR(100) NOT NULL,
    "equipmentcatlogid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "EquipmentSymptoms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EquipmentMaintLibrary" (
    "id" VARCHAR(100) NOT NULL,
    "symptomid" TEXT NOT NULL,
    "libtype" TEXT NOT NULL,
    "equipmentmodelnum" TEXT,
    "name" TEXT NOT NULL,
    "attachments" TEXT,
    "addl_useful_info" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "EquipmentMaintLibrary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetCatalog" (
    "id" SERIAL NOT NULL,
    "tenantid" TEXT NOT NULL,
    "storeid" VARCHAR(100) NOT NULL,
    "equipment_reference_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "primarytrade" TEXT NOT NULL,
    "default_wo_priority" TEXT,
    "avg_repair_nte" DOUBLE PRECISION,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL DEFAULT -2,
    "updatedBy" INTEGER NOT NULL DEFAULT -2,

    CONSTRAINT "AssetCatalog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Equipmentcatalog_name_key" ON "Equipmentcatalog"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tenants_name_key" ON "Tenants"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tenants_id_name_key" ON "Tenants"("id", "name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_tenantid_fkey" FOREIGN KEY ("tenantid") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_tenantid_fkey" FOREIGN KEY ("tenantid") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_tenantid_fkey" FOREIGN KEY ("tenantid") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Picklist" ADD CONSTRAINT "Picklist_tenantid_fkey" FOREIGN KEY ("tenantid") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Audit" ADD CONSTRAINT "Audit_tenantid_fkey" FOREIGN KEY ("tenantid") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Storelocations" ADD CONSTRAINT "Storelocations_tenantid_fkey" FOREIGN KEY ("tenantid") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EquipmentSymptoms" ADD CONSTRAINT "EquipmentSymptoms_equipmentcatlogid_fkey" FOREIGN KEY ("equipmentcatlogid") REFERENCES "Equipmentcatalog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EquipmentMaintLibrary" ADD CONSTRAINT "EquipmentMaintLibrary_symptomid_fkey" FOREIGN KEY ("symptomid") REFERENCES "EquipmentSymptoms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetCatalog" ADD CONSTRAINT "AssetCatalog_tenantid_fkey" FOREIGN KEY ("tenantid") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetCatalog" ADD CONSTRAINT "AssetCatalog_storeid_fkey" FOREIGN KEY ("storeid") REFERENCES "Storelocations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetCatalog" ADD CONSTRAINT "AssetCatalog_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetCatalog" ADD CONSTRAINT "AssetCatalog_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetInfo" ADD CONSTRAINT "AssetInfo_tenantid_fkey" FOREIGN KEY ("tenantid") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetInfo" ADD CONSTRAINT "AssetInfo_assetcatalogid_fkey" FOREIGN KEY ("assetcatalogid") REFERENCES "AssetCatalog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workorder" ADD CONSTRAINT "Workorder_assetcatalogid_fkey" FOREIGN KEY ("assetcatalogid") REFERENCES "AssetCatalog"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workorder" ADD CONSTRAINT "Workorder_assignedto_fkey" FOREIGN KEY ("assignedto") REFERENCES "Vendor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workorder" ADD CONSTRAINT "Workorder_tenantid_fkey" FOREIGN KEY ("tenantid") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_tenantid_fkey" FOREIGN KEY ("tenantid") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_tenantid_fkey" FOREIGN KEY ("tenantid") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vendor" ADD CONSTRAINT "Vendor_tenantid_fkey" FOREIGN KEY ("tenantid") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
