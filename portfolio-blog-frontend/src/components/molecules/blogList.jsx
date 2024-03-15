import Card from "@/components/atom/card";
import React from "react";
import Link from "next/link";

const BlogList = ({ blogs }) => {
  return (
    <>
      <div className="ml-10 mr-10 grid pb-32 pt-32 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-10 lg:grid-cols-4 lg:gap-10">
        {blogs.map((blog) => (
          <Card
            title={blog.title}
            description={blog.description}
            tags={blog.tags}
            date={blog.date}
            slug={blog.slug}
          />
        ))}
      </div>
    </>
  );
};

export default BlogList;
