/*
  Warnings:

  - You are about to drop the `portfolioImage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `spotlightButton` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "portfolioImage" DROP CONSTRAINT "portfolioImage_userId_fkey";

-- DropForeignKey
ALTER TABLE "spotlightButton" DROP CONSTRAINT "spotlightButton_userId_fkey";

-- DropTable
DROP TABLE "portfolioImage";

-- DropTable
DROP TABLE "spotlightButton";

-- CreateTable
CREATE TABLE "portfolioimage" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "portfolioimage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "spotlightbutton" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "buttonText" TEXT,
    "buttonColor" TEXT,
    "spotlightIcon" TEXT,
    "buttonAction" TEXT,
    "buttonActionlink" TEXT,
    "toggleSpotlight" BOOLEAN DEFAULT false,

    CONSTRAINT "spotlightbutton_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "spotlightbutton_userId_key" ON "spotlightbutton"("userId");

-- AddForeignKey
ALTER TABLE "portfolioimage" ADD CONSTRAINT "portfolioimage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "spotlightbutton" ADD CONSTRAINT "spotlightbutton_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
