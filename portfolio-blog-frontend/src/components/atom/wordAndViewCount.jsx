import Icon from "@/components/atom/icon";
import React from "react";

const WordAndViewCount = ({ readingData, views }) => {
  return (
    <>
      <div className="flex items-center gap-10 pb-3">
        <span className="flex items-center ">
          <Icon kind="clock" size={"h-6 w-6"} />
          <span className="pl-3 text-center font-sans text-sm font-medium">
            {readingData.words} words
          </span>
        </span>
        <span className="flex items-center">
          <Icon kind="pencil" size={"h-6 w-6"} />
          <span className="pl-3 text-center font-sans text-sm font-medium">
            {readingData.text}
          </span>
        </span>
        <span className="flex items-center">
          <Icon kind="eye" size={"h-6 w-6"} />
          <span className="pl-3 text-center font-sans text-sm font-medium">
            {views} Views
          </span>
        </span>
      </div>
    </>
  );
};

export default WordAndViewCount;
