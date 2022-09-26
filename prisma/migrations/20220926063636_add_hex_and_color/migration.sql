/*
  Warnings:

  - You are about to drop the column `linkColor` on the `additionalLinks` table. All the data in the column will be lost.
  - You are about to drop the column `linkHex` on the `additionalLinks` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "additionalLinks" DROP COLUMN "linkColor",
DROP COLUMN "linkHex";

-- AlterTable
ALTER TABLE "profile" ADD COLUMN     "additionalLinksColor" TEXT,
ADD COLUMN     "additionalLinksHexCode" TEXT;
