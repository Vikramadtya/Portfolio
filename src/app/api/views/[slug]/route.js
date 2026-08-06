import { redis } from "@/lib/redis";

export const revalidate = 0; // Disable caching so it's always live

export async function GET(request, { params }) {
  const { slug } = params;

  try {
    const views = await redis.get(`pageviews:projects:${slug}`);
    return new Response(JSON.stringify({ views: views || 0 }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ views: 0, error: "Database error" }), {
      status: 500,
    });
  }
}

export async function POST(request, { params }) {
  const { slug } = params;

  try {
    // Increment the view counter by 1
    const views = await redis.incr(`pageviews:projects:${slug}`);
    return new Response(JSON.stringify({ views }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ views: 0, error: "Database error" }), {
      status: 500,
    });
  }
}
