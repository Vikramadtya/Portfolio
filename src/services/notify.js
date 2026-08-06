export const notifyDiscord = async (data) => {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn("DISCORD_WEBHOOK_URL is not set.");
    return;
  }

  // Parse the data back to an object if it's a JSON string, otherwise use as is
  const parsedData = typeof data === "string" ? JSON.parse(data) : data;

  const content = `**New Contact Form Submission!** 🎉
**Email:** ${parsedData.email || "N/A"}
**Subject:** ${parsedData.subject || "N/A"}
**Message:** 
${parsedData.message || "N/A"}`;

  try {
    await fetch(webhookUrl, {
      method: "POST",
      body: JSON.stringify({ content }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Failed to send message to Discord", error);
  }
};
