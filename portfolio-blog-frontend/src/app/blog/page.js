import React from "react";
import InDevelopment from "@/components/organisms/inDevelopment";
import Icon from "@/components/atom/icon";

export default function Blog() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="mx-auto max-w-6xl divide-y divide-gray-400">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl">
            Blogs
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              placeholder="Search articles"
              className="focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border border-gray-400 bg-white px-4 py-2 text-gray-900 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <Icon
              kind="search"
              size="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            />
          </div>
        </div>
      </div>
      <div className="pb-10 pl-12 pr-12 pt-32 md:pl-80 md:pr-80">
        <InDevelopment />
      </div>
    </main>
  );
}
