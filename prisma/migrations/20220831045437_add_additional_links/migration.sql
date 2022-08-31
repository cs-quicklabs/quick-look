-- CreateTable
CREATE TABLE "AdditionalLink" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "linkText" TEXT,
    "linkColor" TEXT,
    "linkUrl" TEXT,

    CONSTRAINT "AdditionalLink_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AdditionalLink" ADD CONSTRAINT "AdditionalLink_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
