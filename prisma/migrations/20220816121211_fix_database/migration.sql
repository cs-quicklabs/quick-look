-- AlterTable
ALTER TABLE "user" ADD COLUMN     "isUsingPrimaryDefault" BOOLEAN DEFAULT true,
ADD COLUMN     "isUsingSecondaryDefault" BOOLEAN DEFAULT true,
ADD COLUMN     "primaryImage" TEXT,
ADD COLUMN     "secondaryImage" TEXT;
