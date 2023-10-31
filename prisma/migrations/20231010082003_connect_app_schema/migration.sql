-- AlterTable
ALTER TABLE "user" ADD COLUMN     "createdByAppId" TEXT;

-- CreateTable
CREATE TABLE "connectAppAccount" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "secretKey" TEXT NOT NULL,
    "isBlocked" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "connectAppAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "connectedApp" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "appName" TEXT NOT NULL,
    "defaultTemplate" TEXT NOT NULL DEFAULT '0',
    "isBlocked" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "connectedApp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "connectAppAccount_id_key" ON "connectAppAccount"("id");

-- CreateIndex
CREATE UNIQUE INDEX "connectAppAccount_userId_key" ON "connectAppAccount"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "connectedApp_id_key" ON "connectedApp"("id");

-- AddForeignKey
ALTER TABLE "connectAppAccount" ADD CONSTRAINT "connectAppAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "connectedApp" ADD CONSTRAINT "connectedApp_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "connectAppAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_createdByAppId_fkey" FOREIGN KEY ("createdByAppId") REFERENCES "connectedApp"("id") ON DELETE SET NULL ON UPDATE CASCADE;
