INSERT INTO public."Storelocations"(
	id, tenantid, storename, storeemail, concept, dma, status, company, phonenumber, faxnumber, regioncode, region, latitude, longitude, address, city, stateprovince, postalcode, country, primarypointofcontact, storemanager, facilitymanager, storeopendate, isffasurveyrequired, leadfacilitymanager, subvenue, venue, isdeleted, createdat, updatedat, createdby, updatedby)
	VALUES (1000, 100, 'PLEASANT HILL - PANDA EXPRESS', '1000@pandarg.com', 'PX', 'DMA', 'Active', '88', '6784176982', 'faxnumber', 'MA', 'Mid-Atlantic', '33.95591970', '-84.13182540', '2060 Pleasant Hill Road', 'Duluth', 'GA', '500018', 'US', 3, 3, 1, '2005-05-13 00:00:00', true, 1, 'Free Standing', 'Street DT', false, NOW(), NOW(), -2, -2);

INSERT INTO public."Storelocations"(
	id, tenantid, storename, storeemail, concept, dma, status, company, phonenumber, faxnumber, regioncode, region, latitude, longitude, address, city, stateprovince, postalcode, country, primarypointofcontact, storemanager, facilitymanager, storeopendate, isffasurveyrequired, leadfacilitymanager, subvenue, venue, isdeleted, createdat, updatedat, createdby, updatedby)
	VALUES (1001, 100, 'HWY 101 & DONAHUE - PANDA EXPRESS', '1001@pandarg.com', 'PX', 'DMA', 'Active', '88', '6784176982', 'faxnumber', 'MA', 'Mid-Atlantic', '33.95591970', '-84.13182540', '2060 Pleasant Hill Road', 'Duluth', 'GA', '500018', 'US', 4, 4, 2, '2005-05-13 00:00:00', true, 2, 'Free Standing', 'Street DT', false, NOW(), NOW(), -2, -2);

INSERT INTO public."Storelocations"(
	id, tenantid, storename, storeemail, concept, dma, status, company, phonenumber, faxnumber, regioncode, region, latitude, longitude, address, city, stateprovince, postalcode, country, primarypointofcontact, storemanager, facilitymanager, storeopendate, isffasurveyrequired, leadfacilitymanager, subvenue, venue, isdeleted, createdat, updatedat, createdby, updatedby)
	VALUES (1002, 100, 'BASELINE & 24TH ST - PANDA EXPRESS', '1002@pandarg.com', 'PX', 'DMA', 'Active', '88', '6784176982', 'faxnumber', 'MA', 'Mid-Atlantic', '33.95591970', '-84.13182540', '2060 Pleasant Hill Road', 'Duluth', 'GA', '500018', 'US', 3, 3, 1, '2005-05-13 00:00:00', true, 1, 'Free Standing', 'Street DT', false, NOW(), NOW(), -2, -2);

INSERT INTO public."Storelocations"(
	id, tenantid, storename, storeemail, concept, dma, status, company, phonenumber, faxnumber, regioncode, region, latitude, longitude, address, city, stateprovince, postalcode, country, primarypointofcontact, storemanager, facilitymanager, storeopendate, isffasurveyrequired, leadfacilitymanager, subvenue, venue, isdeleted, createdat, updatedat, createdby, updatedby)
	VALUES (1003, 100, 'SAN PABLO & FAIRMONT - PANDA EXPRESS', '1003@pandarg.com', 'PX', 'DMA', 'Active', '88', '6784176982', 'faxnumber', 'MA', 'Mid-Atlantic', '33.95591970', '-84.13182540', '2060 Pleasant Hill Road', 'Duluth', 'GA', '500018', 'US', 4, 4, 2, '2005-05-13 00:00:00', true, 2, 'Free Standing', 'Street DT', false, NOW(), NOW(), -2, -2);

INSERT INTO public."Assetcatalog"(id, tenantid, storeid, assettype, primarytrade, workorder_priority, "createdAt", "updatedAt", "createdBy", "updatedBy" )
	VALUES (900, 100, 1000, 'Walk-in Cooler', 'Refrigeration', 'Emergency', NOW(), NOW(), -2, -2);
	
INSERT INTO public."Assetcatalog"(id, tenantid, storeid, assettype, primarytrade, workorder_priority, "createdAt", "updatedAt", "createdBy", "updatedBy")
	VALUES (901, 100, 1000, 'Ice machine', 'Ice Machine', 'Normal', NOW(), NOW(), -2, -2);


INSERT INTO public."AssetInfo"(id, tenantid, storeid, assettypeid, facility_zone, name, assetbrand, model_num, serail_num, "createdAt", "updatedAt", "createdBy", "updatedBy")
	VALUES (1, 100, 1000, 900, 'Dining Room', 'Walk-in Cooler #1', 'Manitowoc', '48HCEB06B2M5A0F1F0', '0316L88528', NOW(), NOW(), -2, -2);

