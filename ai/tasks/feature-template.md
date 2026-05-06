# Feature Template

## Goal

- User-visible feature:

## Requirements

- 

## Constraints

- Use existing App Router, JS/JSX, Tailwind, MDX/JSON patterns
- Prefer `_content` for user-facing content/data
- Avoid new dependencies unless justified

## Search Boundaries

- UI: `ai/indexes/ui.md`
- Data: `ai/indexes/database.md`
- API if needed: `ai/indexes/api.md`
- Likely files:
  - 

## Definition Of Done

- Feature works in target route/flow
- Existing behavior preserved
- Relevant `ai/` docs updated if structure/conventions changed

## Testing Requirements

```bash
cd portfolio-blog-frontend
npm run lint
npm run build
```

- Manual smoke:

## Risks

- Content schema/slug changes
- Client/server boundary mistakes
- Global UI regressions

## Rollback

- Revert feature branch or touched files only
