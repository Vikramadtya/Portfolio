import { Redis } from "@upstash/redis";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const getRedis = () => {
  if (!process.env.UPSTASH_REDIS_REST_URL) return null;
  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
};

export async function GET() {
  const redis = getRedis();
  if (!redis) {
    return NextResponse.json({ error: "Redis not configured" }, { status: 500 });
  }

  try {
    const entries = await redis.lrange("guestbook", 0, 100);
    return NextResponse.json(entries || []);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch entries" }, { status: 500 });
  }
}

export async function POST(request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const redis = getRedis();
  if (!redis) {
    return NextResponse.json({ error: "Redis not configured" }, { status: 500 });
  }

  try {
    const { message } = await request.json();
    if (!message || message.trim().length === 0) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const entry = {
      id: crypto.randomUUID(),
      name: session.user.name,
      image: session.user.image,
      message: message.trim().slice(0, 500),
      created_at: new Date().toISOString(),
    };

    // Prepend to the list
    await redis.lpush("guestbook", JSON.stringify(entry));

    return NextResponse.json(entry, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 });
  }
}
