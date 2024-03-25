-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "avatar" TEXT NOT NULL,
    "blogId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "blogId" TEXT,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL,
    "blogNumber" SERIAL NOT NULL,
    "blogSeries" INTEGER NOT NULL,
    "wordCount" INTEGER NOT NULL DEFAULT 0,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "readingTime" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "publishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "blogId" TEXT,
    "blogMetaDataId" TEXT,
    "blogDataId" TEXT,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlogMetaData" (
    "id" TEXT NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "likes" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "BlogMetaData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlogData" (
    "id" TEXT NOT NULL,
    "article" TEXT NOT NULL,

    CONSTRAINT "BlogData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Blog_title_key" ON "Blog"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Blog_blogId_key" ON "Blog"("blogId");

-- CreateIndex
CREATE UNIQUE INDEX "Blog_blogMetaDataId_key" ON "Blog"("blogMetaDataId");

-- CreateIndex
CREATE UNIQUE INDEX "Blog_blogDataId_key" ON "Blog"("blogDataId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_blogMetaDataId_fkey" FOREIGN KEY ("blogMetaDataId") REFERENCES "BlogMetaData"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_blogDataId_fkey" FOREIGN KEY ("blogDataId") REFERENCES "BlogData"("id") ON DELETE SET NULL ON UPDATE CASCADE;
