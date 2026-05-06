# Database Index

## Status

- No database
- No ORM
- No migrations
- No persistence layer

## Data Source Files

- Content constants: `portfolio-blog-frontend/src/lib/constants.js`
- Content readers: `portfolio-blog-frontend/src/lib/markdown.js`
- MDX content:
  - `portfolio-blog-frontend/_content/pages/`
  - `portfolio-blog-frontend/_content/projects/`
  - `portfolio-blog-frontend/_content/bookshelf/`
  - `portfolio-blog-frontend/_content/watching/`
- JSON config:
  - `portfolio-blog-frontend/_content/config/*.json`
- JSON adapters:
  - `src/lib/metadata.js`
  - `src/lib/navigationData.js`
  - `src/lib/nowPageData.js`
  - `src/lib/techStackData.js`
  - `src/lib/timelineData.js`

## Entry Points

- `getPageContent(pageName)`
- `getContentList(contentDir)`
- Dynamic routes call `fs.readFileSync(path.join(dir, slug + ".mdx"))`

## Common Edit Locations

- Add static page copy: `_content/pages/<name>.mdx`
- Add project: `_content/projects/<slug>.mdx`
- Add reading item: `_content/bookshelf/<slug>.mdx`
- Add watching item: `_content/watching/<slug>.mdx`
- Update navigation/metadata/timeline/tools/now: `_content/config/*.json`

## Test Locations

- No tests exist
- Future tests should use fixture dirs and mock/avoid real `_content`

## Debugging Notes

- `process.cwd()` must be app root
- Missing content files can break build
- `getPageContent()` silently falls back to empty content
- `getContentList()` does not catch read errors

## Dangerous Areas

- Frontmatter schemas are implicit
- Dynamic route code duplicated in projects/reading/watching
- Renaming content files changes slugs and URLs

