import React from "react";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Card from "@/components/atom/card";

export default function Blog() {
  const watching = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "..",
    "_markdown_content",
    "watching",
  );
  const files = fs.readdirSync(watching);

  let blogs = files.map((fileName) => {
    const fileContent = fs.readFileSync(path.join(watching, fileName), "utf-8");
    const { data: frontMatter } = matter(fileContent);
    return {
      ...frontMatter,
      slug: fileName.replace(".mdx", ""),
    };
  });

  return (
    <main className="flex flex-col items-center justify-between  px-12 md:px-24 lg:px-32 xl:px-48">
      <div className="w-full space-y-2 pb-8 pt-6 md:space-y-5 ">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-relaxed">
          Watchlist
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-100">
          A collection of shows, movies, and videos that have caught my
          attention. From gripping narratives to thought-provoking
          documentaries, this section offers a peek into the stories and visuals
          that inspire and entertain me.
        </p>
      </div>
      <div className="w-full columns-1 pb-32 pt-32 md:columns-2  xl:columns-3">
        {blogs.map((blog) => (
          <Card
            title={blog.title}
            description={blog.description}
            tags={blog.tags}
            slug={`/watching/${blog.slug}`}
            cover={`watching/${blog.cover}`}
            key={blog.id}
          />
        ))}
      </div>
    </main>
  );
}
