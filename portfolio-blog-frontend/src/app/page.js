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
import { getPageContent } from "@/lib/markdown";

export const metadata = genPageMetadata({ title: "Home" });

export default function Home() {
  const pageData = getPageContent("home");
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
      </div>
    </main>
  );
}
