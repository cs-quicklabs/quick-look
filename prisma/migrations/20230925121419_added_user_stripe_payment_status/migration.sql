-- AlterTable
ALTER TABLE "user" ADD COLUMN     "needPaymentToContinue" BOOLEAN DEFAULT false;

-- CreateTable
CREATE TABLE "payment" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "userId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "paymentIntentId" TEXT,
    "paymentStatus" TEXT,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "payment_id_key" ON "payment"("id");

-- CreateIndex
CREATE UNIQUE INDEX "payment_userId_key" ON "payment"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "payment_customerId_key" ON "payment"("customerId");

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
