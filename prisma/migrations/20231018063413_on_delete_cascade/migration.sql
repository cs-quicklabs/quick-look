-- DropForeignKey
ALTER TABLE "connectAppAccount" DROP CONSTRAINT "connectAppAccount_userId_fkey";

-- DropForeignKey
ALTER TABLE "connectedApp" DROP CONSTRAINT "connectedApp_accountId_fkey";

-- AddForeignKey
ALTER TABLE "connectAppAccount" ADD CONSTRAINT "connectAppAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "connectedApp" ADD CONSTRAINT "connectedApp_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "connectAppAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;
