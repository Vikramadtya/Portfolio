import Image from "next/image";

import Mail from "../../../public/mail.svg";
import Github from "../../../public/github.svg";
import Facebook from "../../../public/facebook.svg";
import Youtube from "../../../public/youtube.svg";
import Linkedin from "../../../public/linkedin.svg";
import Twitter from "../../../public/twitter.svg";
import Instagram from "../../../public/instagram.svg";
import Rss from "../../../public/rss.svg";

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  rss: Rss,
};

const SocialIcon = ({ kind, href, size }) => {
  const SocialSvg = components[kind];

  return (
    <>
      <a
        className="text-sm text-gray-500 transition hover:text-gray-600"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        <span className="sr-only">{kind}</span>
        <Image
          src={SocialSvg}
          className={`fill-current text-gray-700 hover:text-blue-400 dark:text-gray-200 h-${size} w-${size}`}
          alt=""
        />
      </a>
    </>
  );
};

export default SocialIcon;
