import React from "react";
import PageHeader from "@/components/shared/PageHeader";
import Icon from "@/components/ui/Icon";
import tools from "@/../_content/config/toolsData.json";
import { genPageMetadata } from "@/lib/seo";

export const metadata = genPageMetadata({ title: "Tools" });

export default function ToolsPage() {
  return (
    <main>
      <div className="px-8 py-12 md:px-24 lg:px-32 xl:px-48 2xl:px-60">
        <PageHeader pageName="tools" />
      </div>
      <div className="grid grid-cols-1 gap-3 px-12 pb-10 md:px-24 lg:grid-cols-2 lg:px-32 xl:px-48 2xl:px-60">
        {tools.map((tool) => (
          <div
            className="flex flex-col rounded-xl border bg-white shadow-sm dark:border-gray-700 dark:bg-slate-900 dark:shadow-slate-700/[.7]"
            key={tool.id}
          >
            <div className="flex items-center">
              <div className="relative inline-block pl-10 pr-10">
                <Icon kind={tool.icon} size="inline-block size-[62px] rounded-lg" />
              </div>
              <div className="pr-10">
                <div className="flex items-center justify-between rounded-t-xl border-b px-4 py-2 dark:border-gray-700 md:px-5">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {tool.name}
                  </h3>
                </div>
                <div className="px-4 pb-2 md:px-5">
                  <p className="mt-2 text-gray-500 dark:text-gray-100">
                    {tool.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
