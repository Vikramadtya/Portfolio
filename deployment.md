# Deployment & Observability Guide

This project is optimized for zero-config deployment on [Vercel](https://vercel.com) and features full-stack distributed tracing and performance metrics via [Sentry](https://sentry.io).

## 🚀 Vercel Deployment

### Step-by-Step Deployment Plan:
1. **Push to GitHub**: Ensure all your code is committed and pushed to a GitHub repository. *(Do not commit your `.env.local` file!)*
2. **Import Project**: Log into Vercel and click **Add New... > Project**. Import your GitHub repository.
3. **Configure Environment Variables**: 
   - Before clicking Deploy, open the **Environment Variables** section in the Vercel deployment screen.
   - Copy **all** the keys from your `.env.local` file (`WEATHER_API_KEY`, `NOTION_TOKEN`, `DISCORD_WEBHOOK_URL`, `UPSTASH_REDIS_REST_URL`, etc.) and their respective values into Vercel.
4. **Deploy**: Click the **Deploy** button. Vercel will automatically detect that this is a Next.js App Router project and build the application.

---

## 🔬 Observability, Metrics & Tracing (Free)

This codebase is instrumented with `@sentry/nextjs` for 100% free full-stack observability. 

### What it does:
- **End-to-End Distributed Tracing**: Every time a user clicks a button or navigates in the UI, a Trace ID is generated. If that UI action triggers a `fetch()` to one of your Next.js API routes (e.g. `/api/guestbook` or `/api/notify`), the Trace ID is automatically propagated to the backend via headers. You can see the exact waterfall of performance from the browser click down to the server-side database query.
- **Performance Metrics**: Out-of-the-box tracking for Web Vitals (LCP, FID, CLS) and API response times.
- **Logging Context**: Any `console.error` thrown anywhere in the stack automatically attaches the Trace ID, so you know exactly which user session caused the error.

### How to configure it:
Everything is strictly controlled via environment variables. **If you do not provide the environment variable, the SDK gracefully sleeps and the app will not crash.**

1. Create a free developer account at [Sentry.io](https://sentry.io).
2. Create a new **Next.js** project in Sentry.
3. Grab your Client DSN (Data Source Name).
4. Add the following to your Vercel Environment Variables (and `.env.local`):

```env
NEXT_PUBLIC_SENTRY_DSN=https://your-dsn-url@sentry.io/123456
```

That's it! As soon as `NEXT_PUBLIC_SENTRY_DSN` is populated, your app will immediately begin sending performance traces, UI click metrics, and logs back to your Sentry dashboard.
