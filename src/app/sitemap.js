import siteMetadata from "@/lib/metadata";
import fs from "fs";
import path from "path";
import { CONTENT_DIR } from "@/lib/constants";

export default function sitemap() {
  const url = siteMetadata.siteUrl || "https://your-portfolio.com";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/projects",
    "/resume",
    "/now",
    "/timeline",
    "/photography",
    "/contact",
    "/watching",
    "/reading",
    "/guestbook",
  ].map((route) => ({
    url: `${url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "yearly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic routes (projects, reading, watching)
  const getDynamicRoutes = (folder, routePrefix) => {
    try {
      const folderPath = path.join(CONTENT_DIR, folder);
      if (!fs.existsSync(folderPath)) return [];

      const files = fs.readdirSync(folderPath);
      return files
        .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
        .map((file) => ({
          url: `${url}${routePrefix}/${file.replace(/\.(md|mdx)$/, "")}`,
          lastModified: new Date(), // Ideally read from file stat, but Date() is fine for build
          changeFrequency: "monthly",
          priority: 0.6,
        }));
    } catch (e) {
      return [];
    }
  };

  const projectRoutes = getDynamicRoutes("projects", "/projects");
  const readingRoutes = getDynamicRoutes("bookshelf", "/reading");
  const watchingRoutes = getDynamicRoutes("watching", "/watching");

  return [
    ...staticRoutes,
    ...projectRoutes,
    ...readingRoutes,
    ...watchingRoutes,
  ];
}
