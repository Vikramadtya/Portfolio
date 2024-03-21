import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";

import BlogMetadata from "@/lib/blogMetadata";
import BlogHero from "@/components/molecules/blogHero";
import { Separator } from "@/components/atom/separator";
import Doodle from "@/components/atom/svgs/doodle";
import StickyBar from "@/components/atom/stickyBar";
import Comments from "@/components/atom/comments";
import readingTime from "reading-time";

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

  const readingData = readingTime(content);

  const contentMetadata = {
    frontMatter: frontMatter,
    readingData: readingData,
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
      <Separator />

      <MDXRemote source={props.content} />
      <StickyBar />

      <div className="flex items-center justify-center">
        <Doodle classData={"h-20 w-20"} />
      </div>
      <Separator className="mb-20 mt-20" />

      <div className="flex items-center justify-center">
        <Comments />
      </div>
    </article>
  );
}
