import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PROJECTS_DIR } from "@/lib/constants";

export const runtime = "nodejs";

export const alt = "Project Preview Image";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }) {
  const { slug } = params;

  let title = "Portfolio Project";
  let description = "Check out my latest work on my portfolio.";

  try {
    const markdownFile = fs.readFileSync(
      path.join(PROJECTS_DIR, slug + ".mdx"),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownFile);
    if (frontMatter.title) title = frontMatter.title;
    if (frontMatter.description) description = frontMatter.description;
  } catch (error) {
    console.error("Error reading MDX for OG image:", error);
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#18181b", // zinc-900
          padding: "80px",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: "#fff",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: "32px", color: "#000" }}>🚀</span>
          </div>
          <span style={{ fontSize: "32px", fontWeight: "600", color: "#a1a1aa" }}>
            Vikramaditya Singh
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "900",
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: "-0.05em",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "36px",
              margin: 0,
              color: "#a1a1aa", // zinc-400
              lineHeight: 1.4,
            }}
          >
            {description}
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
