-- CreateTable
CREATE TABLE "spotlightButton" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "buttonText" TEXT,
    "buttonColor" TEXT,
    "spotlightIcon" TEXT,
    "buttonAction" TEXT,
    "buttonActionlink" TEXT,
    "toggleSpotlight" BOOLEAN DEFAULT false,

    CONSTRAINT "spotlightButton_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "spotlightButton_userId_key" ON "spotlightButton"("userId");

-- AddForeignKey
ALTER TABLE "spotlightButton" ADD CONSTRAINT "spotlightButton_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
