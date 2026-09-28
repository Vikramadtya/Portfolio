import rehypePrettyCode from "rehype-pretty-code";
import { getHighlighter } from "shiki";
import rehypeSlug from "rehype-slug";

/**
 * Standardized configuration for rehype-pretty-code used across all MDX pages.
 */
export const prettyCodeOptions = {
  theme: "catppuccin-latte",
  keepBackground: true,
  defaultLang: {
    block: "plaintext",
    inline: "plaintext",
  },
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = { type: "text", value: " " };
    }
  },
  getHighlighter: (options) => {
    return getHighlighter({
      ...options,
      langs: [
        "svelte",
        "typescript",
        "html",
        "css",
        "javascript",
        "bash",
        "shell",
        "python",
        "java",
        "md",
        "go",
        "rust",
        "c",
        "cpp",
        "csharp",
        "php",
        "json",
        "yaml",
        "swift",
      ],
    });
  },
};

/**
 * Standardized MDX Remote Options configuration
 */
export const mdxRemoteOptions = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeSlug, [rehypePrettyCode, prettyCodeOptions]],
  },
};
