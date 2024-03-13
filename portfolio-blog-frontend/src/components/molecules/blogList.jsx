import Card from "@/components/atom/card";
import React from "react";

const blogs = [
  {
    title: "UI/UX Review Check",
    description:
      "Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.",
    tags: ["nextjs", "nextjs", "nextjs", "nextjs", "nextjs", "nextjs"],
    date: "1999-01-01",
  },
];

const BlogList = () => {
  return (
    <>
      <div className="ml-10 mr-10 grid pb-32 pt-32 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-10 lg:grid-cols-4 lg:gap-10">
        {blogs.map((blog) => (
          <div>
            <Card
              title={blog.title}
              description={blog.description}
              tags={blog.tags}
              date={blog.date}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogList;
