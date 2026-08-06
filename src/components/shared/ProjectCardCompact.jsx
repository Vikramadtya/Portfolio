"use client";

import React from "react";
import Link from "next/link";
import useSound from "use-sound";


const ProjectCardCompact = ({ title, description, slug, demo }) => {
  const [playHover] = useSound("/sounds/switch-on.mp3", { volume: 0.1 });

  return (
    <div
      className="relative mb-10 flex w-full flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-black/5 dark:bg-white/5 backdrop-blur-md text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400 dark:hover:border-gray-500 dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
      onMouseEnter={() => playHover()}
    >
      <Link href={`/projects/${slug}`} passHref>
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none"></div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <h4 className="mb-0 text-xl font-bold tracking-tight project-card-title">
              {title}
            </h4>
            <div className="mt-0 flex shrink-0 items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-medium text-gray-900 dark:border-gray-700 dark:bg-black dark:text-white">
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
          <p className="mt-3 line-clamp-2 text-sm text-gray-600 dark:text-gray-400 project-card-description">
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCardCompact;
