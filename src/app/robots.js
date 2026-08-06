import siteMetadata from "@/lib/metadata";

export default function robots() {
  const url = siteMetadata.siteUrl || "https://your-portfolio.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${url}/sitemap.xml`,
  };
}
