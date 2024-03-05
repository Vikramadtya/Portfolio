import Link from "next/link";
import siteMetadata from "@/lib/metadata";
import navLinks from "@/lib/navLinks";
import ThemeToggle from "@/components/atom/themeToggle";
import React from "react";
import Icon from "@/components/atom/icon";
import AnalyticsLink from "@/components/atom/analyticsLink";
import MobileNav from "@/components/molecules/mobileHeader";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between gap-3 ">
            <Icon kind="logo" size={128} />
            {typeof siteMetadata.headerTitle === "string" ? (
              <div className="hidden px-2 text-2xl font-bold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="relative mr-7 flex items-center text-base leading-5">
        <div className="hidden sm:block ">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="underlined-header-link rounded-xl font-bold dark:hover:bg-opacity-10 sm:p-4"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <AnalyticsLink />
        <ThemeToggle />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
