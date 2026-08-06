"use client";

import React from "react";
import Tag from "@/components/ui/Tag";
import Link from "next/link";
import useSound from "use-sound";
import ViewCounter from "@/components/shared/ViewCounter";

const ProjectCard = ({ title, description, tags, slug, demo, repo }) => {
  const [playHover] = useSound("/sounds/switch-on.mp3", { volume: 0.1 });

  return (
    <div className="project-card-container" onMouseEnter={() => playHover()}>
      <Link href={`/projects/${slug}`} passHref>
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none"></div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <h4 className="project-card-title">{title}</h4>
            <div className="mt-1 flex shrink-0 items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-medium text-gray-900 dark:border-gray-700 dark:bg-black dark:text-white">
              <span className="relative flex h-3 w-3">
                {demo && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                )}
                <span
                  className={`relative inline-flex h-3 w-3 rounded-full ${
                    demo ? "bg-green-500" : "bg-red-500"
                  }`}
                ></span>
              </span>
              {demo ? "Live" : "Offline"}
            </div>
            <ViewCounter slug={slug} />
          </div>
          <p className="project-card-description">{description}</p>
        </div>
      </Link>
      <div className="mt-1 flex flex-wrap gap-1 p-6 pt-0">
        {tags.map((tag, i) => (
          <Tag key={i} text={tag} id={i % 9} />
        ))}
      </div>
      <div>
        <div className="flex items-center justify-between p-6 pt-0">
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
