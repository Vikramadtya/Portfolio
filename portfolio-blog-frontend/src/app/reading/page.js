import React from "react";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Card from "@/components/atom/card";

export default function Blog() {
  const projects = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "..",
    "_markdown_content",
    "bookshelf",
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
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-100">
          A glimpse into the books, articles, and ideas that are currently
          inspiring me. From thought-provoking concepts to captivating stories,
          this section reflects my journey of learning and exploration.
        </p>
      </div>
      <div className="w-full columns-1 pb-32 pt-32 md:columns-2  xl:columns-3">
        {blogs.map((blog) => (
          <Card
            title={blog.title}
            description={blog.description}
            tags={blog.tags}
            slug={"/reading/" + blog.slug}
            key={blog.id}
          />
        ))}
      </div>
    </main>
  );
}
