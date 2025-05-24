import React from "react";
import Icon from "@/components/atom/icon";
import TagList from "./TagList"; // Updated import path

const BlogHero = ({ title, tags }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="px-4 text-center text-2xl font-bold md:text-4xl">
          {title}
        </h1>

        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center gap-2 ">
            <Icon kind="tag" size={"h-6 w-6"} />
            <TagList tags={tags} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHero;
