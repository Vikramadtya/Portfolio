# API Index

## Important Files

- `portfolio-blog-frontend/src/app/api/notify/route.js`
- `portfolio-blog-frontend/src/app/api/notify/services.js`
- `portfolio-blog-frontend/src/lib/notificationService.js`
- `portfolio-blog-frontend/src/components/contact/ContactForm.jsx`

## Entry Points

- HTTP: `POST /api/notify`
- Client call: `notify(new FormData(event.currentTarget))`

## Current API Behavior

- Parses `await request.json()`
- Sends body to Slack as JSON string
- Returns JSON string with original body plus `timestamp`
- Exports:
  - `dynamic = "force-dynamic"`
  - `runtime = "nodejs"`

## Related Services

- Slack webhook in `services.js`

## Common Edit Locations

- Request validation/error response: `route.js`
- External Slack behavior: `services.js`
- Browser submit payload: `src/lib/notificationService.js`
- Form fields/UX: `ContactForm.jsx`

## Test Locations

- None currently
- Future route tests should mock:
  - `request.json()`
  - Slack `fetch`

## Debugging Notes

- No API error envelope exists
- No rate limiting/captcha
- No `Content-Type` response header currently set

## Dangerous Areas

- Keep webhook secret server-only
- Keep `runtime = "nodejs"` unless replacing Slack/env access
- Do not add dependencies for one-route validation unless justified