INSERT INTO public."AssetInfo"(id, tenantid, storeid, assettypeid, facility_zone, name, assetbrand, model_num, serail_num, "createdAt", "updatedAt", "createdBy", "updatedBy")
	VALUES (2, 100, 1000, 900, 'Kitchen', 'Walk-in Cooler #2', 'Manitowoc', '48HCEB06B2M5A0F1F1', '0316L88535', NOW(), NOW(), -2, -2);

INSERT INTO public."AssetInfo"(id, tenantid, storeid, assettypeid, facility_zone, name, assetbrand, model_num, serail_num, "createdAt", "updatedAt", "createdBy", "updatedBy")
	VALUES (3, 100, 1000, 901, 'Dining Room', 'Dining Room Ice Machine #1', 'Manitowoc', '48HCEB06B2M5A0F1F1', '0316L88535', NOW(), NOW(), -2, -2);

INSERT INTO public."AssetInfo"(id, tenantid, storeid, assettypeid, facility_zone, name, assetbrand, model_num, serail_num, "createdAt", "updatedAt", "createdBy", "updatedBy")
	VALUES (4, 100, 1000, 901, 'Dining Room', 'Dining Room Ice Machine #2', 'Manitowoc', '48HCEB06B2M5A0F1G8', '0316L88589', NOW(), NOW(), -2, -2);

INSERT INTO public."AssetInfo"(id, tenantid, storeid, assettypeid, facility_zone, name, assetbrand, model_num, serail_num, "createdAt", "updatedAt", "createdBy", "updatedBy")
	VALUES (5, 100, 1000, 901, 'Drive-Thru', 'DT Ice Machine #3', 'Manitowoc', '48HCEB06B2M5A0F1F1', '0316L88535', NOW(), NOW(), -2, -2);


INSERT INTO public."Vendor"(id, tenantid, vendorname, vendor_num, address, city, stateprovince, postalcode, country, vendortype, primary_email, phone_numer, fax_numer, status, "createdAt", "updatedAt", "createdBy", "updatedBy")
	VALUES (DEFAULT,100, 'fieldservexpress, LLC', '1000', 'VV Nagar', 'Hyderabad', 'TS', '500018', 'IN', 'Contractor', 'venky@nexfmx.io', '8686788350', '8686788350', 'Active', NOW(), NOW(), -2, -2);


INSERT INTO public."AssetSymptom"(id, assettypeid, name, "createdAt", "updatedAt", "createdBy", "updatedBy")
	VALUES (DEFAULT,900, 'Inoperative', NOW(), NOW(), -2, -2);
INSERT INTO public."AssetSymptom"(id, assettypeid, name, "createdAt", "updatedAt", "createdBy", "updatedBy")
	VALUES (DEFAULT,900, 'Not Holding Temp', NOW(), NOW(), -2, -2);
INSERT INTO public."AssetSymptom"(id, assettypeid, name, "createdAt", "updatedAt", "createdBy", "updatedBy")
	VALUES (DEFAULT,900, 'Glass Doors Broken', NOW(), NOW(), -2, -2);
INSERT INTO public."AssetSymptom"(id, assettypeid, name, "createdAt", "updatedAt", "createdBy", "updatedBy")
	VALUES (DEFAULT,900, 'Light Fixture Inoperable', NOW(), NOW(), -2, -2);
INSERT INTO public."AssetSymptom"(id, assettypeid, name, "createdAt", "updatedAt", "createdBy", "updatedBy")
	VALUES (DEFAULT,900, 'Other', NOW(), NOW(), -2, -2);

INSERT INTO public."AssetSymptom"(id, assettypeid, name, "createdAt", "updatedAt", "createdBy", "updatedBy")
	VALUES (DEFAULT,901, 'Leaking', NOW(), NOW(), -2, -2);
INSERT INTO public."AssetSymptom"(id, assettypeid, name, "createdAt", "updatedAt", "createdBy", "updatedBy")
	VALUES (DEFAULT,901, 'Not Dispensing', NOW(), NOW(), -2, -2);
INSERT INTO public."AssetSymptom"(id, assettypeid, name, "createdAt", "updatedAt", "createdBy", "updatedBy")
	VALUES (DEFAULT,901, 'No Ice', NOW(), NOW(), -2, -2);
INSERT INTO public."AssetSymptom"(id, assettypeid, name, "createdAt", "updatedAt", "createdBy", "updatedBy")
	VALUES (DEFAULT,901, 'Slow Production', NOW(), NOW(), -2, -2);
INSERT INTO public."AssetSymptom"(id, assettypeid, name, "createdAt", "updatedAt", "createdBy", "updatedBy")
	VALUES (DEFAULT,901, 'Other', NOW(), NOW(), -2, -2);