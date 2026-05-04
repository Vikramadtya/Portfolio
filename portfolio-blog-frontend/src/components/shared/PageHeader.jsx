import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPageContent } from "@/lib/markdown";

const PageHeader = ({ pageName }) => {
  const pageData = getPageContent(pageName);

  return (
    <div className="w-full space-y-2 pb-8 pt-6 md:space-y-5">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-relaxed">
        {pageData.title}
      </h1>
      <div className="prose prose-lg max-w-none text-gray-500 dark:prose-invert dark:text-gray-100">
        <MDXRemote source={pageData.content} />
      </div>
    </div>
  );
};

export default PageHeader;
