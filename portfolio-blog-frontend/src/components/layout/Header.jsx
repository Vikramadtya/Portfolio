import Link from "next/link";
import siteMetadata from "@/lib/metadata";
import navLinks from "@/lib/navigationData";
import ThemeToggle from "@/components/layout/ThemeToggle";
import React from "react";
import Icon from "@/components/ui/Icon";
import CurrentPath from "@/components/shared/CurrentPath";
import DropMenu from "@/components/layout/DropMenu";
import CommandPalette from "@/components/layout/CommandPalette";

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
        {siteMetadata.openToWork === true ? (
          <div className="invisible flex items-center gap-3 rounded-xl border border-border px-2 lg:visible">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500" />
            </span>
            <a href={`mailto:${siteMetadata.email}`}>{siteMetadata.openToWorkText}</a>
          </div>
        ) : (
          ""
        )}
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
