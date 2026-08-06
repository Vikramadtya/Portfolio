"use client";

import { useState } from "react";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import guestbookData from "@/../_content/components/guestbook.json";

export default function GuestbookClient({ session, initialEntries }) {
  const [entries, setEntries] = useState(initialEntries);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      
      if (res.ok) {
        const newEntry = await res.json();
        setEntries([newEntry, ...entries]);
        setMessage("");
      } else {
        alert(guestbookData.errorMessage);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex w-full flex-col gap-10">
      {session ? (
        <div className="flex w-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-zinc-900/50">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {guestbookData.signedInAs} <strong className="text-gray-900 dark:text-white">{session.user.name}</strong>
            </p>
            <button
              onClick={() => signOut()}
              className="text-xs text-red-500 hover:underline"
            >
              {guestbookData.signOut}
            </button>
          </div>
          <form onSubmit={onSubmit} className="flex flex-col gap-4 sm:flex-row">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={guestbookData.inputPlaceholder}
              className="block w-full flex-grow rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              maxLength={500}
              required
            />
            <Button type="submit" disabled={isSubmitting || !message.trim()} className="w-full sm:w-auto">
              {isSubmitting ? guestbookData.submittingButton : guestbookData.submitButton}
            </Button>
          </form>
        </div>
      ) : (
        <div className="flex w-full flex-col items-center justify-center gap-4 rounded-xl border border-gray-200 bg-gray-50 p-8 shadow-sm dark:border-gray-800 dark:bg-zinc-900/50">
          <p className="text-center text-gray-600 dark:text-gray-400">
            {guestbookData.signInMessage}
          </p>
          <Button onClick={() => signIn("github")}>{guestbookData.signInButton}</Button>
        </div>
      )}

      <div className="mt-4 flex w-full flex-col gap-6">
        {entries.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">{guestbookData.noMessages}</p>
        ) : (
          entries.map((entry) => (
            <div key={entry.id} className="flex gap-4">
              <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border border-gray-200 dark:border-gray-800">
                <Image
                  src={entry.image || "/assets/icons/user.png"}
                  alt={entry.name}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {entry.name}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    {new Date(entry.created_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <p className="mt-1 text-gray-700 dark:text-gray-300">
                  {entry.message}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
