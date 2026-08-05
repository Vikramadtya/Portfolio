import React from "react";
import Tag from "@/components/ui/Tag";
import Link from "next/link";

const ProjectCard = ({
  title,
  description,
  tags,
  slug,
  demo,
  repo,
  compact = false,
}) => {
  const containerClass = compact
    ? "relative mb-10 flex w-full flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-black/5 dark:bg-white/5 backdrop-blur-md text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400 dark:hover:border-gray-500 dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
    : "project-card-container";

  return (
    <div className={containerClass}>
      <Link href={`/projects/${slug}`} passHref>
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none"></div>
        <div className={compact ? "p-6" : "p-6"}>
          <div className="flex items-start justify-between gap-4">
            <h4
              className={`project-card-title ${
                compact ? "mb-0 text-xl font-bold tracking-tight" : ""
              }`}
            >
              {title}
            </h4>
            <div
              className={`${
                compact ? "mt-0" : "mt-1"
              } flex shrink-0 items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-medium text-gray-900 dark:border-gray-700 dark:bg-black dark:text-white`}
            >
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
          </div>
          <p
            className={`project-card-description ${
              compact ? "mt-3 line-clamp-2 text-sm text-gray-600 dark:text-gray-400" : ""
            }`}
          >
            {description}
          </p>
        </div>
      </Link>
      {!compact && (
        <>
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
        </>
      )}
    </div>
  );
};

export default ProjectCard;
