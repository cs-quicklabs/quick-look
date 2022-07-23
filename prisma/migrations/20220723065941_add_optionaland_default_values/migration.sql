-- AlterTable
ALTER TABLE "user" ALTER COLUMN "recieveMarketingUpdates" DROP NOT NULL,
ALTER COLUMN "recieveProductUpdates" DROP NOT NULL,
ALTER COLUMN "templateNumber" SET DEFAULT E'0';
