# AI Directory

Lean repo memory for future coding agents. Use it to avoid broad scans and repeated architecture discovery.

## Repo Facts

- Next.js app root: `portfolio-blog-frontend/`
- Run npm commands from `portfolio-blog-frontend/`
- Root contains `README.md`, `Makefile`, `assets/`, and `ai/`

## Read Order

1. `ai/agent-rules.md`
2. `ai/search-boundaries.md`
3. Relevant index in `ai/indexes/`
4. `ai/architecture.md` and `ai/conventions.md` only if needed
5. `ai/commands.md` before verification

## Workflow

- Create branch: `codex/<task-name>`
- Use targeted search from `search-boundaries.md`
- Inspect only files in scope
- Implement surgically
- Run checks from `portfolio-blog-frontend/`
- Update stale/relevant `ai/` docs before completion
- Summarize code changes, AI doc changes, checks, assumptions

## Worktrees

For parallel agents:

```bash
git worktree add ../Portfolio-<task> -b codex/<task>
cd ../Portfolio-<task>/portfolio-blog-frontend
npm ci
```

- One agent per worktree
- Assign disjoint write areas
- Avoid parallel writes to `package-lock.json`, `next.config.mjs`, global CSS, and `src/components/ui/*`

## Task Files

Use `ai/tasks/*-template.md` to create compact task specs.

Each task should define:

- goal
- requirements
- constraints
- search boundaries
- definition of done
- verification
- risks and rollback
