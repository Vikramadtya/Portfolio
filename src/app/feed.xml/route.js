import RSS from "rss";
import { NextResponse } from "next/server";
import { getContentList } from "@/lib/markdown";
import { PROJECTS_DIR, READING_DIR } from "@/lib/constants";
import siteMetadata from "@/lib/metadata";

export async function GET() {
  const feed = new RSS({
    title: siteMetadata.title,
    description: siteMetadata.description,
    site_url: siteMetadata.siteUrl,
    feed_url: `${siteMetadata.siteUrl}/feed.xml`,
    image_url: `${siteMetadata.siteUrl}${siteMetadata.socialBanner}`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, ${siteMetadata.author}`,
  });

  // Fetch Projects and Bookshelf entries
  const projects = getContentList(PROJECTS_DIR).map((item) => ({
    ...item,
    urlPrefix: "/projects",
  }));
  
  let reading = [];
  try {
    reading = getContentList(READING_DIR).map((item) => ({
      ...item,
      urlPrefix: "/reading",
    }));
  } catch (e) {
    console.warn("No bookshelf dir found for RSS");
  }

  // Combine and sort by date descending
  const allContent = [...projects, ...reading].sort((a, b) => {
    const dateA = new Date(a.date || a.lastModified || Date.now());
    const dateB = new Date(b.date || b.lastModified || Date.now());
    return dateB - dateA;
  });

  allContent.forEach((post) => {
    feed.item({
      title: post.title || post.name || "Untitled",
      description: post.summary || post.description || "",
      url: `${siteMetadata.siteUrl}${post.urlPrefix}/${post.slug}`,
      date: post.date || post.lastModified || new Date(),
      author: siteMetadata.author,
    });
  });

  return new NextResponse(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
