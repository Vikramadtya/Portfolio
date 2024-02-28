import Image from "next/image";
import Link from "next/link";
import siteMetadata from "@/lib/metadata";
import navLinks from "@/lib/navLinks";
import ThemeToggle from "@/components/atom/themeToggle";
import React from "react";
import Logo from "@/components/atom/logo";

const Header = () => {
  return (
    <header className="flex items-center">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between gap-3 ">
            <Logo size={128} />
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
      <div className="flex items-center text-base leading-5 relative">
        <div className="hidden sm:block">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="rounded-xl font-bold hover:bg-gray-100 dark:hover:bg-opacity-10 sm:p-4"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
