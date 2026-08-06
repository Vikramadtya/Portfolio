import React from "react";
import PageHeader from "@/components/shared/PageHeader";
import Icon from "@/components/ui/Icon";
import { getPageContent } from "@/lib/markdown";
import { genPageMetadata } from "@/lib/seo";

export const metadata = genPageMetadata({ title: "Resume" });

export default function ResumePage() {
  const pageData = getPageContent("resume");
  return (
    <main className="flex flex-col items-center justify-between px-12 md:px-24 lg:px-32 xl:px-48">
      <PageHeader pageName="resume" />
      <div className="w-full pb-10 pt-32">
        <div>
          <iframe
            className="aspect-square w-full"
            src="/assets/resume.pdf"
            title="Resume PDF"
          />
        </div>
      </div>
      <div className="flex w-full flex-row items-center space-y-2 pb-4 pt-6 md:space-y-5 md:pb-8">
        <p className="flex flex-row items-center pr-1 text-lg leading-7 text-gray-500 dark:text-gray-400">
          {pageData.thanksText || "Thank you for visiting"}{" "}
          <Icon kind="smilingFace" size={"pl-1 h-8 w-8"} />
        </p>
      </div>
    </main>
  );
}
