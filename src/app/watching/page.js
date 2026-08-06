import React from "react";
import PageHeader from "@/components/shared/PageHeader";
import { getContentList } from "@/lib/markdown";
import { WATCHING_DIR } from "@/lib/constants";
import Card from "@/components/ui/Card";
import { genPageMetadata } from "@/lib/seo";

export const metadata = genPageMetadata({ title: "Watching" });

export default function WatchingPage() {
  const shows = getContentList(WATCHING_DIR);

  return (
    <main className="flex flex-col items-center justify-between px-12 md:px-24 lg:px-32 xl:px-48">
      <PageHeader pageName="watching" />
      <div className="w-full columns-1 pb-32 pt-32 md:columns-2 xl:columns-3">
        {shows.map((show) => (
          <Card
            title={show.title}
            description={show.description}
            tags={show.tags}
            slug={`/watching/${show.slug}`}
            cover={`watching/${show.cover}`}
            key={show.id}
          />
        ))}
      </div>
    </main>
  );
}
