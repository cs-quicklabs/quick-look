/*
  Warnings:

  - You are about to drop the `Testimonial` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Testimonial" DROP CONSTRAINT "Testimonial_userId_fkey";

-- DropTable
DROP TABLE "Testimonial";

-- CreateTable
CREATE TABLE "testimonial" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "testimonialText" TEXT,
    "testimonialBy" TEXT,

    CONSTRAINT "testimonial_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "testimonial_userId_key" ON "testimonial"("userId");

-- AddForeignKey
ALTER TABLE "testimonial" ADD CONSTRAINT "testimonial_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
