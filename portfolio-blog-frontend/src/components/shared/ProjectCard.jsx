import React from "react";
import Tag from "@/components/ui/Tag";
import Link from "next/link";

const ProjectCard = ({ title, description, tags, slug, demo, repo }) => {
  return (
    <div className="project-card-container">
      <Link href={`/projects/${slug}`} passHref>
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none"></div>
        <div className="p-6">
          <h4 className="project-card-title">{title}</h4>
          <p className="project-card-description">{description}</p>
        </div>
      </Link>
      <div className="mt-1 flex flex-wrap gap-1 p-6">
        {tags.map((tag, i) => (
          <Tag key={i} text={tag} id={i % 9} />
        ))}
      </div>
      <div>
        <div className="flex items-center justify-between p-6">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={demo || "#"}
            className="block flex items-center -space-x-3 font-sans text-base font-normal leading-relaxed text-inherit antialiased dark:text-white"
          >
            visit
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={repo || "#"}
            className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased dark:text-white"
          >
            view source
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
