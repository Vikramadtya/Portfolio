# Refactor Template

## Goal

- Internal improvement:

## Requirements

- Preserve behavior for:
  - Routes:
  - Content:
  - API:
  - Styling:

## Constraints

- No unrelated behavior changes
- No dependency additions unless explicitly required
- Avoid formatting churn

## Search Boundaries

- Read:
  - `ai/architecture.md`
  - `ai/conventions.md`
  - relevant `ai/indexes/*.md`
- Owned files:
  - 
- Forbidden files:
  - 

## Definition Of Done

- Public behavior unchanged
- Imports updated
- Relevant `ai/` docs updated if architecture/conventions changed

## Testing Requirements

```bash
cd portfolio-blog-frontend
npm run lint
npm run build
```

## Risks

- Hidden route/content coupling
- Client/server boundary regressions

## Rollback

- Revert refactor branch/files only
