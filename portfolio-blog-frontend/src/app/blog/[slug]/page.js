import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";

import BlogMetadata from "@/lib/blogMetadata";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(BlogMetadata.localBlogLocation));

  const paths = files.map((fileName) => ({
    slug: fileName.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }) {
  const markdownFile = fs.readFileSync(
    path.join(BlogMetadata.localBlogLocation, slug + ".mdx"),
    "utf-8",
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export async function generateMetadata({ params }) {
  const blog = getPost(params);

  return {
    title: blog.frontMatter.title,
    description: blog.frontMatter.description,
  };
}

export default function Post({ params }) {
  const props = getPost(params);

  return (
    <article className="prose prose-sm mx-auto  pb-20 pt-20 md:prose-base lg:prose-lg ">
      <h1>{props.frontMatter.title}</h1>

      <MDXRemote source={props.content} />
    </article>
  );
}
