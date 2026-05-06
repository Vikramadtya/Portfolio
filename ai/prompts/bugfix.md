# Bugfix Prompt

Fix the bug autonomously.

Read:

- ai/agent-rules.md
- ai/indexes/*auth*.md


```text
<bug report>
```

Tasks:

1. identify root cause
2. identify affected files
3. propose minimal safe fix
4. implement if confidence is high

Rules:

- Read the relevant index
- Reproduce or trace to likely boundary
- Patch smallest cause
- No unrelated refactors
- Run relevant checks from `portfolio-blog-frontend/`
- Update stale/relevant `ai/` docs
- Avoid broad rewrites.
- Avoid speculative fixes.
- Keep investigation targeted.
- Fix the issue autonomously.
- Keep changes surgical.
- Preserve backwards compatibility.
- Avoid unrelated refactors.
- Run relevant tests before completion.
- Update relevant ai docs if needed.
- Provide concise diff summary only.

Final response:

- root cause
- fix
- AI doc changes
- checks
- residual risk
