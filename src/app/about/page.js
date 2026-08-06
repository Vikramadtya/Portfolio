import React from "react";
import Content from "@/../_content/pages/about.mdx";
import AuthorProfile from "@/components/about/AuthorProfile";
import { genPageMetadata } from "@/lib/seo";

export const metadata = genPageMetadata({ title: "About" });

export default function AboutPage() {
  return (
    <>
      <div className="page-layout text-body flex flex-col items-start pt-24 md:flex-row">
        <AuthorProfile />
        <div>
          <Content />
        </div>
      </div>
    </>
  );
}
