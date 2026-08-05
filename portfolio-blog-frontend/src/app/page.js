import HeroSection from "@/components/home/HeroSection";
import Avatar from "@/components/ui/Avatar";
import React from "react";
import BlogLinks from "@/components/home/BlogLinks";
import Icon from "@/components/ui/Icon";
import PromoCard from "@/components/home/PromoCard";

/**
 * Home Page (/
 *
 * This is the main entry point for the portfolio.
 * It orchestrates the PromoCard, HeroSection, Avatar, and BlogLinks components.
 * The layout relies heavily on Tailwind CSS grids and flexboxes for responsiveness.
 */
import { genPageMetadata } from "@/lib/seo";
import { getPageContent, getContentList } from "@/lib/markdown";
import { PROJECTS_DIR } from "@/lib/constants";
import ProjectCard from "@/components/shared/ProjectCard";
import Link from "next/link";

export const metadata = genPageMetadata({ title: "Home" });

export default function Home() {
  const pageData = getPageContent("home");
  const projects = getContentList(PROJECTS_DIR)
    .sort((a, b) => a.id - b.id)
    .slice(0, 6);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <PromoCard />
      <div className="mt-8 pb-24 pl-12 pr-12 pt-24 text-lg leading-8 text-gray-600 dark:text-gray-100 md:pl-24 md:pr-24 lg:pl-32 lg:pr-32 xl:mt-8 xl:pl-64 xl:pr-64 2xl:mt-8 2xl:pl-80 2xl:pr-80">
        <HeroSection data={pageData} />
        <div className="grid gap-x-4 gap-y-40 xl:grid-cols-2">
          <div className="flex items-center justify-center xl:items-start xl:justify-start">
            <Avatar />
          </div>
          <div>
            {" "}
            <div className="my-auto flex flex-col text-lg leading-8 text-gray-600 dark:text-gray-100">
              <BlogLinks />
              <br />
              <p className="flex items-center">
                <span className="mr-2">{pageData.homePageThanks}</span>
                <Icon kind="clinkingBeerMugs" size={"h-20 w-20"} />
              </p>
            </div>
          </div>
        </div>
        
        {/* Featured Projects Showcase */}
        <div className="mt-40 border-t border-gray-200 pt-16 dark:border-gray-800">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Featured Projects
            </h2>
            <Link
              href="/projects"
              className="flex items-center gap-2 text-base font-semibold text-gray-900 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white"
            >
              View all
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2">
            {projects.map((project) => (
              <div key={project.id} className="flex h-full w-full">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  slug={project.slug}
                  repo={project.repo}
                  demo={project.demo}
                  compact={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
