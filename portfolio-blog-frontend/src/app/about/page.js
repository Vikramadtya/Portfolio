import React from "react";
import Content from "./content.mdx";
import Icon from "@/components/atom/icon";

export default function Home() {
  return (
    <main className="mt-8 flex  items-start pb-24 pl-12 pr-12 pt-24 text-lg leading-8 text-gray-600 dark:text-gray-400 md:pl-24 md:pr-24 lg:pl-32 lg:pr-32 xl:mt-8 xl:pl-64 xl:pr-64 2xl:mt-8 2xl:pl-80 2xl:pr-80 ">
      <div className="w-1/6">
        <Icon kind="me" size={"h-44 w-44"} />
      </div>

      <div className="pl-12">
        <Content />{" "}
      </div>
    </main>
  );
}
