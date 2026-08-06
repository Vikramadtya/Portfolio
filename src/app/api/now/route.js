import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

export async function GET() {
  const notionToken = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!notionToken || !databaseId) {
    return NextResponse.json(
      { error: "Missing Notion credentials in .env.local" },
      { status: 500 }
    );
  }

  const notion = new Client({ auth: notionToken });

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      // You can add sorting here if needed
    });

    const items = response.results.map((page) => {
      // Safely extract properties based on the expected Notion schema
      const heading = page.properties?.Heading?.title?.[0]?.plain_text || "Unknown";
      const content = page.properties?.Content?.rich_text?.[0]?.plain_text || "";
      const icon = page.properties?.Icon?.select?.name || "bookmark";

      return {
        heading,
        content,
        icon,
      };
    });

    // Extract location if the user created a row with Heading "Location"
    const locationItem = items.find((item) => item.heading.toLowerCase() === "location");
    const location = locationItem ? locationItem.content : "Delhi, India";

    // Ensure we don't accidentally pull 'Listening' or 'Location' as a generic card
    const filteredItems = items.filter(
      (item) => item.heading !== "Listening" && item.heading.toLowerCase() !== "location"
    );

    return NextResponse.json({ items: filteredItems, location });
  } catch (error) {
    console.error("Error fetching from Notion:", error);
    return NextResponse.json(
      { error: "Failed to fetch Notion data" },
      { status: 500 }
    );
  }
}
