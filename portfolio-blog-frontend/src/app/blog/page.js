import React from "react";
import InDevelopment from "@/components/organisms/inDevelopment";
import Icon from "@/components/atom/icon";

export default function Blog() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-relaxed">
          Blogs
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          I primarily cover tech topics, occasionally sharing insights into my
          personal life.
        </p>
        <div className="relative max-w-lg">
          <label>
            <span className="sr-only">Search articles</span>
            <input
              aria-label="Search articles"
              type="text"
              placeholder="Search articles"
              className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-6 pr-6 text-gray-900 focus:border-sky-500 focus:ring-sky-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
          </label>
          <Icon
            kind="search"
            size="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
          />
        </div>
      </div>
      <div className="pb-10 pl-12 pr-12 pt-32 md:pl-80 md:pr-80">
        <InDevelopment />
      </div>
    </main>
  );
}
