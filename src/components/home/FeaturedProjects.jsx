import React from "react";
import ProjectCardCompact from "@/components/shared/ProjectCardCompact";

const FeaturedProjects = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <>
      <div className="w-full mt-32 pt-16 pb-10">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Featured Projects
        </h2>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          A selection of my recent open-source work and personal experiments. 
          Check out what I&apos;ve been building lately.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCardCompact
              title={project.title}
              description={project.description}
              slug={project.slug}
              key={project.id}
              demo={project.demo}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedProjects;
