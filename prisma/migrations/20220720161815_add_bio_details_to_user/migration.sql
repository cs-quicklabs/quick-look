/*
  Warnings:

  - Added the required column `bio` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `education` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `occupation` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "bio" TEXT NOT NULL,
ADD COLUMN     "company" TEXT NOT NULL,
ADD COLUMN     "education" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "occupation" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "bio" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "education" TEXT NOT NULL,
    "recieveProductUpdates" BOOLEAN NOT NULL DEFAULT false,
    "recieveMarketingUpdates" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_id_key" ON "Profile"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
