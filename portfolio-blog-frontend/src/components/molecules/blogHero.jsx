import dayjs from "dayjs";
import Tag from "@/components/atom/tag";
import React from "react";
import Icon from "@/components/atom/icon";
import WordAndViewCount from "@/components/atom/wordAndViewCount";

const BlogHero = ({ title, date, tags, readingData }) => {
  const tagsComponent = [];
  for (let i = 0; i < tags.length; ++i) {
    tagsComponent.push(<Tag key={i} text={tags[i]} id={i % 9} />);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="px-4 text-center text-2xl font-bold md:text-4xl">
          {title}
        </h1>

        <div className="flex flex-col items-center justify-center space-y-2">
          <WordAndViewCount readingData={readingData} views={10} />
          <div className="flex items-center gap-2 ">
            <Icon kind="tag" size={"h-6 w-6"} />
            {...tagsComponent}
          </div>

          <div className="flex items-center space-x-2 text-muted-foreground">
            <Icon kind="calendar" size={"h-6 w-6"} />
            <p className="text-xs font-semibold md:text-sm">
              {dayjs(date).format("MMMM D, YYYY")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHero;
