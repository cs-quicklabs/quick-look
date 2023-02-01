-- AlterTable
ALTER TABLE "user" ALTER COLUMN "allowed_free_access" DROP NOT NULL,
ALTER COLUMN "allowed_free_access" SET DEFAULT false;
