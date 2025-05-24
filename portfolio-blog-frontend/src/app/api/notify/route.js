import { notifySlack } from "@/app/api/notify/services";

export const dynamic = "force-dynamic"; // static by default, unless reading the request

export const runtime = "nodejs";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch (error) {
    console.error("Error parsing request JSON:", error);
    return new Response(JSON.stringify({ error: 'Bad request. Invalid JSON.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }

  try {
    // notify the slack
    await notifySlack(JSON.stringify(body)); // Added await

    // send response back
    return new Response(
      JSON.stringify({
        message: "Notification received and processed.", // More explicit success message
        data: body, // Echo back the data received
        timestamp: Date.now(),
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error("Error sending notification to Slack:", error);
    // The error from notifySlack might already be an Error object.
    // If it has a specific message, use it, otherwise a generic one.
    const errorMessage = error.message || 'Failed to send notification to Slack';
    return new Response(JSON.stringify({ error: errorMessage }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
