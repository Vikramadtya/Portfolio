import React from "react";
import Icon from "@/components/atom/icon";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="pb-10 pl-12 pr-12 pt-32 md:pl-80 md:pr-80">
        <div className="flex flex-col rounded-xl border bg-white shadow-sm dark:border-gray-700 dark:bg-slate-900 dark:shadow-slate-700/[.7]">
          <div className="flex items-center">
            <div className="relative inline-block pl-10 pr-10">
              <Icon kind="work" size="inline-block size-[62px] rounded-lg" />
            </div>
            <div className="pr-10">
              <div className="flex items-center justify-between rounded-t-xl border-b px-4 py-3 dark:border-gray-700 md:px-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  Card action
                </h3>
              </div>
              <div className="p-4 md:p-5">
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
