import siteMetadata from "@/lib/metadata";
import SocialIcon from "@/components/atom/social-icon";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon
            kind="instagram"
            href={siteMetadata.instagram}
            size={20}
          />
          <SocialIcon
            kind="mail"
            href={`mailto:${siteMetadata.email}`}
            size={20}
          />
          <SocialIcon kind="github" href={siteMetadata.github} size={20} />
          <SocialIcon kind="rss" href="/feed.xml" size={20} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          Powered by{` `}
          <a className={"underline"} href="https://nextjs.org">
            NextJS
          </a>
          {` `}&{` `}
          <a className={"underline"} href="https://tailwindcss.com">
            TailwindCSS
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
