export async function notify(formData) {
  try {
    const response = await fetch("/api/notify", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: crypto.randomUUID(),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Failed to send notification:", response.status, errorText);
      return { success: false, message: `Failed to send notification. Server responded with ${response.status}` };
    }

    return { success: true, data: await response.json() }; // Assuming server sends back some data on success
  } catch (error) {
    console.error("Network error sending notification:", error);
    return { success: false, message: "Network error sending notification. Please try again." };
  }
}
