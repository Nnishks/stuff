-- CreateTable
CREATE TABLE "Tenants" (
    "id" SERIAL NOT NULL,
    "customername" TEXT NOT NULL,
    "uniqueid" TEXT NOT NULL,
    "hostname" TEXT NOT NULL,
    "bucketname" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "foldername" TEXT NOT NULL,
    "secretkey" TEXT NOT NULL,
    "accesskey" TEXT NOT NULL,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tenants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" VARCHAR(50),
    "address" TEXT,
    "city" TEXT,
    "stateorprovince" TEXT,
    "country" TEXT,
    "postalcode" VARCHAR(10),
    "officephone" VARCHAR(50),
    "homephone" VARCHAR(50),
    "alternateemail" TEXT,
    "manager" INTEGER,
    "hashedPassword" TEXT,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "profile" TEXT,
    "tenantId" INTEGER NOT NULL,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3),
    "handle" TEXT NOT NULL,
    "hashedSessionToken" TEXT,
    "antiCSRFToken" TEXT,
    "publicData" TEXT,
    "privateData" TEXT,
    "userId" INTEGER,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Token" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "hashedToken" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "sentTo" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "tenantid" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "tenantid" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "permissions" JSONB,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Picklist" (
    "id" SERIAL NOT NULL,
    "tenantid" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "uniquename" TEXT NOT NULL,
    "description" TEXT,
    "valueName" TEXT NOT NULL,
    "color" TEXT,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Picklist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Audit" (
    "id" SERIAL NOT NULL,
    "tenantid" INTEGER NOT NULL,
    "object" TEXT NOT NULL,
    "field" TEXT NOT NULL,
    "recordid" INTEGER NOT NULL,
    "changedfrom" TEXT NOT NULL,
    "changedto" TEXT NOT NULL,
    "createdby" INTEGER NOT NULL DEFAULT -2,
    "createddate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedby" INTEGER NOT NULL DEFAULT -2,
    "updateddate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Audit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Storelocations" (
    "id" VARCHAR(100) NOT NULL,
    "tenantid" INTEGER NOT NULL,
    "storename" TEXT,
    "storeemail" TEXT,
    "concept" TEXT,
    "dma" TEXT,
    "status" TEXT,
    "company" TEXT,
    "phonenumber" VARCHAR(50),
    "faxnumber" VARCHAR(50),
    "regioncode" TEXT,
    "region" TEXT,
    "latitude" TEXT,
    "longitude" TEXT,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "stateprovince" TEXT NOT NULL,
    "postalcode" VARCHAR(20),
    "country" TEXT NOT NULL,
    "primarypointofcontact" INTEGER,
    "storemanager" INTEGER,
    "facilitymanager" INTEGER,
    "storeopendate" TIMESTAMP(3),
    "isffasurveyrequired" BOOLEAN DEFAULT true,
    "leadfacilitymanager" INTEGER,
    "remodeldate" TIMESTAMP(3),
    "refreshdate" TIMESTAMP(3),
    "storecloseddate" TIMESTAMP(3),
    "subvenue" TEXT,
    "venue" TEXT,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,
    "createdby" INTEGER NOT NULL DEFAULT -2,
    "updatedby" INTEGER NOT NULL DEFAULT -2,

    CONSTRAINT "Storelocations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FFAsurvey" (
    "id" SERIAL NOT NULL,
    "tenantid" INTEGER NOT NULL,
    "storeid" VARCHAR(100) NOT NULL,
    "status" TEXT,
    "startedat" TIMESTAMP(3),
    "completedat" TIMESTAMP(3),
    "facilitymanager" INTEGER NOT NULL DEFAULT -2,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "isarchived" BOOLEAN NOT NULL DEFAULT false,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,
    "createdby" INTEGER NOT NULL DEFAULT -2,
    "updatedby" INTEGER NOT NULL DEFAULT -2,

    CONSTRAINT "FFAsurvey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FFAsurveysections" (
    "id" SERIAL NOT NULL,
    "tenantid" INTEGER NOT NULL,
    "ffasurveyid" INTEGER NOT NULL,
    "sectionname" TEXT,
    "facilitymanager" INTEGER NOT NULL DEFAULT -2,
    "surveydata" JSON,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,
    "createdby" INTEGER NOT NULL DEFAULT -2,
    "updatedby" INTEGER NOT NULL DEFAULT -2,

    CONSTRAINT "FFAsurveysections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FFAattachments" (
    "id" SERIAL NOT NULL,
    "tenantid" INTEGER NOT NULL,
    "ffasectionid" INTEGER NOT NULL,
    "ffasectionname" TEXT,
    "subsectionname" TEXT,
    "fieldname" TEXT,
    "attachmentname" TEXT,
    "attachmenturl" TEXT,
    "contenttype" TEXT,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,
    "createdby" INTEGER NOT NULL DEFAULT -2,
    "updatedby" INTEGER NOT NULL DEFAULT -2,

    CONSTRAINT "FFAattachments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lookbook" (
    "id" SERIAL NOT NULL,
    "tenantid" INTEGER NOT NULL,
    "assetname" TEXT NOT NULL,
    "assetdesc" TEXT NOT NULL,
    "assetlink" TEXT NOT NULL,
    "fieldid" TEXT NOT NULL,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "order" INTEGER,
    "availableForDropDown" BOOLEAN,
    "availableForImageRef" BOOLEAN,

    CONSTRAINT "Lookbook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Assetcatalog" (
    "id" SERIAL NOT NULL,
    "tenantid" INTEGER NOT NULL,
    "storeid" VARCHAR(100) NOT NULL,
    "assettype" TEXT NOT NULL,
    "primarytrade" TEXT NOT NULL,
    "workorder_priority" TEXT,
    "nte" DOUBLE PRECISION,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL DEFAULT -2,
    "updatedBy" INTEGER NOT NULL DEFAULT -2,

    CONSTRAINT "Assetcatalog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetInfo" (
    "id" SERIAL NOT NULL,
    "tenantid" INTEGER NOT NULL,
    "storeid" VARCHAR(100) NOT NULL,
    "assettypeid" INTEGER NOT NULL,
    "facility_zone" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "assetbrand" TEXT,
    "model_num" TEXT,
    "serail_num" TEXT,
    "manufacuring_date" TIMESTAMP(3),
    "installed_date" TIMESTAMP(3),
    "is_leased" BOOLEAN,
    "lease_date" TIMESTAMP(3),
    "lease_period_months" DOUBLE PRECISION,
    "is_under_warranty" BOOLEAN,
    "warrantyprovider" TEXT,
    "warranty_period_months" DOUBLE PRECISION,
    "warranty_expire_date" TIMESTAMP(3),
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "condition" TEXT,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL DEFAULT -2,
    "updatedBy" INTEGER NOT NULL DEFAULT -2,

    CONSTRAINT "AssetInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetSymptom" (
    "id" SERIAL NOT NULL,
    "assettypeid" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL DEFAULT -2,
    "updatedBy" INTEGER NOT NULL DEFAULT -2,

    CONSTRAINT "AssetSymptom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workorder" (
    "id" SERIAL NOT NULL,
    "globaluniqueid" TEXT NOT NULL,
    "tenantid" INTEGER NOT NULL,
    "storeid" VARCHAR(100) NOT NULL,
    "assettypeid" INTEGER,
    "assetid" INTEGER,
    "trade" TEXT,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "scheduled_date" TIMESTAMP(3) NOT NULL,
    "original_eta" TIMESTAMP(3) NOT NULL,
    "wo_nte" DOUBLE PRECISION NOT NULL,
    "stage" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "completed_date" TIMESTAMP(3),
    "work_summary" TEXT NOT NULL,
    "root_cause" TEXT,
    "resolution_codes" TEXT,
    "assignedTo" INTEGER NOT NULL,
    "reassigned_date" TIMESTAMP(3),
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL DEFAULT -2,
    "updatedBy" INTEGER NOT NULL DEFAULT -2,

    CONSTRAINT "Workorder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Proposal" (
    "id" SERIAL NOT NULL,
    "tenantid" INTEGER NOT NULL,
    "storeid" VARCHAR(100) NOT NULL,
    "vendorid" INTEGER NOT NULL,
    "workorderid" INTEGER,
    "description" TEXT NOT NULL,
    "expiration_date" TIMESTAMP(3) NOT NULL,
    "approved_date" TIMESTAMP(3) NOT NULL,
    "approvedBy" INTEGER NOT NULL DEFAULT -2,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL DEFAULT -2,
    "updatedBy" INTEGER NOT NULL DEFAULT -2,

    CONSTRAINT "Proposal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProposalLineItems" (
    "id" SERIAL NOT NULL,
    "proposalid" INTEGER NOT NULL,
    "product_service" TEXT NOT NULL,
    "measure_type" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "notes" TEXT NOT NULL,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL DEFAULT -2,
    "updatedBy" INTEGER NOT NULL DEFAULT -2,

    CONSTRAINT "ProposalLineItems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" SERIAL NOT NULL,
    "tenantid" INTEGER NOT NULL,
    "storeid" VARCHAR(100) NOT NULL,
    "vendorid" INTEGER NOT NULL,
    "workorderid" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "expiration_date" TIMESTAMP(3) NOT NULL,
    "approved_date" TIMESTAMP(3) NOT NULL,
    "approvedBy" INTEGER NOT NULL DEFAULT -2,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL DEFAULT -2,
    "updatedBy" INTEGER NOT NULL DEFAULT -2,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvoiceLineItems" (
    "id" SERIAL NOT NULL,
    "invoiceid" INTEGER NOT NULL,
    "product_service" TEXT NOT NULL,
    "measure_type" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "notes" TEXT NOT NULL,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL DEFAULT -2,
    "updatedBy" INTEGER NOT NULL DEFAULT -2,

    CONSTRAINT "InvoiceLineItems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vendor" (
    "id" SERIAL NOT NULL,
    "tenantid" INTEGER NOT NULL,
    "vendor_num" TEXT NOT NULL,
    "vendorname" TEXT NOT NULL,
    "address" TEXT,
    "city" TEXT,
    "stateprovince" TEXT,
    "postalcode" VARCHAR(20),
    "country" TEXT,
    "vendortype" TEXT,
    "primary_email" VARCHAR(100),
    "phone_numer" VARCHAR(100),
    "fax_numer" VARCHAR(100),
    "status" TEXT,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL DEFAULT -2,
    "updatedBy" INTEGER NOT NULL DEFAULT -2,

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoreTurnOverTracker" (
    "id" SERIAL NOT NULL,
    "tenantid" INTEGER NOT NULL,
    "storeid" TEXT NOT NULL,
    "region" TEXT,
    "facilitymanager" INTEGER,
    "punchlistwalkthroughtype" TEXT NOT NULL,
    "visitonbehalf" TEXT,
    "openingdate" TIMESTAMP(3) NOT NULL,
    "visitdate" TIMESTAMP(3) NOT NULL,
    "files" TEXT,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdby" INTEGER NOT NULL DEFAULT -2,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedby" INTEGER NOT NULL,

    CONSTRAINT "StoreTurnOverTracker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FMTrainingTracker" (
    "id" SERIAL NOT NULL,
    "tenantid" INTEGER NOT NULL,
    "facilitymanager" INTEGER NOT NULL,
    "trainingtopic" TEXT NOT NULL,
    "typeoftraining" TEXT NOT NULL,
    "trainingdate" TIMESTAMP(3) NOT NULL,
    "primarytrainertype" TEXT NOT NULL,
    "primarytrainername" TEXT NOT NULL,
    "secondarytrainername" TEXT NOT NULL,
    "numberofparticipants" INTEGER NOT NULL,
    "uploadsigninsheet" TEXT NOT NULL,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdby" INTEGER NOT NULL DEFAULT -2,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedby" INTEGER NOT NULL,

    CONSTRAINT "FMTrainingTracker_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tenants_customername_key" ON "Tenants"("customername");

-- CreateIndex
CREATE UNIQUE INDEX "Tenants_uniqueid_key" ON "Tenants"("uniqueid");

-- CreateIndex
CREATE UNIQUE INDEX "Tenants_id_uniqueid_key" ON "Tenants"("id", "uniqueid");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_email_key" ON "User"("id", "email");

-- CreateIndex
CREATE UNIQUE INDEX "Session_handle_key" ON "Session"("handle");

-- CreateIndex
CREATE UNIQUE INDEX "Token_hashedToken_type_key" ON "Token"("hashedToken", "type");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_name_key" ON "Profile"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Workorder_globaluniqueid_key" ON "Workorder"("globaluniqueid");

-- CreateIndex
CREATE UNIQUE INDEX "Vendor_vendor_num_key" ON "Vendor"("vendor_num");

-- CreateIndex
CREATE UNIQUE INDEX "Vendor_vendorname_key" ON "Vendor"("vendorname");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_manager_fkey" FOREIGN KEY ("manager") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "Storelocations" ADD CONSTRAINT "Storelocations_createdby_fkey" FOREIGN KEY ("createdby") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Storelocations" ADD CONSTRAINT "Storelocations_facilitymanager_fkey" FOREIGN KEY ("facilitymanager") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Storelocations" ADD CONSTRAINT "Storelocations_leadfacilitymanager_fkey" FOREIGN KEY ("leadfacilitymanager") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Storelocations" ADD CONSTRAINT "Storelocations_primarypointofcontact_fkey" FOREIGN KEY ("primarypointofcontact") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Storelocations" ADD CONSTRAINT "Storelocations_storemanager_fkey" FOREIGN KEY ("storemanager") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Storelocations" ADD CONSTRAINT "Storelocations_updatedby_fkey" FOREIGN KEY ("updatedby") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FFAsurvey" ADD CONSTRAINT "FFAsurvey_tenantid_fkey" FOREIGN KEY ("tenantid") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FFAsurvey" ADD CONSTRAINT "FFAsurvey_createdby_fkey" FOREIGN KEY ("createdby") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FFAsurvey" ADD CONSTRAINT "FFAsurvey_facilitymanager_fkey" FOREIGN KEY ("facilitymanager") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FFAsurvey" ADD CONSTRAINT "FFAsurvey_updatedby_fkey" FOREIGN KEY ("updatedby") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FFAsurvey" ADD CONSTRAINT "FFAsurvey_storeid_fkey" FOREIGN KEY ("storeid") REFERENCES "Storelocations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FFAsurveysections" ADD CONSTRAINT "FFAsurveysections_tenantid_fkey" FOREIGN KEY ("tenantid") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FFAsurveysections" ADD CONSTRAINT "FFAsurveysections_createdby_fkey" FOREIGN KEY ("createdby") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FFAsurveysections" ADD CONSTRAINT "FFAsurveysections_facilitymanager_fkey" FOREIGN KEY ("facilitymanager") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FFAsurveysections" ADD CONSTRAINT "FFAsurveysections_updatedby_fkey" FOREIGN KEY ("updatedby") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FFAsurveysections" ADD CONSTRAINT "FFAsurveysections_ffasurveyid_fkey" FOREIGN KEY ("ffasurveyid") REFERENCES "FFAsurvey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FFAattachments" ADD CONSTRAINT "FFAattachments_tenantid_fkey" FOREIGN KEY ("tenantid") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FFAattachments" ADD CONSTRAINT "FFAattachments_createdby_fkey" FOREIGN KEY ("createdby") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FFAattachments" ADD CONSTRAINT "FFAattachments_updatedby_fkey" FOREIGN KEY ("updatedby") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FFAattachments" ADD CONSTRAINT "FFAattachments_ffasectionid_fkey" FOREIGN KEY ("ffasectionid") REFERENCES "FFAsurveysections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lookbook" ADD CONSTRAINT "Lookbook_tenantid_fkey" FOREIGN KEY ("tenantid") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assetcatalog" ADD CONSTRAINT "Assetcatalog_tenantid_fkey" FOREIGN KEY ("tenantid") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assetcatalog" ADD CONSTRAINT "Assetcatalog_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assetcatalog" ADD CONSTRAINT "Assetcatalog_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assetcatalog" ADD CONSTRAINT "Assetcatalog_storeid_fkey" FOREIGN KEY ("storeid") REFERENCES "Storelocations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetInfo" ADD CONSTRAINT "AssetInfo_tenantid_fkey" FOREIGN KEY ("tenantid") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetInfo" ADD CONSTRAINT "AssetInfo_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetInfo" ADD CONSTRAINT "AssetInfo_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetInfo" ADD CONSTRAINT "AssetInfo_storeid_fkey" FOREIGN KEY ("storeid") REFERENCES "Storelocations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetInfo" ADD CONSTRAINT "AssetInfo_assettypeid_fkey" FOREIGN KEY ("assettypeid") REFERENCES "Assetcatalog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetSymptom" ADD CONSTRAINT "AssetSymptom_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetSymptom" ADD CONSTRAINT "AssetSymptom_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetSymptom" ADD CONSTRAINT "AssetSymptom_assettypeid_fkey" FOREIGN KEY ("assettypeid") REFERENCES "Assetcatalog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workorder" ADD CONSTRAINT "Workorder_tenantid_fkey" FOREIGN KEY ("tenantid") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workorder" ADD CONSTRAINT "Workorder_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workorder" ADD CONSTRAINT "Workorder_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workorder" ADD CONSTRAINT "Workorder_storeid_fkey" FOREIGN KEY ("storeid") REFERENCES "Storelocations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workorder" ADD CONSTRAINT "Workorder_assettypeid_fkey" FOREIGN KEY ("assettypeid") REFERENCES "Assetcatalog"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workorder" ADD CONSTRAINT "Workorder_assetid_fkey" FOREIGN KEY ("assetid") REFERENCES "AssetInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workorder" ADD CONSTRAINT "Workorder_assignedTo_fkey" FOREIGN KEY ("assignedTo") REFERENCES "Vendor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_tenantid_fkey" FOREIGN KEY ("tenantid") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_approvedBy_fkey" FOREIGN KEY ("approvedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_storeid_fkey" FOREIGN KEY ("storeid") REFERENCES "Storelocations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_workorderid_fkey" FOREIGN KEY ("workorderid") REFERENCES "Workorder"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_vendorid_fkey" FOREIGN KEY ("vendorid") REFERENCES "Vendor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProposalLineItems" ADD CONSTRAINT "ProposalLineItems_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProposalLineItems" ADD CONSTRAINT "ProposalLineItems_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProposalLineItems" ADD CONSTRAINT "ProposalLineItems_proposalid_fkey" FOREIGN KEY ("proposalid") REFERENCES "Proposal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_tenantid_fkey" FOREIGN KEY ("tenantid") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_approvedBy_fkey" FOREIGN KEY ("approvedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_workorderid_fkey" FOREIGN KEY ("workorderid") REFERENCES "Workorder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_vendorid_fkey" FOREIGN KEY ("vendorid") REFERENCES "Vendor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvoiceLineItems" ADD CONSTRAINT "InvoiceLineItems_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvoiceLineItems" ADD CONSTRAINT "InvoiceLineItems_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvoiceLineItems" ADD CONSTRAINT "InvoiceLineItems_invoiceid_fkey" FOREIGN KEY ("invoiceid") REFERENCES "Invoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vendor" ADD CONSTRAINT "Vendor_tenantid_fkey" FOREIGN KEY ("tenantid") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vendor" ADD CONSTRAINT "Vendor_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vendor" ADD CONSTRAINT "Vendor_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreTurnOverTracker" ADD CONSTRAINT "StoreTurnOverTracker_tenantid_fkey" FOREIGN KEY ("tenantid") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FMTrainingTracker" ADD CONSTRAINT "FMTrainingTracker_tenantid_fkey" FOREIGN KEY ("tenantid") REFERENCES "Tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
