import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";

import BlogMetadata from "@/lib/blogMetadata";
import dayjs from "dayjs";
import BlogHero from "@/components/molecules/blogHero";
import { Separator } from "@/components/atom/separator";
import Doodle from "@/components/atom/svgs/doodle";
import StickyBar from "@/components/atom/stickyBar";
import Giscus from "@giscus/react";
import SiteMetadata from "@/lib/metadata";
import Comments from "@/components/atom/comments";

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
      <BlogHero
        title={props.frontMatter.title}
        date={props.frontMatter.date}
        tags={props.frontMatter.tags}
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
