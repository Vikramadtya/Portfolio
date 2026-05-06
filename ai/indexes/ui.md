# UI Index

## Important Folders

- `portfolio-blog-frontend/src/app/`
- `portfolio-blog-frontend/src/components/layout/`
- `portfolio-blog-frontend/src/components/shared/`
- `portfolio-blog-frontend/src/components/ui/`
- `portfolio-blog-frontend/src/components/home/`
- `portfolio-blog-frontend/src/app/about/_component/`

## Entry Points

- Root layout: `src/app/layout.js`
- Home: `src/app/page.js`
- Static routes: `src/app/<route>/page.js`
- Dynamic MDX routes:
  - `src/app/projects/[slug]/page.js`
  - `src/app/reading/[slug]/page.js`
  - `src/app/watching/[slug]/page.js`

## Shared Components

- Page/content rendering:
  - `src/components/shared/PageHeader.jsx`
  - `src/components/shared/ArticleList.jsx`
  - `src/components/shared/BlogHero.jsx`
- Cards:
  - `src/components/shared/ProjectCard.jsx`
  - `src/components/ui/Card.jsx`
  - `src/components/shared/GenericCard.jsx`
- Shell:
  - `src/components/layout/Header.jsx`
  - `src/components/layout/Footer.jsx`
  - `src/components/layout/DropMenu.jsx`
  - `src/components/layout/CommandPalette.jsx`

## Styling Files

- `src/app/globals.css`
- `src/app/custom-utilities.css`
- `src/app/syntax-highlighting.css`
- `tailwind.config.js`
- `components.json`

## Common Edit Locations

- Add route: `src/app/<route>/page.js`
- Add page copy: `_content/pages/<route>.mdx`
- Add nav item: `_content/config/navigationData.json`
- Add icon kind: `src/components/ui/Icon.jsx`
- Add shared card/list UI: `src/components/shared/`

## Test Locations

- No tests exist
- Future component tests should mock browser-only dependencies and avoid large snapshots

## Debugging Notes

- `"use client"` needed for hooks, router, dialog, sound, theme, timers
- `Icon.jsx` returns `null` for unknown `kind`
- `next/image` paths are rooted under `public/`

## Dangerous Areas

- `src/components/ui/Icon.jsx` is a large manual registry
- Global CSS affects many routes
- `src/app/layout.js` controls metadata, theme, header, footer

