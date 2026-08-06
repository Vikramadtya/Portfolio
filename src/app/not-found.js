import Link from "next/link";
import Icon from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4">
      <h2 className="mb-4 text-8xl font-black text-gray-200 dark:text-gray-800">
        404
      </h2>
      <h3 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Page Not Found
      </h3>
      <p className="mb-8 max-w-md text-lg text-gray-600 dark:text-gray-400">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been removed or the link is incorrect.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      >
        <Icon kind="arrowRight" size="h-5 w-5 rotate-180" />
        Back to Home
      </Link>
    </div>
  );
}
