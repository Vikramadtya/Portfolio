import { PROJECTS_DIR } from "@/lib/constants";
import { getStaticPathsFromDir, getPostBySlug } from "@/lib/markdown";
import { genPageMetadata } from "@/lib/seo";
import siteMetadata from "@/lib/metadata";
import PostLayout from "@/components/shared/PostLayout";

export async function generateStaticParams() {
  return getStaticPathsFromDir(PROJECTS_DIR);
}

export async function generateMetadata({ params }) {
  const props = getPostBySlug(params.slug, PROJECTS_DIR);
  return genPageMetadata({
    title: props.contentMetadata.frontMatter.title,
    description: props.contentMetadata.frontMatter.description,
    path: `/projects/${params.slug}`,
  });
}

export default function Post({ params }) {
  const props = getPostBySlug(params.slug, PROJECTS_DIR);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: props.contentMetadata.frontMatter.title,
    description: props.contentMetadata.frontMatter.description,
    author: [
      {
        "@type": "Person",
        name: siteMetadata.author,
        url: siteMetadata.siteUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PostLayout 
        title={props.contentMetadata.frontMatter.title}
        tags={props.contentMetadata.frontMatter.tags}
        content={props.content}
      />
    </>
  );
}
