/*
  Warnings:

  - You are about to drop the column `bio` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `company` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `education` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `occupation` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "bio" DROP NOT NULL,
ALTER COLUMN "location" DROP NOT NULL,
ALTER COLUMN "occupation" DROP NOT NULL,
ALTER COLUMN "company" DROP NOT NULL,
ALTER COLUMN "education" DROP NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "bio",
DROP COLUMN "company",
DROP COLUMN "education",
DROP COLUMN "location",
DROP COLUMN "occupation";
