# Developer Portfolio Template

Welcome to your new Next.js portfolio! This template is designed to be highly customizable without ever needing to touch complex React code.

## 🚀 Quick Start

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Start the development server:**
    ```bash
    npm run dev
    ```
3.  **Open [http://localhost:3000](http://localhost:3000)** in your browser.

## 🛠️ How to Customize

### 1. Personalize Your Data

All of the hardcoded text, links, and personal information have been extracted into a single configuration file.

Open `src/lib/metadata.js` and modify the fields:

- `title` & `author`: Your name.
- `designation` & `company`: Your current role.
- `avatarImage` & `profileImage`: Paths to your photos (place the actual images in the `public/assets/icons/` folder).
- `whatsNew`: Update the blog link or promotional text on the homepage.
- `greetingTitle` & `greetingHighlight`: Your customized homepage intro text.

### 2. Update Content (Markdown)

This template uses MDX for content pages.

- **About Page:** Edit `src/app/about/content.mdx` to change your long-form biography.
- **Blog Posts:** Add or modify `.mdx` files in the appropriate directories to publish new articles.
- **Timeline:** Edit `src/components/TimeLine.jsx` (which now uses a simple JSON array structure at the top) to add your work history.

### 3. Change Colors & Theming

The site is built with Tailwind CSS and CSS Variables.

To change the global color scheme, open `src/app/globals.css`. At the top of the file under `:root` and `.dark`, you will see HSL color variables like `--primary`, `--background`, and `--border`.

Simply change the HSL values to match your preferred brand color. The entire site (buttons, text highlights, backgrounds) will instantly update!

## ✨ Code Quality Commands

This template enforces strict Next.js and formatting rules.

- **Format all files:** `npm run format`
- **Check for lint errors:** `npm run lint`
- **Build for production:** `npm run build`
