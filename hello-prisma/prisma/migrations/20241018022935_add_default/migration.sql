-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Unknown', 'Draft', 'InProgress', 'InReview', 'Published');

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN DEFAULT false,
    "status" "Status" NOT NULL DEFAULT 'Unknown',

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
