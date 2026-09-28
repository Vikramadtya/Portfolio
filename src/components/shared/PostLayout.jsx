import { MDXRemote } from "next-mdx-remote/rsc";
import BlogHero from "@/components/shared/BlogHero";
import { Separator } from "@/components/ui/Separator";
import { mdxRemoteOptions } from "@/lib/mdxOptions";

/**
 * A reusable layout wrapper for all MDX-based post pages (projects, reading, watching).
 * Renders the hero section, tags, separator, and the MDX content with syntax highlighting.
 *
 * @param {{ title: string, tags: string[], content: string }} props
 */
export default function PostLayout({ title, tags, content }) {
  return (
    <article className="prose prose-sm mx-auto pb-20 pt-20 md:prose-base lg:prose-lg">
      <BlogHero title={title} tags={tags} />
      <Separator className="mb-20 mt-20" />

      <MDXRemote source={content} options={mdxRemoteOptions} />
    </article>
  );
}
