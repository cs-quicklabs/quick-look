/*
  Warnings:

  - You are about to drop the `AdditionalLink` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AdditionalLink" DROP CONSTRAINT "AdditionalLink_userId_fkey";

-- DropTable
DROP TABLE "AdditionalLink";

-- CreateTable
CREATE TABLE "additionalLinks" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "linkText" TEXT,
    "linkColor" TEXT,
    "linkUrl" TEXT,

    CONSTRAINT "additionalLinks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "additionalLinks" ADD CONSTRAINT "additionalLinks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
