import ProjectCard from "@/components/shared/ProjectCard";
import React from "react";

const ArticleList = ({ blogs }) => {
  return (
    <>
      <div className="w-full columns-1 pb-32 pt-32 md:columns-2  xl:columns-3">
        {blogs.map((blog) => (
          <ProjectCard
            title={blog.title}
            description={blog.description}
            tags={blog.tags}
            slug={blog.slug}
            key={blog.id}
            repo={blog.repo}
            demo={blog.demo}
          />
        ))}
      </div>
    </>
  );
};

export default ArticleList;
