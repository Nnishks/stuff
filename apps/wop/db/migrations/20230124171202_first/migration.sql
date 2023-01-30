/*
  Warnings:

  - The primary key for the `Tenants` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `customername` on the `Tenants` table. All the data in the column will be lost.
  - You are about to drop the column `uniqueid` on the `Tenants` table. All the data in the column will be lost.
  - You are about to drop the column `tenantId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `AssetInfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AssetSymptom` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Assetcatalog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FFAattachments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FFAsurvey` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FFAsurveysections` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FMTrainingTracker` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Invoice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InvoiceLineItems` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Lookbook` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Proposal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProposalLineItems` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StoreTurnOverTracker` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Storelocations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vendor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Workorder` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Tenants` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[vendorname]` on the table `Tenants` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,name]` on the table `Tenants` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Tenants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vendorname` to the `Tenants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tenantid` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AssetInfo" DROP CONSTRAINT "AssetInfo_assettypeid_fkey";

-- DropForeignKey
ALTER TABLE "AssetInfo" DROP CONSTRAINT "AssetInfo_createdBy_fkey";

-- DropForeignKey
ALTER TABLE "AssetInfo" DROP CONSTRAINT "AssetInfo_storeid_fkey";

-- DropForeignKey
ALTER TABLE "AssetInfo" DROP CONSTRAINT "AssetInfo_tenantid_fkey";

-- DropForeignKey
ALTER TABLE "AssetInfo" DROP CONSTRAINT "AssetInfo_updatedBy_fkey";

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
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_approvedBy_fkey";

-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_createdBy_fkey";

-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_tenantid_fkey";

-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_updatedBy_fkey";

-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_vendorid_fkey";

-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_workorderid_fkey";

-- DropForeignKey
ALTER TABLE "InvoiceLineItems" DROP CONSTRAINT "InvoiceLineItems_createdBy_fkey";

-- DropForeignKey
ALTER TABLE "InvoiceLineItems" DROP CONSTRAINT "InvoiceLineItems_invoiceid_fkey";

-- DropForeignKey
ALTER TABLE "InvoiceLineItems" DROP CONSTRAINT "InvoiceLineItems_updatedBy_fkey";

-- DropForeignKey
ALTER TABLE "Lookbook" DROP CONSTRAINT "Lookbook_tenantid_fkey";

-- DropForeignKey
ALTER TABLE "Picklist" DROP CONSTRAINT "Picklist_tenantid_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_tenantid_fkey";

-- DropForeignKey
ALTER TABLE "Proposal" DROP CONSTRAINT "Proposal_approvedBy_fkey";

-- DropForeignKey
ALTER TABLE "Proposal" DROP CONSTRAINT "Proposal_createdBy_fkey";

-- DropForeignKey
ALTER TABLE "Proposal" DROP CONSTRAINT "Proposal_storeid_fkey";

-- DropForeignKey
ALTER TABLE "Proposal" DROP CONSTRAINT "Proposal_tenantid_fkey";

-- DropForeignKey
ALTER TABLE "Proposal" DROP CONSTRAINT "Proposal_updatedBy_fkey";

-- DropForeignKey
ALTER TABLE "Proposal" DROP CONSTRAINT "Proposal_vendorid_fkey";

-- DropForeignKey
ALTER TABLE "Proposal" DROP CONSTRAINT "Proposal_workorderid_fkey";

-- DropForeignKey
ALTER TABLE "ProposalLineItems" DROP CONSTRAINT "ProposalLineItems_createdBy_fkey";

-- DropForeignKey
ALTER TABLE "ProposalLineItems" DROP CONSTRAINT "ProposalLineItems_proposalid_fkey";

-- DropForeignKey
ALTER TABLE "ProposalLineItems" DROP CONSTRAINT "ProposalLineItems_updatedBy_fkey";

-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_tenantid_fkey";

-- DropForeignKey
ALTER TABLE "StoreTurnOverTracker" DROP CONSTRAINT "StoreTurnOverTracker_tenantid_fkey";

-- DropForeignKey
ALTER TABLE "Storelocations" DROP CONSTRAINT "Storelocations_createdby_fkey";

-- DropForeignKey
ALTER TABLE "Storelocations" DROP CONSTRAINT "Storelocations_facilitymanager_fkey";

-- DropForeignKey
ALTER TABLE "Storelocations" DROP CONSTRAINT "Storelocations_leadfacilitymanager_fkey";

-- DropForeignKey
ALTER TABLE "Storelocations" DROP CONSTRAINT "Storelocations_primarypointofcontact_fkey";

-- DropForeignKey
ALTER TABLE "Storelocations" DROP CONSTRAINT "Storelocations_storemanager_fkey";

-- DropForeignKey
ALTER TABLE "Storelocations" DROP CONSTRAINT "Storelocations_tenantid_fkey";

-- DropForeignKey
ALTER TABLE "Storelocations" DROP CONSTRAINT "Storelocations_updatedby_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_tenantId_fkey";

-- DropForeignKey
ALTER TABLE "Vendor" DROP CONSTRAINT "Vendor_createdBy_fkey";

-- DropForeignKey
ALTER TABLE "Vendor" DROP CONSTRAINT "Vendor_tenantid_fkey";

-- DropForeignKey
ALTER TABLE "Vendor" DROP CONSTRAINT "Vendor_updatedBy_fkey";

-- DropForeignKey
ALTER TABLE "Workorder" DROP CONSTRAINT "Workorder_assetid_fkey";

-- DropForeignKey
ALTER TABLE "Workorder" DROP CONSTRAINT "Workorder_assettypeid_fkey";

-- DropForeignKey
ALTER TABLE "Workorder" DROP CONSTRAINT "Workorder_assignedTo_fkey";

-- DropForeignKey
ALTER TABLE "Workorder" DROP CONSTRAINT "Workorder_createdBy_fkey";

-- DropForeignKey
ALTER TABLE "Workorder" DROP CONSTRAINT "Workorder_storeid_fkey";

-- DropForeignKey
ALTER TABLE "Workorder" DROP CONSTRAINT "Workorder_tenantid_fkey";

-- DropForeignKey
ALTER TABLE "Workorder" DROP CONSTRAINT "Workorder_updatedBy_fkey";

-- DropIndex
DROP INDEX "Tenants_customername_key";

-- DropIndex
DROP INDEX "Tenants_id_uniqueid_key";

-- DropIndex
DROP INDEX "Tenants_uniqueid_key";

-- AlterTable
ALTER TABLE "Audit" ALTER COLUMN "tenantid" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Picklist" ALTER COLUMN "tenantid" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "tenantid" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Role" ALTER COLUMN "tenantid" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Tenants" DROP CONSTRAINT "Tenants_pkey",
DROP COLUMN "customername",
DROP COLUMN "uniqueid",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "vendorname" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE VARCHAR(100),
ADD CONSTRAINT "Tenants_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Tenants_id_seq";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "tenantId",
ADD COLUMN     "tenantid" TEXT NOT NULL;

-- DropTable
DROP TABLE "AssetInfo";

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
DROP TABLE "Invoice";

-- DropTable
DROP TABLE "InvoiceLineItems";

-- DropTable
DROP TABLE "Lookbook";

-- DropTable
DROP TABLE "Proposal";

-- DropTable
DROP TABLE "ProposalLineItems";

-- DropTable
DROP TABLE "StoreTurnOverTracker";

-- DropTable
DROP TABLE "Storelocations";

-- DropTable
DROP TABLE "Vendor";

-- DropTable
DROP TABLE "Workorder";

-- CreateIndex
CREATE UNIQUE INDEX "Tenants_name_key" ON "Tenants"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tenants_vendorname_key" ON "Tenants"("vendorname");

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
