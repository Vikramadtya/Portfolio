import React from "react";
import PageHeader from "@/components/shared/PageHeader";
import TimeLine from "@/components/timeline/TimeLine";
import { genPageMetadata } from "@/lib/seo";

export const metadata = genPageMetadata({ title: "Timeline" });

export default function TimelinePage() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="px-8 pb-10 pt-32 md:px-24 lg:px-32 xl:px-48 2xl:px-60">
        <PageHeader pageName="timeline" />
        <TimeLine />
      </div>
    </main>
  );
}
