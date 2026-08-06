import Link from "next/link";
import siteMetadata from "@/lib/metadata";
import navLinks from "@/lib/navigationData";
import ThemeToggle from "@/components/layout/ThemeToggle";
import React from "react";
import Icon from "@/components/ui/Icon";
import CurrentPath from "@/components/shared/CurrentPath";
import DropMenu from "@/components/layout/DropMenu";
import CommandPalette from "@/components/layout/CommandPalette";
import AvailabilityBadge from "@/components/ui/AvailabilityBadge";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center justify-between md:gap-10">
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
        <CurrentPath />
      </div>
      <div className="relative mr-7 flex items-center text-base leading-5">
        <AvailabilityBadge />
        <div className="hidden lg:block">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="underlined-header-link rounded-xl font-bold dark:hover:bg-opacity-10 sm:p-4"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeToggle />
        <DropMenu />
        <CommandPalette />
      </div>
    </header>
  );
};

export default Header;
