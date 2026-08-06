import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ThemeProvider from "@/components/layout/ThemeProvider";
import TerminalOverlay from "@/components/layout/TerminalOverlay";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

import siteMetadata from "@/lib/metadata";

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl || "https://your-portfolio.com"),
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    locale: siteMetadata.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
  },
};

export default function RootLayout({ children }) {
  // Global JSON-LD Schema for a "Person" entity
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteMetadata.author,
    url: siteMetadata.siteUrl,
    sameAs: [
      siteMetadata.github,
      siteMetadata.linkedin,
      siteMetadata.twitter,
    ].filter(Boolean), // Filter out empty strings if any
    jobTitle: siteMetadata.designation,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1abc9c" />
        <meta name="apple-mobile-web-app-title" content={siteMetadata.title} />
        <meta name="application-name" content={siteMetadata.title} />
        <meta name="msapplication-TileColor" content="#1abc9c" />
        <meta name="theme-color" content="#ecf0f1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <div className="flex h-screen flex-col justify-between">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* Skip-to-content link for keyboard/screen-reader users */}
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white"
            >
              Skip to content
            </a>
            <Header />
            <main id="main-content" className="mb-auto">
              {children}
            </main>
            <TerminalOverlay />
            <Footer />
          </ThemeProvider>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
