/*
  Warnings:

  - You are about to drop the `ProfileImage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProfileInformation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SocialMedia` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProfileImage" DROP CONSTRAINT "ProfileImage_userId_fkey";

-- DropForeignKey
ALTER TABLE "ProfileInformation" DROP CONSTRAINT "ProfileInformation_userId_fkey";

-- DropForeignKey
ALTER TABLE "SocialMedia" DROP CONSTRAINT "SocialMedia_userId_fkey";

-- DropTable
DROP TABLE "ProfileImage";

-- DropTable
DROP TABLE "ProfileInformation";

-- DropTable
DROP TABLE "SocialMedia";

-- CreateTable
CREATE TABLE "socialmedia" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "facebookLink" TEXT,
    "twitterLink" TEXT,
    "youtubeLink" TEXT,

    CONSTRAINT "socialmedia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profileimage" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "isUsingPrimaryDefault" BOOLEAN DEFAULT true,
    "isUsingSecondaryDefault" BOOLEAN DEFAULT true,
    "primaryImage" TEXT,
    "secondaryImage" TEXT,

    CONSTRAINT "profileimage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profileinformation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "bio" TEXT,
    "location" TEXT,
    "occupation" TEXT,
    "company" TEXT,
    "education" TEXT,
    "templateNumber" TEXT DEFAULT E'0',

    CONSTRAINT "profileinformation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "socialmedia_id_key" ON "socialmedia"("id");

-- CreateIndex
CREATE UNIQUE INDEX "socialmedia_userId_key" ON "socialmedia"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "profileimage_userId_key" ON "profileimage"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "profileinformation_userId_key" ON "profileinformation"("userId");

-- AddForeignKey
ALTER TABLE "socialmedia" ADD CONSTRAINT "socialmedia_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profileimage" ADD CONSTRAINT "profileimage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profileinformation" ADD CONSTRAINT "profileinformation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
