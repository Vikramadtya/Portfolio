import React from "react";
import MarkDownContentList from "@/components/molecules/markDownContentList";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Blog() {
  const projects = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "..",
    "_markdown_content",
    "projects",
  );
  console.log(projects);
  const files = fs.readdirSync(projects);

  let blogs = files.map((fileName) => {
    const fileContent = fs.readFileSync(path.join(projects, fileName), "utf-8");
    const { data: frontMatter } = matter(fileContent);
    return {
      ...frontMatter,
      slug: fileName.replace(".mdx", ""),
    };
  });

  return (
    <main className="flex flex-col items-center justify-between  px-12 md:px-24 lg:px-32 xl:px-48 ">
      <div className="w-full space-y-2 pb-2 pt-6 md:space-y-5 md:pb-8 ">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-relaxed">
          BookShelf
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          I primarily cover tech topics, occasionally sharing insights into my
          personal life.
        </p>
      </div>
      <MarkDownContentList blogs={blogs} />
    </main>
  );
}
