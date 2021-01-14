-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
--DROP TABLE "shoplist";

-- create
CREATE TABLE "shoplist" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(80) NOT NULL,
	"quantity" DECIMAL(4,2) DEFAULT 0,
	"unit" varchar(20) NOT NULL
);

-- GET
SELECT * FROM "shoplist";

SELECT * FROM "shoplist"
WHERE "name" ILIKE '%donut%';

-- POST
INSERT INTO "shoplist" ("name", "quantity", "unit")
VALUES ('Bread', 1 ,'Loaf');
INSERT INTO "shoplist" ("name", "quantity", "unit")
VALUES ('Coffee', 1 ,'lbs');
INSERT INTO "shoplist" ("name", "quantity", "unit")
VALUES ('Chocolate', 6 ,'oz');
INSERT INTO "shoplist" ("name", "quantity", "unit")
VALUES ('Milk', 1 ,'Gal');
INSERT INTO "shoplist" ("name", "quantity", "unit")
VALUES ('Rosemary', 10, 'g');

-- DELETE
DELETE FROM "shoplist"
WHERE "id" = 2;

-- PUT
UPDATE "shoplist"
SET "name" = ''
WHERE "id" = 6;