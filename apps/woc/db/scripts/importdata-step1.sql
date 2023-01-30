-- If you would like to delete all the data
--and perform fresh import then first TRUNCATE all the tables using below,
--otherwise skip truncate.Recommended to truncate for the very first time.

TRUNCATE TABLE public."Audit" CASCADE;

TRUNCATE TABLE public."InvoiceLineItems" CASCADE;

TRUNCATE TABLE public."Invoice" CASCADE;

TRUNCATE TABLE public."ProposalLineItems" CASCADE;

TRUNCATE TABLE public."Proposal" CASCADE;

TRUNCATE TABLE public."Workorder" CASCADE;

TRUNCATE TABLE public."AssetInfo" CASCADE;

TRUNCATE TABLE public."AssetCatalog" CASCADE;

TRUNCATE TABLE public."EquipmentMaintLibrary" CASCADE;

TRUNCATE TABLE public."EquipmentSymptoms" CASCADE;

TRUNCATE TABLE public."EquipmentCatalog" CASCADE;

TRUNCATE TABLE public."Storelocations" CASCADE;

TRUNCATE TABLE public."Token" CASCADE;

TRUNCATE TABLE public."Session" CASCADE;

TRUNCATE TABLE public."User" CASCADE;

TRUNCATE TABLE public."Vendor" CASCADE;

TRUNCATE TABLE public."Profile" CASCADE;

TRUNCATE TABLE public."Role" CASCADE;

TRUNCATE TABLE public."Picklist" CASCADE;

TRUNCATE TABLE public."Tenants" CASCADE;


INSERT INTO public."Tenants"(id, name, customername, hostname, bucketname, region, foldername, secretkey, accesskey, status, isdeleted, createdat, updatedat)
	VALUES (100, 'PX', 'Panda Express', 'https:s3.aws.com', 'nexfmx', 'asia-pacific', 'panda_express','1234secretkey', '45678accesskey', 'Active', false, NOW(), NOW());

INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Venue','Store_Venue','Store Venue Types','Airport','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Venue','Store_Venue','Store Venue Types','Casino','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Venue','Store_Venue','Store Venue Types','CBD','NOW()','NOW()'); 
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Venue','Store_Venue','Store Venue Types','Hospital','NOW()','NOW()'); 
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Venue','Store_Venue','Store Venue Types','Mall','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Venue','Store_Venue','Store Venue Types','Military','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Venue','Store_Venue','Store Venue Types','Store in Store','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Venue','Store_Venue','Store Venue Types','Street DT','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Venue','Store_Venue','Store Venue Types','Street Non-DT','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Venue','Store_Venue','Store Venue Types','Theme Park','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Venue','Store_Venue','Store Venue Types','Travel Plaza','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Venue','Store_Venue','Store Venue Types','University','NOW()','NOW()');

INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Sub Venue','Store_Sub_Venue','Store Sub Venue Types','Cloud/Digital','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Sub Venue','Store_Sub_Venue','Store Sub Venue Types','End Cap','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Sub Venue','Store_Sub_Venue','Store Sub Venue Types','Food Court','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Sub Venue','Store_Sub_Venue','Store Sub Venue Types','Free Standing','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Sub Venue','Store_Sub_Venue','Store Sub Venue Types','In Line','NOW()','NOW()');

INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Status','Store_Status','Store Status','Pre-Open','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Status','Store_Status','Store Status','Active','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Status','Store_Status','Store Status','Closed','NOW()','NOW()');

INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','Bay Area','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','Cental California','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','Central Texas','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','Desert','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','East Texas','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','Grand Canyon East','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','Grand Canyon West','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','Great Lakes','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','Great Lakes East','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','Great Lakes South','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','Great Lakes West','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','Greater Los Angeles','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','Hawaii','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','Heartland','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','Inland Empire','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','Mid-Atlantic','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','Mid-Atlantic East','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','Mid-West North','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','Mid-West South','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','North East North','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','North West North','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','North West South','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','Northeast Bay','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','Northern California','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','Pacific South','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','Rocky Mountain','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','Rocky Mountain South','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','South East','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','South East North','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','South East Texas','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','South West Texas','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','Valley','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','West Los Angeles','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Store Region','Store_Region','Store Region','West Texas','NOW()','NOW()');

INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Yes No NA','Yes_No_NA','Yes No NA','Yes','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Yes No NA','Yes_No_NA','Yes No NA','No','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Yes No NA','Yes_No_NA','Yes No NA','N/A','NOW()','NOW()');

INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Yes No','Yes_No','Yes No','Yes','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Yes No','Yes_No','Yes No','No','NOW()','NOW()');

INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Category','workorder_category','Work Order Category','Insurance Claim','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Category','workorder_category','Work Order Category','Repair','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Category','workorder_category','Work Order Category','Replace','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Category','workorder_category','Work Order Category','Maintenance','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Category','workorder_category','Work Order Category','Parts Order','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Category','workorder_category','Work Order Category','Capital Expenditure','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Category','workorder_category','Work Order Category','Installation','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Category','workorder_category','Work Order Category','Warranty','NOW()','NOW()');

INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Priority','workorder_priority','Work Order Priority','Emergency','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Priority','workorder_priority','Work Order Priority','Urgent','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Priority','workorder_priority','Work Order Priority','Normal','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Priority','workorder_priority','Work Order Priority','Preventative','NOW()','NOW()');

INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Stage','workorder_stage','Work Order Stage','Pre-Open','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Stage','workorder_stage','Work Order Stage','Open','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Stage','workorder_stage','Work Order Stage','In Progress','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Stage','workorder_stage','Work Order Stage','Completed','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Stage','workorder_stage','Work Order Stage','Cancelled','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Stage','workorder_stage','Work Order Stage','Invoiced','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Stage','workorder_stage','Work Order Stage','On Hold','NOW()','NOW()');

INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Status','workorder_status','Work Order Stage: Open','WO Generated/Awaiting Acceptance','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Status','workorder_status','Work Order Stage: Open','WO Declined/Awaiting Reassignment','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Status','workorder_status','Work Order Status: In Progress','WO Generated/Awaiting Scheduling','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Status','workorder_status','Work Order Status: In Progress','Service Visit Scheduled','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Status','workorder_status','Work Order Status: In Progress','Tech Dispatched','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Status','workorder_status','Work Order Status: In Progress','Tech On-Site','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Status','workorder_status','Work Order Status: In Progress','Awaiting/Retrieving Parts','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Status','workorder_status','Work Order Status: In Progress','Awaiting NTE Increase','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Status','workorder_status','Work Order Status: In Progress','NTE Increased/Ready for dispatch','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Status','workorder_status','Work Order Status: In Progress','Awaiting Proposal','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Status','workorder_status','Work Order Status: In Progress','Proposal Approved','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Status','workorder_status','Work Order Status: In Progress','Proposal Rejected/Awaiting Revisions','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Status','workorder_status','Work Order Status: Completed','Pending Confirmation','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Status','workorder_status','Work Order Status: Completed','Confirmed/Awaiting Invoice','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Status','workorder_status','Work Order Status: Completed','No Charge','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Status','workorder_status','Work Order Status: Invoiced','Invoice Submitted','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Status','workorder_status','Work Order Status: Invoiced','Invoice Approved','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Status','workorder_status','Work Order Status: Invoiced','Invoice Rejected/Awaiting Revisions','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Status','workorder_status','Work Order Status: Invoiced','Invoice On Hold','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Work Order Status','workorder_status','Work Order Status: Invoiced','Invoice Paid','NOW()','NOW()');

INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Asset Condition','asset_condition','Works great like brand new','Great','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Asset Condition','asset_condition','Works without any issues','Good','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Asset Condition','asset_condition','Works okay','Average','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Asset Condition','asset_condition','Recommend Replacing very soon','Need Replacement','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Asset Condition','asset_condition','Not working at all, need to replace now','Inoperable','NOW()','NOW()');
INSERT INTO public."Picklist"( id, tenantid, name, uniquename, description, "valueName", "createdAt", "updatedAt") VALUES (DEFAULT,100,'Asset Condition','asset_condition','Condemned','Condemned','NOW()','NOW()');


INSERT INTO public."Role"(id, tenantid, name, description, isdeleted, "createdAt", "updatedAt")
	VALUES (10, 100, 'System Administrator', '', false, NOW(), NOW());
INSERT INTO public."Role"(id, tenantid, name, description, isdeleted, "createdAt", "updatedAt")
	VALUES (11, 100, 'RDO – Regional Director of Operations', '', false, NOW(), NOW());
INSERT INTO public."Role"(id, tenantid, name, description, isdeleted, "createdAt", "updatedAt")
	VALUES (12, 100, 'Senior Facilities Manager', '', false, NOW(), NOW());
