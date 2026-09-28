import { notifyDiscord } from "@/services/notify";

export const dynamic = "force-dynamic"; // static by default, unless reading the request

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await request.json();

    // notify via discord
    notifyDiscord(body);

    // send response back
    return new Response(
      JSON.stringify({
        ...body,
        timestamp: Date.now(),
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Notify API Error:", error);
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
    });
  }
}
