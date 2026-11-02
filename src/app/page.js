import HeroSection from "@/components/home/HeroSection";
import React from "react";
import PromoCard from "@/components/home/PromoCard";
import ProfileIntro from "@/components/home/ProfileIntro";
import FeaturedProjects from "@/components/home/FeaturedProjects";

import { genPageMetadata } from "@/lib/seo";
import { getPageContent, getContentList } from "@/lib/markdown";
import { PROJECTS_DIR } from "@/lib/constants";

export const metadata = genPageMetadata({ title: "Home" });

export default function Home() {
  const pageData = getPageContent("home");
  // Featured projects mirror the ones listed on the latest resume
  const featured = ["expensesplit", "meditor", "dga-classifier", "blog", "bookmarker"];
  const projects = getContentList(PROJECTS_DIR)
    .filter((p) => featured.includes(p.slug))
    .sort((a, b) => featured.indexOf(a.slug) - featured.indexOf(b.slug));

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <PromoCard />
      <div className="page-layout text-body pt-24">
        <HeroSection data={pageData} />
        <ProfileIntro homePageThanks={pageData.homePageThanks} />
        <FeaturedProjects projects={projects} />
      </div>
    </div>
  );
}
