import React from "react";
import Content from "./content.mdx";
import Icon from "@/components/atom/icon";
import SocialIcon from "@/components/atom/social-icon";
import siteMetadata from "@/lib/metadata";

import "../markdown.css";

export default function Home() {
  return (
    <>
      <main className="mt-8 flex flex-col items-start pb-24 pl-12 pr-12 pt-24 text-lg leading-8 text-gray-600 dark:text-gray-400 md:flex-row md:pl-24 md:pr-24 lg:pl-32 lg:pr-32 xl:mt-8 xl:pl-64 xl:pr-64 2xl:mt-8 2xl:pl-80 2xl:pr-80 ">
        <div className="flex flex-col items-center  px-6 pt-8 xl:sticky xl:top-0">
          <div className="px-6">
            <Icon kind="user" size={"h-44 w-44 rounded-full"} />
          </div>
          <h3 className="pb-2 pt-4  font-bold leading-8">
            {siteMetadata.author}
          </h3>
          <div className="text-gray-500 dark:text-gray-400">
            {siteMetadata.designation}
          </div>
          <div className="flex items-center space-x-4 pt-4">
            <SocialIcon
              kind="linkedin"
              href={siteMetadata.linkedin}
              size={20}
            />
            <SocialIcon
              kind="mail"
              href={`mailto:${siteMetadata.email}`}
              size={20}
            />
            <SocialIcon kind="github" href={siteMetadata.github} size={20} />
          </div>
        </div>

        <div className="pl-12">
          <Content />{" "}
        </div>
      </main>
    </>
  );
}
