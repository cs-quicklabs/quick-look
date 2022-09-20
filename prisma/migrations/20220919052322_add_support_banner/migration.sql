-- CreateTable
CREATE TABLE "SupportBanner" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "bannerText" TEXT,
    "bannerColor" TEXT,
    "bannerHex" TEXT,
    "bannerIcon" TEXT,
    "bannerlink" TEXT,
    "toggleBanner" BOOLEAN DEFAULT false,

    CONSTRAINT "SupportBanner_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SupportBanner_userId_key" ON "SupportBanner"("userId");

-- AddForeignKey
ALTER TABLE "SupportBanner" ADD CONSTRAINT "SupportBanner_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
