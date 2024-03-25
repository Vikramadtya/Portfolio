/*
  Warnings:

  - You are about to drop the column `blogDataId` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `blogId` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `blogMetaDataId` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `blogId` on the `Tag` table. All the data in the column will be lost.
  - You are about to drop the `BlogData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BlogMetaData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[articleId]` on the table `Blog` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Tag` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `articleId` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Blog` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Tag` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Blog" DROP CONSTRAINT "Blog_blogDataId_fkey";

-- DropForeignKey
ALTER TABLE "Blog" DROP CONSTRAINT "Blog_blogMetaDataId_fkey";

-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_blogId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_blogId_fkey";

-- DropIndex
DROP INDEX "Blog_blogDataId_key";

-- DropIndex
DROP INDEX "Blog_blogId_key";

-- DropIndex
DROP INDEX "Blog_blogMetaDataId_key";

-- DropIndex
DROP INDEX "Blog_title_key";

-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "blogDataId",
DROP COLUMN "blogId",
DROP COLUMN "blogMetaDataId",
DROP COLUMN "userId",
ADD COLUMN     "articleId" TEXT NOT NULL,
ALTER COLUMN "blogSeries" DROP NOT NULL,
ALTER COLUMN "wordCount" DROP NOT NULL,
ALTER COLUMN "wordCount" DROP DEFAULT,
ALTER COLUMN "title" SET DEFAULT '',
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "description" SET DEFAULT '',
ALTER COLUMN "readingTime" DROP NOT NULL,
ALTER COLUMN "publishedAt" DROP NOT NULL,
ALTER COLUMN "publishedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "blogId",
ALTER COLUMN "name" SET NOT NULL;

-- DropTable
DROP TABLE "BlogData";

-- DropTable
DROP TABLE "BlogMetaData";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Authors" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "avatar" TEXT NOT NULL,

    CONSTRAINT "Authors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Article" (
    "id" TEXT NOT NULL,
    "article" TEXT NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AuthorsToBlog" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BlogToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Authors_email_key" ON "Authors"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_AuthorsToBlog_AB_unique" ON "_AuthorsToBlog"("A", "B");

-- CreateIndex
CREATE INDEX "_AuthorsToBlog_B_index" ON "_AuthorsToBlog"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BlogToTag_AB_unique" ON "_BlogToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_BlogToTag_B_index" ON "_BlogToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Blog_articleId_key" ON "Blog"("articleId");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthorsToBlog" ADD CONSTRAINT "_AuthorsToBlog_A_fkey" FOREIGN KEY ("A") REFERENCES "Authors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthorsToBlog" ADD CONSTRAINT "_AuthorsToBlog_B_fkey" FOREIGN KEY ("B") REFERENCES "Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BlogToTag" ADD CONSTRAINT "_BlogToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BlogToTag" ADD CONSTRAINT "_BlogToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
