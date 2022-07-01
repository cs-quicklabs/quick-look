-- CreateTable
CREATE TABLE "resetpassword" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "uniqueString" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "resetpassword_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "resetpassword_userId_key" ON "resetpassword"("userId");

-- AddForeignKey
ALTER TABLE "resetpassword" ADD CONSTRAINT "resetpassword_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
