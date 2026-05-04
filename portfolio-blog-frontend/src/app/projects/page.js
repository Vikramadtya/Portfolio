import React from "react";
import PageHeader from "@/components/shared/PageHeader";
import { getContentList } from "@/lib/markdown";
import { PROJECTS_DIR } from "@/lib/constants";
import ArticleList from "@/components/shared/ArticleList";
import { genPageMetadata } from "@/lib/seo";

export const metadata = genPageMetadata({ title: "Projects" });

export default function ProjectsPage() {
  const projects = getContentList(PROJECTS_DIR);

  return (
    <main className="flex flex-col items-center justify-between px-12 md:px-24 lg:px-32 xl:px-48">
      <PageHeader pageName="projects" />
      <ArticleList blogs={projects} />
    </main>
  );
}