INSERT INTO public."Role"(id, tenantid, name, description, isdeleted, "createdAt", "updatedAt")
	VALUES (13, 100, 'Facilities Manager', '', false, NOW(), NOW());
INSERT INTO public."Role"(id, tenantid, name, description, isdeleted, "createdAt", "updatedAt")
	VALUES (14, 100, 'General Manager', '', false, NOW(), NOW());

INSERT INTO public."Profile"(id, tenantid, name, isdeleted, "createdAt", "updatedAt")
	VALUES (1,100, 'Read only User', false, NOW(), NOW());
INSERT INTO public."Profile"(id, tenantid, name, isdeleted, "createdAt", "updatedAt")
	VALUES (2,100, 'Reports User', false, NOW(), NOW());
INSERT INTO public."Profile"(id, tenantid, name, isdeleted, "createdAt", "updatedAt")
	VALUES (3,100, 'Store Manager', false, NOW(), NOW());
INSERT INTO public."Profile"(id, tenantid, name, isdeleted, "createdAt", "updatedAt")
	VALUES (4,100, 'Facility Manager', false, NOW(), NOW());
INSERT INTO public."Profile"(id, tenantid, name, isdeleted, "createdAt", "updatedAt")
	VALUES (5,100, 'Adminstrator', false, NOW(), NOW());


INSERT INTO public."User"(id, name, email, phone, address, city, stateorprovince, country, postalcode, officephone, homephone, alternateemail, manager, "hashedPassword", role, profile, status, tenantid, isdeleted, "createdAt", "updatedAt")
	VALUES (-2, 'System Adminstrator', 'sysadmin@nexfmx.io', '0000000000', 'address', 'city', 'state', 'us','100000','', '','',-2,'JGFyZ29uMmlkJHY9MTkkbT02NTUzNix0PTIscD0xJHF4eVU5ZnZnamFsaXcvcXlQZXY4SnckVzBOYkFyZnc3dTFkZjR2RTIzZVNoVjhYNENpK0pKeWFQd0xpNkFiUEtLWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',10, 'admin', 'Active' ,100, false, NOW(), NOW());

INSERT INTO public."User"(id, name, email, phone, address, city, stateorprovince, country, postalcode, officephone, homephone, alternateemail, manager, "hashedPassword", role, profile, status, tenantid, isdeleted, "createdAt", "updatedAt")
	VALUES (1, 'Facility Manager 1', 'fm1@nexfmx.io', '0000000000', 'address', 'city', 'state', 'us','100000','', '','',-2,'JGFyZ29uMmlkJHY9MTkkbT02NTUzNix0PTIscD0xJHF4eVU5ZnZnamFsaXcvcXlQZXY4SnckVzBOYkFyZnc3dTFkZjR2RTIzZVNoVjhYNENpK0pKeWFQd0xpNkFiUEtLWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',13, 'manager', 'Active' ,100, false, NOW(), NOW());
INSERT INTO public."User"(id, name, email, phone, address, city, stateorprovince, country, postalcode, officephone, homephone, alternateemail, manager, "hashedPassword", role, profile,status, tenantid, isdeleted, "createdAt", "updatedAt")
	VALUES (2, 'Facility Manager 2', 'fm2@nexfmx.io', '0000000000', 'address', 'city', 'state', 'us','100000','', '','',-2,'JGFyZ29uMmlkJHY9MTkkbT02NTUzNix0PTIscD0xJHF4eVU5ZnZnamFsaXcvcXlQZXY4SnckVzBOYkFyZnc3dTFkZjR2RTIzZVNoVjhYNENpK0pKeWFQd0xpNkFiUEtLWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',13, 'manager','Active' ,100, false, NOW(), NOW());

INSERT INTO public."User"(id, name, email, phone, address, city, stateorprovince, country, postalcode, officephone, homephone, alternateemail, manager, "hashedPassword", role, profile, status, tenantid, isdeleted, "createdAt", "updatedAt")
	VALUES (3, 'General Manager 1', 'gm1@nexfmx.io', '0000000000', 'address', 'city', 'state', 'us','100000','', '','',-2,'JGFyZ29uMmlkJHY9MTkkbT02NTUzNix0PTIscD0xJHF4eVU5ZnZnamFsaXcvcXlQZXY4SnckVzBOYkFyZnc3dTFkZjR2RTIzZVNoVjhYNENpK0pKeWFQd0xpNkFiUEtLWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',14, 'manager', 'Active', 100, false, NOW(), NOW());
