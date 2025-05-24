import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getSortedMarkdownData(directory) {
  const absoluteDirectory = path.join(process.cwd(), '_markdown_content', directory);
  const fileNames = fs.readdirSync(absoluteDirectory);

  const allData = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const fullPath = path.join(absoluteDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data: frontMatter } = matter(fileContents);
      const slug = fileName.replace(/\.mdx$/, '');

      return {
        slug,
        ...frontMatter,
      };
    });

  // Sort by date in descending order
  // Items without a date will be placed at the end
  return allData.sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date) - new Date(a.date);
    } else if (a.date) {
      return -1; // a comes first
    } else if (b.date) {
      return 1; // b comes first
    }
    return 0; // no change in order
  });
}
