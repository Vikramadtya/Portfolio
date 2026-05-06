# Conventions

Only observed repo patterns.

## Naming

- Components: PascalCase `.jsx`
  - `HeroSection.jsx`, `ProjectCard.jsx`, `ThemeToggle.jsx`
- Routes: App Router filenames
  - `page.js`, `layout.js`, `[slug]/page.js`
- Lib files: camelCase
  - `markdown.js`, `navigationData.js`, `notificationService.js`
- Content slugs: kebab-case MDX filenames
  - `_content/projects/sort-visualizer.mdx`
- Config files: lower camelCase JSON
  - `_content/config/nowPageData.json`

## Component Structure

- Server components by default
- Client components start with `"use client"`
- Domain folders:
  - `src/components/home/`
  - `src/components/layout/`
  - `src/components/shared/`
  - `src/components/ui/`
- Route-local components:
  - `src/app/about/_component/*.jsx`
- Most components use default exports
- shadcn primitives may use named exports: `Button`, `buttonVariants`

## Import Organization

- External imports first
- Then `@/` aliases
- Then relative imports if needed
- App aliases from `jsconfig.json`:
  - `@/*` -> `./src/*`
  - `@/public/*` -> `./public/*`

## API Patterns

- App Router route handlers under `src/app/api/<name>/route.js`
- External server calls in sibling `services.js`
- Current route response uses native `Response`
- No shared API response helper
- No API schema validation library

## Validation

- Browser form validation in `ContactForm.jsx`
  - `type="email"`
  - `required`
  - `aria-required`
- API trusts request JSON
- MDX/frontmatter schemas are implicit

## TypeScript Rules

- Source is JS/JSX, not TS/TSX
- `pageExtensions` includes TS/TSX, but app files are JS/JSX
- Do not introduce TS unless task explicitly requests migration
- Existing `@ts-ignore`: `src/components/shared/CustomLink.jsx`

## Async Handling

- Content reads are synchronous with `fs`
- Heavy browser-only UI uses `dynamic(..., { ssr: false })`
- Client form submit awaits `fetch("/api/notify")`
- Slack server `fetch` is currently fire-and-forget

## Styling

- Tailwind classes inline in JSX
- CSS variables and base tokens: `src/app/globals.css`
- Component utility classes: `src/app/custom-utilities.css`
- Code block styles: `src/app/syntax-highlighting.css`
- Dark mode: `next-themes` + Tailwind `dark:`
- shadcn config:
  - `style: "new-york"`
  - `tsx: false`
  - `rsc: true`
  - `baseColor: "neutral"`

## Error Handling

- `getPageContent()` catches missing page content and returns empty fallback
- `sitemap.js` catches dynamic route read failure and returns empty list
- Contact route has no error handling
- No logging framework

## Testing

- No test files found
- No `npm test`
- Current verification: `npm run lint`, `npm run build`, manual smoke routes
