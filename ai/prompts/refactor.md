# Refactor Prompt

Refactor without changing behavior.

Read:

- ai/agent-rules.md
- ai/conventions.md
- ai/architecture.md
- ai/indexes/*.md

Then read:

- ai/tasks/<refactor-*-state>.md

Rules:

- Create branch `codex/<refactor>`
- Define behavior to preserve before editing
- Keep edits scoped
- Avoid dependency additions and formatting churn
- Run checks from `portfolio-blog-frontend/`
- Update `ai/` docs if architecture/conventions/search boundaries changed
- Perform the refactor autonomously.
- Preserve behavior exactly.
- Avoid unnecessary architectural changes.
- Prefer incremental safe edits.
- Run tests/typecheck before completion.
- Update relevant ai docs afterward.

Final response:

- internal changes
- preserved behavior
- AI doc changes
- checks
- assumptions
