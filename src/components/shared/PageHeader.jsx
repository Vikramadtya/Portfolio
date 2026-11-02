import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPageContent } from "@/lib/markdown";

const PageHeader = ({ pageName }) => {
  const pageData = getPageContent(pageName);

  return (
    <div className="w-full pb-8 pt-6">
      <h1 className="text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
        {pageData.title}
      </h1>
      <span className="mb-6 mt-4 block h-1 w-14 rounded-full bg-primary/70" aria-hidden="true" />
      <div className="prose prose-lg max-w-2xl text-foreground/75 prose-p:leading-8 prose-a:text-primary dark:prose-invert dark:text-gray-200">
        <MDXRemote source={pageData.content} />
      </div>
    </div>
  );
};

export default PageHeader;
