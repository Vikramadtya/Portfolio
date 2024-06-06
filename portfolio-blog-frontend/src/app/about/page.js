import React from "react";
import Content from "./content.mdx";
import Icon from "@/components/atom/icon";
import SocialIcon from "@/components/atom/social-icon";
import siteMetadata from "@/lib/metadata";

export default function Home() {
  return (
    <>
      <main className="mt-8 flex flex-col items-start pb-24 pl-12 pr-12  pt-24 text-lg leading-8 text-gray-600 dark:text-gray-100 md:flex-row md:pl-24 md:pr-24 lg:pl-32 lg:pr-32 xl:mt-8 xl:pl-48 xl:pr-48 ">
        <div className="flex w-full flex-col items-center  px-6 pt-8 xl:sticky xl:top-0">
          <div className="px-6">
            <Icon
              kind="user"
              size={
                "h-44 w-44 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              }
            />
          </div>
          <h3 className="flex items-center gap-1 pb-2 pt-4  font-bold leading-8">
            {siteMetadata.author}
            <Icon kind="blueTick" size="h-6 w-6" />
          </h3>
          <div className="text-gray-500 dark:text-gray-100">
            {siteMetadata.designation}, {siteMetadata.company}
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

        <div>
          <Content />{" "}
        </div>
      </main>
    </>
  );
}
