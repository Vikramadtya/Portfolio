"use client";

import React from "react";
import Link from "next/link";
import useSound from "use-sound";


const ProjectCardCompact = ({ title, description, slug, demo }) => {
  const [playHover] = useSound("/sounds/switch-on.mp3", { volume: 0.1 });

  return (
    <div
      className="project-card-container group mb-0 w-full max-w-none"
      onMouseEnter={() => playHover()}
    >
      <Link href={`/projects/${slug}`} passHref>
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none"></div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <h4 className="mb-0 project-card-title">
              {title}
            </h4>
            <div className="mt-0 flex shrink-0 items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium tracking-wide text-foreground/80">
              <span className="relative flex h-3 w-3">
                {demo && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60"></span>
                )}
                <span
                  className={`relative inline-flex h-3 w-3 rounded-full ${
                    demo ? "bg-emerald-500" : "bg-stone-400"
                  }`}
                ></span>
              </span>
              {demo ? "Live" : "Offline"}
            </div>
          </div>
          <p className="mt-2 line-clamp-2 project-card-description">
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCardCompact;
