# Testing Index

## Current Status

- No test files found
- No `npm test`
- No test framework
- No CI workflow found

## Verification Commands

```bash
cd portfolio-blog-frontend
npm run lint
npm run build
```

## Manual Smoke Routes

- `/`
- `/about`
- `/projects`
- `/projects/sort-visualizer`
- `/reading`
- `/reading/alchemist`
- `/watching`
- `/watching/tenet`
- `/now`
- `/contact`
- `/sitemap.xml`
- `/robots.txt`

## Common Future Test Locations

- Components: near `src/components/**`
- API route/service: near `src/app/api/notify/**`
- Content readers: near `src/lib/markdown.js` with fixtures

## Mocking Notes

- Mock `fetch` for Slack/API tests
- Mock `fs` or use temp fixtures for content readers
- Mock browser APIs for client components:
  - `matchMedia`
  - timers
  - audio hooks

## Debugging Notes

- `npm run build` validates static route generation and MDX imports
- Build may require network access for Google Fonts
- Lint uses Next lint via `eslint-config-next`

## Dangerous Areas

- Do not add a full test framework casually
- If adding tooling, update:
  - `ai/commands.md`
  - `ai/indexes/testing.md`
  - `ai/conventions.md`

