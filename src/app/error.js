"use client";

import { useEffect } from "react";
import Link from "next/link";
import Icon from "@/components/ui/Icon";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4">
      <div className="mb-6 rounded-full bg-red-100 p-4 dark:bg-red-900/20">
        <Icon kind="info" size="h-10 w-10 text-red-600 dark:text-red-500" />
      </div>
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        Something went wrong!
      </h2>
      <p className="mb-8 max-w-md text-lg text-gray-600 dark:text-gray-400">
        An unexpected error occurred while trying to load this page.
      </p>
      <div className="flex items-center gap-4">
        <button
          onClick={() => reset()}
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:bg-gray-800"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
