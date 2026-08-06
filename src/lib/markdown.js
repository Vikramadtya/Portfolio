import fs from "fs";
import path from "path";
import { PAGES_DIR } from "@/lib/constants";
import matter from "gray-matter";

/**
 * Reads a single MDX page file from `_content/pages/` and returns its
 * frontmatter fields merged with the raw markdown body as `content`.
 *
 * @param {string} pageName - filename without extension (e.g. "about")
 * @returns {{ title: string, content: string, [key: string]: any }}
 */
export function getPageContent(pageName) {
  const fullPath = path.join(PAGES_DIR, `${pageName}.mdx`);
  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return { ...data, content };
  } catch (error) {
    return { title: pageName, content: "" };
  }
}

/**
 * Reads every MDX file in a content directory and returns an array of
 * frontmatter objects, each enriched with a `slug` derived from the filename.
 *
 * Use this instead of inlining fs.readdirSync / matter() in every page.
 *
 * @param {string} contentDir - absolute path to the content directory
 * @returns {Array<{ slug: string, [key: string]: any }>}
 */
export function getContentList(contentDir) {
  try {
    const files = fs.readdirSync(contentDir);
    return files
      .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
      .map((fileName) => {
        try {
          const raw = fs.readFileSync(path.join(contentDir, fileName), "utf8");
          const { data: frontMatter } = matter(raw);
          return { ...frontMatter, slug: fileName.replace(/\.mdx?$/, "") };
        } catch (fileError) {
          console.warn(`Error reading markdown file ${fileName}:`, fileError);
          return null;
        }
      })
      .filter(Boolean); // Remove any nulls from failed file reads
  } catch (error) {
    console.warn(`Content directory not found or unreadable: ${contentDir}`);
    return [];
  }
}
