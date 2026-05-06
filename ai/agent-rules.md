# Agent Rules

Highest-priority operating rules for future agents.

## Start

- Read `ai/agent-rules.md` first
- Read `ai/search-boundaries.md` second
- Read the relevant `ai/indexes/*.md` before implementation
- App root is `portfolio-blog-frontend/`
- Check `git status --short` before edits

## Branching + Parallel Work

- Create a branch per task: `codex/<task-name>`
- Prefer git worktrees for parallel tasks:
  - `git worktree add ../Portfolio-<task> -b codex/<task>`
  - `cd ../Portfolio-<task>/portfolio-blog-frontend`
- One agent per worktree
- Assign non-overlapping files/modules
- Avoid parallel edits to:
  - `portfolio-blog-frontend/package-lock.json`
  - `portfolio-blog-frontend/next.config.mjs`
  - `portfolio-blog-frontend/src/app/globals.css`
  - `portfolio-blog-frontend/src/components/ui/*`

## Autonomy

- Work autonomously
- Ask clarification only when blocked by missing information
- If clarification is unavoidable, batch questions together
- Make reasonable assumptions and state them
- Do not pause for minor uncertainty

## Search Discipline

- Use indexes first
- Use targeted `rg`/file reads
- Stop searching once sufficient context is found
- Avoid repo-wide scans
- Avoid opening many files "just in case"
- Never scan:
  - `node_modules/`
  - `.next/`
  - generated/binary assets unless asset task requires it

## Implementation Discipline

- Preserve architecture consistency
- Prefer existing patterns
- Prefer existing utilities/helpers before new abstractions
- Avoid unnecessary dependencies
- Make surgical edits
- Never rewrite unrelated code
- Avoid opportunistic refactors unrelated to the task
- Keep server components server-side unless client behavior is needed
- Keep user-facing content in `_content` when possible
- Do not migrate JS to TS unless explicitly requested

## Output Discipline

- Avoid giant outputs
- Avoid full file dumps
- Keep responses concise
- Summarize diffs by file and behavior
- Do not paste command logs unless needed

## Verification

- Run relevant checks before completion
- Standard checks:
  - `cd portfolio-blog-frontend && npm run lint`
  - `cd portfolio-blog-frontend && npm run build`
- No test runner currently exists
- Do not claim tests/checks passed unless actually run
- If a check cannot run, explain why and what remains risky

## AI Docs Maintenance

`ai/` is repository memory. Keep it synchronized.

- After every task, decide if `ai/` needs updates
- Update relevant docs when changing:
  - architecture
  - file ownership/search boundaries
  - commands/tooling
  - conventions
  - API/data/UI structure
  - testing strategy
  - risky areas
- Prefer surgical doc edits
- Remove stale AI docs when discovered
- Keep paths accurate and commands runnable

## Completion Definition

A task is complete only when:

- implementation is done
- relevant checks ran or blockers are documented
- relevant `ai/` docs are updated
- stale `ai/` information discovered during work is corrected
- final summary includes:
  - code changes
  - AI doc changes
  - checks
  - assumptions
