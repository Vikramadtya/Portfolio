"use client";

import siteMetadata from "@/lib/metadata";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

export default function GitHubGraph() {
  const { theme, resolvedTheme } = useTheme();

  // Extract the GitHub username from the URL in metadata
  const githubUsername = siteMetadata.github.split("/").pop();

  return (
    <div className="my-8 flex w-full flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-zinc-900/50">
      <h3 className="mb-4 w-full text-left text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        GitHub Contributions
      </h3>
      <div className="w-full overflow-x-auto pb-2">
        <GitHubCalendar
          username={githubUsername}
          colorScheme={theme === "dark" || resolvedTheme === "dark" ? "dark" : "light"}
          blockSize={12}
          blockMargin={4}
          fontSize={14}
        />
      </div>
    </div>
  );
}
