# Auth Index

## Status

- No application auth
- No middleware auth
- No sessions/cookies/JWT/OAuth
- Only secret-bearing flow is Slack webhook for contact form

## Important Files

- `portfolio-blog-frontend/src/app/api/notify/services.js`
- `portfolio-blog-frontend/src/app/api/notify/route.js`
- `portfolio-blog-frontend/src/components/contact/ContactForm.jsx`
- `portfolio-blog-frontend/src/lib/notificationService.js`

## Entry Points

- User submits `/contact`
- `ContactForm.jsx` -> `notify(formData)`
- `notificationService.js` -> `POST /api/notify`
- `route.js` -> `notifySlack()`

## Related Services

- Slack incoming webhook:
  - `SLACK_TOKEN_1`
  - `SLACK_TOKEN_2`
  - `SLACK_TOKEN_3`

## Common Edit Locations

- Add input validation: `src/app/api/notify/route.js`
- Improve Slack delivery handling: `src/app/api/notify/services.js`
- Improve UX after submit: `src/components/contact/ContactForm.jsx`

## Test Locations

- No tests exist
- Future tests should mock `fetch` and cover `route.js`/`services.js`

## Debugging Notes

- Current route does not await Slack `fetch`
- Missing env vars silently produce bad webhook URL
- Build/runtime must stay Node.js for env-backed Slack call

## Dangerous Areas

- Do not log or commit Slack webhook parts
- Do not move Slack service into client code
- Do not introduce auth middleware without documenting new boundaries

