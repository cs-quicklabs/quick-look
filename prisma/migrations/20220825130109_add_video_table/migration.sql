-- CreateTable
CREATE TABLE "video" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "videoLink" TEXT,

    CONSTRAINT "video_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "video_userId_key" ON "video"("userId");

-- AddForeignKey
ALTER TABLE "video" ADD CONSTRAINT "video_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
