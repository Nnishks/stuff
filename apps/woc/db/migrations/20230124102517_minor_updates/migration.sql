/*
  Warnings:

  - The primary key for the `Profile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Role` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Equipmentcatalog` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EquipmentSymptoms" DROP CONSTRAINT "EquipmentSymptoms_equipmentcatlogid_fkey";

-- AlterTable
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE VARCHAR(100),
ADD CONSTRAINT "Profile_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Profile_id_seq";

-- AlterTable
ALTER TABLE "Role" DROP CONSTRAINT "Role_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE VARCHAR(100),
ADD CONSTRAINT "Role_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Role_id_seq";

-- AlterTable
ALTER TABLE "Tenants" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'Active';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'Active';

-- DropTable
DROP TABLE "Equipmentcatalog";

-- CreateTable
CREATE TABLE "EquipmentCatalog" (
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

    CONSTRAINT "EquipmentCatalog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EquipmentCatalog_name_key" ON "EquipmentCatalog"("name");

-- AddForeignKey
ALTER TABLE "EquipmentSymptoms" ADD CONSTRAINT "EquipmentSymptoms_equipmentcatlogid_fkey" FOREIGN KEY ("equipmentcatlogid") REFERENCES "EquipmentCatalog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
