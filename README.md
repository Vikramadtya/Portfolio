# Developer Portfolio & Blog

![logo](https://github.com/Vikramadtya/Portfolio/blob/main/assets/logo.png)

A highly dynamic, modern developer portfolio built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **MDX**. 

## ✨ Dynamic Features

This portfolio goes beyond static pages. It includes several real-time, dynamic integrations:

- **Spotify 'Now Playing'**: Fetches your currently playing song from Spotify in real-time.
- **Notion Headless CMS**: The "Now" page statuses (Watching, Reading, Drinking, Location) are fetched live from a Notion database. You can update your portfolio directly from the Notion mobile app!
- **Live Guestbook**: A fully authenticated guestbook (using NextAuth and GitHub OAuth) backed by Upstash Redis, allowing visitors to sign and leave messages.
- **Dynamic OpenGraph Images**: Automatically generates custom social media preview images (OG images) on the edge for every blog post using `next/og`.
- **Discord Contact Form**: Form submissions on the "Contact" page skip email entirely and are sent directly to a private Discord channel via Webhooks.
- **Live Local Weather**: Fetches real-time weather data for your location using the OpenWeatherMap API.
- **Live GitHub Graph**: Renders your actual GitHub contributions calendar.
- **Interactive Terminal**: A hidden command-line easter egg on the homepage.

---

## 🎨 No-Code Customization (Zero Source Code Edits)

This template is designed with a **strict separation of concerns**. The React source code (`/src`) acts as a pure black box. If you clone this repository, you can completely rebrand the site, change all English text, update navigation, and add projects **without ever opening a `.jsx` or `.js` file**. 

Everything is driven by the `_content/` directory acting as a headless CMS:

1. **Brand & Identity**: Edit `_content/config/metadata.json` to change the site title, your name, social links, SEO tags, and colors.
2. **Navigation**: Edit `_content/config/navigationData.json` to change menu links and shortcuts.
3. **Component UI Text**: Open `_content/components/` and edit the JSON files to translate or customize the text in the Animated Bio, Guestbook, Contact form, and Footer.
4. **Pages & Projects**: Write Markdown (MDX) inside `_content/pages/` and `_content/projects/` to populate your portfolio pages.
5. **Data Arrays**: Edit `_content/config/timelineData.json` and `toolsData.json` to populate your journey and tech stack.

---

## 🛠️ Environment Setup

To run this project locally or in production, duplicate the `.env.example` file and rename it to `.env.local`. Then, fill in your specific API keys:

```env
# Server Configuration
PORT=3000

# Weather API (OpenWeatherMap)
WEATHER_API_KEY=your_openweathermap_api_key_here

# Notion API (for custom Now page statuses)
NOTION_TOKEN=your_notion_integration_secret_here
NOTION_DATABASE_ID=your_notion_database_id_here

# Discord Webhook (for Contact Me form submissions)
DISCORD_WEBHOOK_URL=your_discord_webhook_url_here

# Guestbook (NextAuth + Upstash Redis)
GITHUB_ID=your_github_oauth_client_id_here
GITHUB_SECRET=your_github_oauth_client_secret_here
NEXTAUTH_SECRET=a_random_32_character_string_here
NEXTAUTH_URL=http://localhost:3000
UPSTASH_REDIS_REST_URL=your_upstash_redis_url_here
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token_here

# Spotify API (for Now Playing card)
SPOTIFY_CLIENT_ID=your_spotify_client_id_here
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret_here
SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token_here
```

### How to get your keys:
1. **OpenWeatherMap**: Create a free account at [openweathermap.org](https://openweathermap.org/) and generate an API key.
2. **Notion**: Create an integration at [Notion Developers](https://www.notion.so/my-integrations). Create a Table Database in Notion with columns `Heading` (Title), `Content` (Text), and `Icon` (Select). Connect the integration to your page to get the `NOTION_DATABASE_ID`.
3. **Discord**: Go to your Discord server channel settings > Integrations > Webhooks > Create Webhook, and copy the URL.
4. **Guestbook (GitHub & Upstash)**: Create an OAuth App in GitHub Developer Settings to get `GITHUB_ID` and `GITHUB_SECRET`. Create a free Redis database at [Upstash](https://upstash.com/) for the REST URL and Token. Generate a random `NEXTAUTH_SECRET`.
5. **Spotify**: Follow the [Spotify API documentation](https://developer.spotify.com/documentation/web-api) to create an app, get your Client ID/Secret, and generate a Refresh Token.

---

## 🚀 Deployment & Observability

This project is optimized for zero-config deployment on Vercel and features full-stack, end-to-end distributed tracing via Sentry. 

For step-by-step instructions on deploying the site and configuring the free Observability / Tracing tier, please read the **[Deployment Guide](deployment.md)**.

---

## Getting Started (Local Development)

To run the development server locally on your machine:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or whatever you set your `PORT` to) in your browser to see the result.
