# Feature Prompt

Implement the feature autonomously.

Read:

- ai/agent-rules.md
- ai/architecture.md
- ai/conventions.md
- ai/indexes/*.md

Then read:

- ai/tasks/<task>.md
  
Rules:

- Use existing JS/JSX, App Router, Tailwind, MDX/JSON patterns
- Avoid clarification unless blocked; batch questions if needed
- Do not add dependencies unless necessary
- Run checks from `portfolio-blog-frontend/`
- Update relevant `ai/` docs before final response
- Do not ask for confirmation unless blocked.
- Avoid unnecessary output.
- Avoid repo-wide scanning.
- Use indexes first.

Operate autonomously:

- Create branch `codex/<feature>`
- implement end-to-end
- run tests/typecheck/lint
- update relevant ai docs
- provide concise final summary

Final response:

- code changes
- AI doc changes
- checks run
- assumptions
