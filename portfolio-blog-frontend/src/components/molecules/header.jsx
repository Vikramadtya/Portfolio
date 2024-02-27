import Link from "next/link";
import siteMetadata from "@/lib/metadata";
import Image from "next/image";
import navLinks from "@/lib/navLinks";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between gap-3 ">
            <Image
              className="rounded-md"
              src="/logo.png"
              alt="logo"
              width={36}
              height={36}
            />
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
      <div className="flex items-center text-base leading-5">
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
      </div>
    </header>
  );
};

export default Header;
