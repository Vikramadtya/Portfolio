import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import GuestbookClient from "@/components/guestbook/GuestbookClient";
import guestbookData from "@/../_content/components/guestbook.json";

export const metadata = {
  title: guestbookData.title,
  description: guestbookData.description,
};

async function getGuestbookEntries() {
  try {
    const res = await fetch(
      `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/api/guestbook`,
      { next: { tags: ["guestbook"], revalidate: 60 } }
    );
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Failed to fetch guestbook:", error);
    return [];
  }
}

export default async function GuestbookPage() {
  const session = await getServerSession(authOptions);
  const initialEntries = await getGuestbookEntries();

  // Ensure entries are parsed objects (Upstash sometimes returns strings depending on config)
  const parsedEntries = initialEntries.map((e) =>
    typeof e === "string" ? JSON.parse(e) : e
  );

  return (
    <div className="mx-auto max-w-2xl px-6 pb-20 pt-32">
      <div className="mb-10 flex flex-col items-start gap-4">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          {guestbookData.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {guestbookData.description}
        </p>
      </div>

      <GuestbookClient session={session} initialEntries={parsedEntries} />
    </div>
  );
}
