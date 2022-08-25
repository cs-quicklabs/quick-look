/*
  Warnings:

  - You are about to drop the column `facebookLink` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `isUsingPrimaryDefault` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `isUsingSecondaryDefault` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `oldpassword` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `primaryImage` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `recieveMarketingUpdates` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `recieveProductUpdates` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `secondaryImage` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `templateNumber` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `twitterLink` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `youtubeLink` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "facebookLink",
DROP COLUMN "isUsingPrimaryDefault",
DROP COLUMN "isUsingSecondaryDefault",
DROP COLUMN "oldpassword",
DROP COLUMN "primaryImage",
DROP COLUMN "recieveMarketingUpdates",
DROP COLUMN "recieveProductUpdates",
DROP COLUMN "secondaryImage",
DROP COLUMN "templateNumber",
DROP COLUMN "twitterLink",
DROP COLUMN "youtubeLink";

-- DropTable
DROP TABLE "Profile";

-- CreateTable
CREATE TABLE "profile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "isVerified" BOOLEAN DEFAULT false,
    "isPublished" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marketingupdates" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "recieveProductUpdates" BOOLEAN NOT NULL DEFAULT false,
    "recieveMarketingUpdates" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "marketingupdates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialMedia" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "facebookLink" TEXT,
    "twitterLink" TEXT,
    "youtubeLink" TEXT,

    CONSTRAINT "SocialMedia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfileImage" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "isUsingPrimaryDefault" BOOLEAN DEFAULT true,
    "isUsingSecondaryDefault" BOOLEAN DEFAULT true,
    "primaryImage" TEXT,
    "secondaryImage" TEXT,

    CONSTRAINT "ProfileImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfileInformation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "bio" TEXT,
    "location" TEXT,
    "occupation" TEXT,
    "company" TEXT,
    "education" TEXT,
    "templateNumber" TEXT DEFAULT E'0',

    CONSTRAINT "ProfileInformation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profile_id_key" ON "profile"("id");

-- CreateIndex
CREATE UNIQUE INDEX "profile_userId_key" ON "profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "marketingupdates_id_key" ON "marketingupdates"("id");

-- CreateIndex
CREATE UNIQUE INDEX "marketingupdates_userId_key" ON "marketingupdates"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "SocialMedia_id_key" ON "SocialMedia"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SocialMedia_userId_key" ON "SocialMedia"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ProfileImage_userId_key" ON "ProfileImage"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ProfileInformation_userId_key" ON "ProfileInformation"("userId");

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "marketingupdates" ADD CONSTRAINT "marketingupdates_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialMedia" ADD CONSTRAINT "SocialMedia_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileImage" ADD CONSTRAINT "ProfileImage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileInformation" ADD CONSTRAINT "ProfileInformation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
