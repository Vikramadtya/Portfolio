import { genPageMetadata } from "@/lib/seo";
import NowClient from "@/components/now/NowClient";
import { getContentList } from "@/lib/markdown";
import { READING_DIR } from "@/lib/constants";

export const metadata = genPageMetadata({ title: "Now" });

export default function Now() {
  // The newest book on the shelf powers the Reading card unless Notion overrides it
  const latestBook = getContentList(READING_DIR).sort((a, b) => b.id - a.id)[0];

  return (
    <NowClient
      latestBook={latestBook ? { title: latestBook.title, slug: latestBook.slug } : null}
    />
  );
}
