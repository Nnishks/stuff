INSERT INTO public."EquipmentCatalog"(id, name, catagory, primarytrade, default_wo_priority, avg_repair_nte, is_active, isdeleted) VALUES (1, 'Backflow Device', 'Backflow Device', 'Plumbing', 'Normal', 500, TRUE, FALSE);
INSERT INTO public."EquipmentCatalog"(id, name, catagory, primarytrade, default_wo_priority, avg_repair_nte, is_active, isdeleted) VALUES (2, 'Drink Station', 'Drink Station', 'Handyman', 'Normal', 500, TRUE, FALSE);
INSERT INTO public."EquipmentCatalog"(id, name, catagory, primarytrade, default_wo_priority, avg_repair_nte, is_active, isdeleted) VALUES (3, 'Fryer', 'Fryer', 'Cooking Equipment', 'Normal', 500, TRUE, FALSE);
INSERT INTO public."EquipmentCatalog"(id, name, catagory, primarytrade, default_wo_priority, avg_repair_nte, is_active, isdeleted) VALUES (4, 'Grill', 'Grill', 'Cooking Equipment', 'Normal', 500, TRUE, FALSE);
INSERT INTO public."EquipmentCatalog"(id, name, catagory, primarytrade, default_wo_priority, avg_repair_nte, is_active, isdeleted) VALUES (5, 'Ice Machine', 'Ice Machine', 'Ice Machine', 'Emergency', 550, TRUE, FALSE);
INSERT INTO public."EquipmentCatalog"(id, name, catagory, primarytrade, default_wo_priority, avg_repair_nte, is_active, isdeleted) VALUES (6, 'Rice Cooker', 'Rice Cooker', 'Cooking Equipment', 'Normal', 500, TRUE, FALSE);
INSERT INTO public."EquipmentCatalog"(id, name, catagory, primarytrade, default_wo_priority, avg_repair_nte, is_active, isdeleted) VALUES (7, 'RTU', 'RTU', 'RTU', 'Emergency', 600, TRUE, FALSE);
INSERT INTO public."EquipmentCatalog"(id, name, catagory, primarytrade, default_wo_priority, avg_repair_nte, is_active, isdeleted) VALUES (8, 'Walk-in Cooler', 'Walk-in Cooler', 'Refrigeration', 'Emergency', 600, TRUE, FALSE);


/*Backflow Device*/
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('BF1', 1, 'Leaking', 'Water passing through where it shouldn''t', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('BF2', 1, 'Clogged', 'Blockages from debris or sediment', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('BF3', 1, 'Damaged', 'Worn or broken internal components', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('BF4', 1, 'Maintenance', 'Maintenance Required', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('BF5', 1, 'Corrosion', 'Damage from exposure to elements', true, false);

/*Drink Station*/
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('DS1', 2, 'Leaking', 'Water leakage in lines or dispensers', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('DS2', 2, 'Clogged', 'Blockages in dispensing nozzles', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('DS3', 2, 'Electrical Issues', 'Problems with power supply or internal wiring', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('DS4', 2, 'Mechanical Issues', 'Breakdowns in the dispensing mechanism', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('DS5', 2, 'Maintenance', 'Nuildup of dirt and grime in the drink station', true, false);

/*Fryer*/
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('FR1', 3, 'Burning', 'Burning', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('FR2', 3, 'Leaking Gas', 'Leaking Gas', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('FR3', 3, 'Lights but Shuts-Off', 'Lights but Shuts-Off', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('FR4', 3, 'Not at Temp/Slow', 'Not at Temp/Slow', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('FR5', 3, 'On Fire', 'On Fire', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('FR6', 3, 'Won''t Light', 'Won''t Light', true, false);

/*Grill*/
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('GR1', 4, 'Burning', 'Clogs or damage to burners', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('GR2', 4, 'Gas Leaks', 'leakage of gas from the grill connections', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('GR3', 4, 'No Power', 'No Power', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('GR4', 4, 'Sparks', 'Sparks', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('GR5', 4, 'Thermostat Malfunction', 'Difficulty maintaining a consistent temperature', true, false);


/*Ice Machine*/
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('IM1', 5, 'Leaking', 'Leaking', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('IM2', 5, 'Not Dispensing', 'Not Dispensing', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('IM3', 5, 'No Ice', 'No Ice', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('IM4', 5, 'Slow Production', 'Slow Production', true, false);

/*Rice Cooker*/
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('RC1', 6, 'Inoperative', 'Inoperative', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('RC2', 6, 'Leaking Gas', 'Leaking Gas', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('RC3', 6, 'Electrical Issues', 'problems with power supply or internal wiring', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('RC4', 6, 'Mechanical Issues', 'Breakdowns in the heating or cooking mechanism', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('RC5', 6, 'Pot or lid damage', 'scratches, dents or warping in the cooking pot or lid that affects the cooking performance', true, false);

/*RTU*/
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('RT1', 7, 'Inoperative', 'Inoperative', true, false);

/*Walk-in Cooler*/
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('WIC1', 8, 'Clogged Drain', 'Clogged Drain', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('WIC2', 8, 'Display Door not Closing', 'Display Door not Closing', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('WIC3', 8, 'Display Light Inoperative', 'Display Light Inoperative', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('WIC4', 8, 'Door not Closing', 'Door not Closing', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('WIC5', 8, 'Fan Inoperative', 'Fan Inoperative', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('WIC6', 8, 'Ice Build-Up', 'Ice Build-Up', true, false);
INSERT INTO public."EquipmentSymptoms"(id, equipmentcatlogid, name, description, is_active, isdeleted) VALUES ('WIC7', 8, 'Not at Temp', 'Not at Temp', true, false);