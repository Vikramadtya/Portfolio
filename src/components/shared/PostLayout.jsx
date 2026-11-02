import { MDXRemote } from "next-mdx-remote/rsc";
import BlogHero from "@/components/shared/BlogHero";
import { Separator } from "@/components/ui/Separator";
import { mdxRemoteOptions } from "@/lib/mdxOptions";
import Link from "next/link";

/**
 * A reusable layout wrapper for all MDX-based post pages (projects, reading, watching).
 * Renders the hero section, tags, separator, and the MDX content with syntax highlighting.
 *
 * @param {{ title: string, tags: string[], content: string, demo?: string, repo?: string, backHref?: string, backLabel?: string }} props
 */
export default function PostLayout({ title, tags, content, demo, repo, backHref, backLabel }) {
  return (
    <article className="prose prose-sm mx-auto pb-20 pt-20 md:prose-base lg:prose-lg">
      {backHref && (
        <Link
          href={backHref}
          className="mb-8 inline-block text-sm font-medium text-muted-foreground no-underline hover:text-primary"
        >
          ← {backLabel}
        </Link>
      )}
      <BlogHero title={title} tags={tags} />
      {(demo || repo) && (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 not-prose">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              Live demo ↗
            </a>
          )}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              Source code ↗
            </a>
          )}
        </div>
      )}
      <Separator className="mb-20 mt-20" />

      <MDXRemote source={content} options={mdxRemoteOptions} />
    </article>
  );
}
