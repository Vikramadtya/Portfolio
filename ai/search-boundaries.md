# Search Boundaries

Use indexes first. Stop searching once sufficient context is found.

## Authentication

- Status: no app auth
- Start: `ai/indexes/auth.md`
- Important files:
  - `portfolio-blog-frontend/src/app/api/notify/services.js`
  - `portfolio-blog-frontend/src/app/api/notify/route.js`
- Dangerous:
  - Slack env vars: `SLACK_TOKEN_1`, `SLACK_TOKEN_2`, `SLACK_TOKEN_3`
- Avoid:
  - repo-wide auth searches unless adding auth for first time

## APIs

- Start: `ai/indexes/api.md`
- Important folder:
  - `portfolio-blog-frontend/src/app/api/notify/`
- Entry points:
  - `portfolio-blog-frontend/src/lib/notificationService.js`
  - `portfolio-blog-frontend/src/components/contact/ContactForm.jsx`
- Dangerous:
  - changing `runtime = "nodejs"` may break Slack env access

## Database/Data

- Start: `ai/indexes/database.md`
- No database
- File-backed data:
  - `portfolio-blog-frontend/_content/`
  - `portfolio-blog-frontend/src/lib/markdown.js`
  - `portfolio-blog-frontend/src/lib/constants.js`
- Dangerous:
  - implicit MDX frontmatter schemas
  - `process.cwd()` assumes commands/build run from app root

## UI

- Start: `ai/indexes/ui.md`
- Routes:
  - `portfolio-blog-frontend/src/app/**/page.js`
- Layout:
  - `portfolio-blog-frontend/src/app/layout.js`
  - `portfolio-blog-frontend/src/components/layout/`
- Shared/UI:
  - `portfolio-blog-frontend/src/components/shared/`
  - `portfolio-blog-frontend/src/components/ui/`
- Dangerous:
  - `src/components/ui/Icon.jsx`
  - `src/app/globals.css`
  - `src/app/custom-utilities.css`

## Middleware

- No middleware file found
- Avoid scanning for middleware unless task explicitly adds it

## Realtime

- No websocket/SSE/realtime layer
- Only polling/timer behavior: `portfolio-blog-frontend/src/app/now/NowClient.jsx`

## Shared Utilities

- `portfolio-blog-frontend/src/lib/utils.js` - `cn()`
- `portfolio-blog-frontend/src/lib/seo.js`
- `portfolio-blog-frontend/src/lib/markdown.js`
- `portfolio-blog-frontend/src/lib/*Data.js`

## Tests

- Start: `ai/indexes/testing.md`
- No tests found
- No test script
- Use `npm run lint` and `npm run build`

## Configuration

- App package/scripts: `portfolio-blog-frontend/package.json`
- Next/MDX/SVG/build: `portfolio-blog-frontend/next.config.mjs`
- Tailwind: `portfolio-blog-frontend/tailwind.config.js`
- shadcn: `portfolio-blog-frontend/components.json`
- Paths: `portfolio-blog-frontend/jsconfig.json`
- Docker: `portfolio-blog-frontend/dev.Dockerfile`
- Root Makefile is stale unless `docker/dev/*` exists

## Avoid Scanning

- `portfolio-blog-frontend/node_modules/`
- `portfolio-blog-frontend/.next/`
- image binaries under `public/assets/`
- root `assets/` unless working on docs/source assets
