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
    <div className="page-layout flex flex-col items-center justify-between">
      <PageHeader pageName="projects" />
      <ArticleList blogs={projects} />
    </div>
  );
}
