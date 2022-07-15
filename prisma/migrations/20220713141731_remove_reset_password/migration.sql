/*
  Warnings:

  - You are about to drop the `resetpassword` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "resetpassword" DROP CONSTRAINT "resetpassword_userId_fkey";

-- DropTable
DROP TABLE "resetpassword";
