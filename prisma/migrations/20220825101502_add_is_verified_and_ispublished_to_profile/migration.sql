/*
  Warnings:

  - You are about to drop the column `isPublished` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `isVerified` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "isVerified" DROP NOT NULL,
ALTER COLUMN "isPublished" DROP NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "isPublished",
DROP COLUMN "isVerified";
