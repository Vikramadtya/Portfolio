# Bugfix Template

## Goal

- Fix:

## Reproduction

1. 
2. 
3. 

## Requirements

- Expected:
- Actual:

## Constraints

- Patch smallest failing boundary
- No opportunistic refactors
- Preserve unrelated behavior

## Search Boundaries

- Start with `ai/search-boundaries.md`
- Relevant index:
  - `ai/indexes/<area>.md`
- Likely files:
  - 

## Definition Of Done

- Bug no longer reproduces
- Regression risk checked
- Relevant `ai/` docs updated if stale info found

## Testing Requirements

```bash
cd portfolio-blog-frontend
npm run lint
npm run build
```

- Manual repro check:

## Risks

- 

## Rollback

- Revert only bugfix files
