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
    <main className="flex flex-col items-center justify-between px-12 md:px-24 lg:px-32 xl:px-48">
      <div className="w-full space-y-2 pb-8 pt-6 md:space-y-5 ">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-relaxed">
          Projects
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Welcome to my Projects page! Here, you&apos;ll find a curated
          selection of projects that showcase my technical skills, creativity,
          and problem-solving abilities. From innovative software solutions to
          collaborative initiatives, each project reflects my commitment to
          excellence and passion for technology. Explore these projects to gain
          insights into my approach to problem-solving, design, and
          implementation. Whether it&apos;s algorithms, data structures,
          application development, or cybersecurity, each project demonstrates
          my versatility and adaptability in tackling diverse challenges.
        </p>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          I invite you to click on each project to learn more about its
          objectives, technologies used, and my role in its development. Feel
          free to reach out if you have any questions or would like to discuss
          these projects in more detail. Thank you for taking the time to
          explore my work!
        </p>
      </div>
      <MarkDownContentList blogs={blogs} />
    </main>
  );
}
