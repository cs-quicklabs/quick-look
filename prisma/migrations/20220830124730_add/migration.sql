-- AlterTable
ALTER TABLE "portfolioimage" ADD COLUMN     "imageKey" TEXT;

-- AlterTable
ALTER TABLE "profileimage" ADD COLUMN     "primaryImageKey" TEXT,
ADD COLUMN     "secondaryImageKey" TEXT;
