import React from "react";
import PageHeader from "@/components/shared/PageHeader";
import { getContentList } from "@/lib/markdown";
import { READING_DIR } from "@/lib/constants";
import Card from "@/components/ui/Card";
import { genPageMetadata } from "@/lib/seo";

export const metadata = genPageMetadata({ title: "Reading" });

export default function ReadingPage() {
  const books = getContentList(READING_DIR);

  return (
    <main className="flex flex-col items-center justify-between px-12 md:px-24 lg:px-32 xl:px-48">
      <PageHeader pageName="reading" />
      <div className="w-full columns-1 pb-32 pt-32 md:columns-2 xl:columns-3">
        {books.map((book) => (
          <Card
            title={book.title}
            description={book.description}
            tags={book.tags}
            slug={`/reading/${book.slug}`}
            cover={`books/${book.cover}`}
            key={book.id}
          />
        ))}
      </div>
    </main>
  );
}
