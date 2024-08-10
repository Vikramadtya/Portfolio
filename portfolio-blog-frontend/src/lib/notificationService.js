export async function notify(formData) {
  await fetch("/api/notify", {
    method: "POST",
    body: JSON.stringify({
      id: crypto.randomUUID(),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }),
  });
}