INSERT INTO public."User"(id, name, email, phone, address, city, stateorprovince, country, postalcode, officephone, homephone, alternateemail, manager, "hashedPassword", role, profile, status, tenantid, isdeleted, "createdAt", "updatedAt")
	VALUES (4, 'General Manager 2', 'gm2@nexfmx.io', '0000000000', 'address', 'city', 'state', 'us','100000','', '','',-2,'JGFyZ29uMmlkJHY9MTkkbT02NTUzNix0PTIscD0xJHF4eVU5ZnZnamFsaXcvcXlQZXY4SnckVzBOYkFyZnc3dTFkZjR2RTIzZVNoVjhYNENpK0pKeWFQd0xpNkFiUEtLWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',14, 'manager', 'Active', 100, false, NOW(), NOW());

INSERT INTO public."Storelocations"(
	id, tenantid, storename, storeemail, concept, dma, status, company, phonenumber, faxnumber, regioncode, region, latitude, longitude, address, city, stateprovince, postalcode, country, primarypointofcontact, storemanager, facilitymanager, storeopendate, isffasurveyrequired, leadfacilitymanager, subvenue, venue, isdeleted, createdat, updatedat, createdby, updatedby)
	VALUES (1000, 100, 'PLEASANT HILL - PANDA EXPRESS', '1000@pandarg.com', 'PX', 'DMA', 'Active', '88', '6784176982', 'faxnumber', 'MA', 'Mid-Atlantic', '33.95591970', '-84.13182540', '2060 Pleasant Hill Road', 'Duluth', 'GA', '500018', 'US', 3, 3, 1, '2005-05-13 00:00:00', true, 1, 'Free Standing', 'Street DT', false, NOW(), NOW(), -2, -2);

INSERT INTO public."Storelocations"(
	id, tenantid, storename, storeemail, concept, dma, status, company, phonenumber, faxnumber, regioncode, region, latitude, longitude, address, city, stateprovince, postalcode, country, primarypointofcontact, storemanager, facilitymanager, storeopendate, isffasurveyrequired, leadfacilitymanager, subvenue, venue, isdeleted, createdat, updatedat, createdby, updatedby)
	VALUES (2000, 100, 'HWY 101 & DONAHUE - PANDA EXPRESS', '1001@pandarg.com', 'PX', 'DMA', 'Active', '88', '6784176982', 'faxnumber', 'MA', 'Mid-Atlantic', '33.95591970', '-84.13182540', '2060 Pleasant Hill Road', 'Duluth', 'GA', '500018', 'US', 4, 4, 2, '2005-05-13 00:00:00', true, 2, 'Free Standing', 'Street DT', false, NOW(), NOW(), -2, -2);

INSERT INTO public."Storelocations"(
	id, tenantid, storename, storeemail, concept, dma, status, company, phonenumber, faxnumber, regioncode, region, latitude, longitude, address, city, stateprovince, postalcode, country, primarypointofcontact, storemanager, facilitymanager, storeopendate, isffasurveyrequired, leadfacilitymanager, subvenue, venue, isdeleted, createdat, updatedat, createdby, updatedby)
	VALUES (3000, 100, 'BASELINE & 24TH ST - PANDA EXPRESS', '1002@pandarg.com', 'PX', 'DMA', 'Active', '88', '6784176982', 'faxnumber', 'MA', 'Mid-Atlantic', '33.95591970', '-84.13182540', '2060 Pleasant Hill Road', 'Duluth', 'GA', '500018', 'US', 3, 3, 1, '2005-05-13 00:00:00', true, 1, 'Free Standing', 'Street DT', false, NOW(), NOW(), -2, -2);

INSERT INTO public."Storelocations"(
	id, tenantid, storename, storeemail, concept, dma, status, company, phonenumber, faxnumber, regioncode, region, latitude, longitude, address, city, stateprovince, postalcode, country, primarypointofcontact, storemanager, facilitymanager, storeopendate, isffasurveyrequired, leadfacilitymanager, subvenue, venue, isdeleted, createdat, updatedat, createdby, updatedby)
	VALUES (4000, 100, 'SAN PABLO & FAIRMONT - PANDA EXPRESS', '1003@pandarg.com', 'PX', 'DMA', 'Active', '88', '6784176982', 'faxnumber', 'MA', 'Mid-Atlantic', '33.95591970', '-84.13182540', '2060 Pleasant Hill Road', 'Duluth', 'GA', '500018', 'US', 4, 4, 2, '2005-05-13 00:00:00', true, 2, 'Free Standing', 'Street DT', false, NOW(), NOW(), -2, -2);