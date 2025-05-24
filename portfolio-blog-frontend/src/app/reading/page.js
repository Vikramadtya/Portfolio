import React from "react";
import Card from "@/components/atom/card";
import { getSortedMarkdownData } from "../../lib/mdxUtils";

export default async function ReadingPage() {
  const readingItems = await getSortedMarkdownData("bookshelf");

  return (
    <main className="flex flex-col items-center justify-between  px-12 md:px-24 lg:px-32 xl:px-48 ">
      <div className="w-full space-y-2 pb-2 pt-6 md:space-y-5 md:pb-8 ">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-relaxed">
          BookShelf
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-100">
          A glimpse into the books, articles, and ideas that are currently
          inspiring me. From thought-provoking concepts to captivating stories,
          this section reflects my journey of learning and exploration.
        </p>
      </div>
      <div className="w-full columns-1 pb-32 pt-32 md:columns-2  xl:columns-3">
        {readingItems.map((item) => (
          <Card
            title={item.title}
            description={item.description}
            tags={item.tags}
            slug={"/reading/" + item.slug}
            key={item.slug} // Using slug as key, assuming it's unique
            cover={`books/${item.cover}`} // Assuming 'cover' is in frontmatter
          />
        ))}
      </div>
    </main>
  );
}
