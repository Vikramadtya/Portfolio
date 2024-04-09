import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";

import BlogHero from "@/components/molecules/blogHero";
import { Separator } from "@/components/atom/separator";

import "../../markdown.css";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

const projects = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "..",
  "..",
  "..",
  "_markdown_content",
  "projects",
);
export async function generateStaticParams() {
  const files = fs.readdirSync(projects);

  const paths = files.map((fileName) => ({
    slug: fileName.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }) {
  const markdownFile = fs.readFileSync(
    path.join(projects, slug + ".mdx"),
    "utf-8",
  );

  const { data: frontMatter, content } = matter(markdownFile);

  const contentMetadata = {
    frontMatter: frontMatter,
  };

  return {
    contentMetadata,
    slug,
    content,
  };
}

export async function generateMetadata({ params }) {
  const props = getPost(params);

  return {
    title: props.contentMetadata.frontMatter.title,
    description: props.contentMetadata.frontMatter.description,
  };
}

export default function Post({ params }) {
  const props = getPost(params);

  return (
    <article className="prose prose-sm mx-auto  pb-20 pt-20 md:prose-base lg:prose-lg ">
      <BlogHero
        title={props.contentMetadata.frontMatter.title}
        date={props.contentMetadata.frontMatter.date}
        tags={props.contentMetadata.frontMatter.tags}
        readingData={props.contentMetadata.readingData}
      />
      <Separator className="mb-20 mt-20" />

      <MDXRemote
        source={props.content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypePrettyCode],
          },
        }}
      />
    </article>
  );
}
