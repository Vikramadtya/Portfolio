import Card from "@/components/atom/card";
import React from "react";

const BlogList = () => {
  return (
    <>
      <div className="ml-10 mr-10 grid pb-32 pt-32 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-10 lg:grid-cols-4 lg:gap-10">
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </>
  );
};

export default BlogList;
