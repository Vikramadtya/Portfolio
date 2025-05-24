export const notifySlack = async (message) => {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("Slack webhook URL is not defined. Set SLACK_WEBHOOK_URL environment variable.");
    // Depending on desired behavior, you could throw an error here or just return
    // Throwing an error is generally better for indicating a configuration problem.
    throw new Error("Slack integration is not configured (missing SLACK_WEBHOOK_URL).");
  }

  try {
    const response = await fetch(
      webhookUrl,
      {
        method: "POST",
        body: JSON.stringify({
          text: message,
        }),
        headers: {
          "Content-Type": "application/json", // Corrected "Content-type" to "Content-Type"
        },
      },
    );

    if (!response.ok) {
      const responseBody = await response.text();
      console.error('Slack API Error:', response.status, responseBody);
      throw new Error(`Failed to send message to Slack. Status: ${response.status}, Body: ${responseBody}`);
    }
    // Optionally, you could return something or log success, but for this function,
    // not throwing an error implies success.
    // console.log("Message sent to Slack successfully.");
  } catch (error) {
    // Catch network errors or errors from the response.ok check above
    console.error("Error in notifySlack:", error.message);
    // Re-throw the error so the calling API route can handle it
    // If it's an error we threw above, it will be re-thrown.
    // If it's a network error, it will be thrown.
    throw error; 
  }
};
