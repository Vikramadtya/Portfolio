import Card from "@/components/atom/card";
import React from "react";

const MarkDownContentList = ({ blogs }) => {
  return (
    <>
      <div className="ml-10 mr-10 columns-1 pb-32 pt-32 md:columns-2  xl:columns-3">
        {blogs.map((blog) => (
          <Card
            title={blog.title}
            description={blog.description}
            tags={blog.tags}
            date={blog.date}
            slug={blog.slug}
            key={blog.id}
          />
        ))}
      </div>
    </>
  );
};

export default MarkDownContentList;
