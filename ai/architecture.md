# Architecture

## Folder Structure

- `portfolio-blog-frontend/` - app root
- `portfolio-blog-frontend/src/app/` - Next.js App Router pages/routes
- `portfolio-blog-frontend/src/app/api/notify/` - only API route
- `portfolio-blog-frontend/src/components/` - React components by domain
- `portfolio-blog-frontend/src/components/ui/` - shadcn/Radix-style primitives and icon registry
- `portfolio-blog-frontend/src/lib/` - content readers, JSON adapters, SEO, utilities
- `portfolio-blog-frontend/_content/` - MDX and JSON content source
- `portfolio-blog-frontend/public/` - served assets
- `assets/` - root docs/source assets, not app runtime source

## Major Layers

- Routes: `src/app/**/page.js`, `layout.js`, `sitemap.js`, `robots.js`
- Content/data:
  - `src/lib/markdown.js`
  - `_content/pages/*.mdx`
  - `_content/projects/*.mdx`
  - `_content/bookshelf/*.mdx`
  - `_content/watching/*.mdx`
  - `_content/config/*.json`
- Shared renderers:
  - `src/components/shared/PageHeader.jsx`
  - `src/components/shared/ArticleList.jsx`
  - `src/components/shared/ProjectCard.jsx`
  - `src/components/shared/BlogHero.jsx`
- UI shell:
  - `src/components/layout/Header.jsx`
  - `src/components/layout/Footer.jsx`
  - `src/components/layout/DropMenu.jsx`
  - `src/components/layout/CommandPalette.jsx`
  - `src/components/layout/ThemeProvider.jsx`

## Service Boundaries

- No separate backend service
- Only API route: `POST /api/notify`
- Server files:
  - `src/app/api/notify/route.js`
  - `src/app/api/notify/services.js`
- Client caller:
  - `src/components/contact/ContactForm.jsx`
  - `src/lib/notificationService.js`
- External integration: Slack webhook only

## Auth Flow

- No user auth
- No sessions, middleware auth, protected routes, OAuth, or JWT
- Slack webhook secret is assembled from env vars:
  - `SLACK_TOKEN_1`
  - `SLACK_TOKEN_2`
  - `SLACK_TOKEN_3`

## API Structure

- `src/app/api/notify/route.js`
  - `dynamic = "force-dynamic"`
  - `runtime = "nodejs"`
  - `POST(request)` reads JSON and returns echoed body plus timestamp
- `src/app/api/notify/services.js`
  - `notifySlack(message)` posts to Slack webhook
  - current implementation does not await/catch `fetch`

## Database Access Patterns

- No database
- `_content` acts as file-backed data store
- `src/lib/constants.js` defines absolute content paths via `process.cwd()`
- `src/lib/markdown.js` uses sync `fs.readFileSync` / `fs.readdirSync`
- Frontmatter schemas are implicit

## State Management

- Default: server components
- Client state is local only:
  - theme: `next-themes`
  - menu/palette open state: `useState`
  - clock: `NowClient.jsx` interval
  - hero animation density: `HeroSection.jsx` `matchMedia`
- No Redux/Zustand/React Query/global store

## Architectural Decisions

- Nested app root: `portfolio-blog-frontend/`
- App Router + server components by default
- Repo-local MDX/JSON instead of CMS/DB
- Tailwind + shadcn/Radix primitives
- SVGs imported as React components through custom SVGR webpack rule in `next.config.mjs`
- Standalone Next output for Docker via `dev.Dockerfile`
