import { READING_DIR } from "@/lib/constants";
import { getStaticPathsFromDir, getPostBySlug } from "@/lib/markdown";
import { genPageMetadata } from "@/lib/seo";
import PostLayout from "@/components/shared/PostLayout";

export async function generateStaticParams() {
  return getStaticPathsFromDir(READING_DIR);
}

export async function generateMetadata({ params }) {
  const props = getPostBySlug(params.slug, READING_DIR);
  return genPageMetadata({
    title: props.contentMetadata.frontMatter.title,
    description: props.contentMetadata.frontMatter.description,
  });
}

export default function Post({ params }) {
  const props = getPostBySlug(params.slug, READING_DIR);

  return (
    <PostLayout 
      title={props.contentMetadata.frontMatter.title}
      tags={props.contentMetadata.frontMatter.tags}
      content={props.content}
    />
  );
}
