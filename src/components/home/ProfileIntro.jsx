import React from "react";
import Avatar from "@/components/ui/Avatar";
import BlogLinks from "@/components/home/BlogLinks";
import Icon from "@/components/ui/Icon";

export default function ProfileIntro({ homePageThanks }) {
  return (
    <div className="grid gap-x-4 gap-y-40 xl:grid-cols-2">
      <div className="flex items-center justify-center xl:items-start xl:justify-start">
        <Avatar />
      </div>
      <div>
        <div className="my-auto flex flex-col text-lg leading-8 text-gray-600 dark:text-gray-100">
          <BlogLinks />
          <br />
          <p className="flex items-center">
            <span className="mr-2">{homePageThanks}</span>
            <Icon kind="clinkingBeerMugs" size={"h-20 w-20"} />
          </p>
        </div>
      </div>
    </div>
  );
}
