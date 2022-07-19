-- AlterTable
ALTER TABLE "user" ADD COLUMN     "recieveMarketingUpdates" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "recieveProductUpdates" BOOLEAN NOT NULL DEFAULT false;
