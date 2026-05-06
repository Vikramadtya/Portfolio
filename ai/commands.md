# Commands

Run app commands from `portfolio-blog-frontend/`.

## Install

```bash
cd portfolio-blog-frontend
npm ci
```

## Dev

```bash
cd portfolio-blog-frontend
npm run dev
```

- URL: `http://localhost:3000`
- Alternate port: `npm run dev -- --port 3001`

## Build

```bash
cd portfolio-blog-frontend
npm run build
```

- Uses `next/font` for Inter; build may need network access to `fonts.googleapis.com`

## Lint

```bash
cd portfolio-blog-frontend
npm run lint
```

## Format

```bash
cd portfolio-blog-frontend
npm run format
```

- Runs Prettier over the app directory; expect broad formatting changes

## Start

```bash
cd portfolio-blog-frontend
npm run start
```

- Requires `npm run build`

## Test

- No test script exists
- Use lint/build plus manual smoke checks