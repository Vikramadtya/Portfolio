import Image from "next/image";
import dynamic from "next/dynamic";

import LogoLight from "@/public/logo.png";
import LogoDark from "@/public/logo-dark.png";

const components = {
  dog: dynamic(() => import("@/public/assets/icons/dog.svg")),
  congrats: dynamic(() => import("@/public/assets/icons/congrats.svg")),
  partyingFace: dynamic(
    () => import("@/public/assets/icons/partying-face.svg"),
  ),
  clinkingBeerMugs: dynamic(
    () => import("@/public/assets/icons/beer-mugs.svg"),
  ),
  memo: dynamic(() => import("@/public/assets/icons/memo.svg")),
  manWithMonocle: dynamic(
    () => import("@/public/assets/icons/man-with-monocole.svg"),
  ),
  wrenchAndHammer: dynamic(
    () => import("@/public/assets/icons/wrench-and-hammer.svg"),
  ),
  briefcase: dynamic(() => import("@/public/assets/icons/briefcase.svg")),
  hand: dynamic(() => import("@/public/assets/icons/hand.svg")),
  bolt: dynamic(() => import("@/public/assets/icons/bolt.svg")),
  tailwindCSS: dynamic(() => import("@/public/assets/icons/tailwind.svg")),
  nextJS: dynamic(() => import("@/public/assets/icons/nextjs.svg")),
  umami: dynamic(() => import("@/public/assets/icons/umami.svg")),
  vercel: dynamic(() => import("@/public/assets/icons/vercel.svg")),
  chart: dynamic(() => import("@/public/assets/icons/chart.svg")),
  game: dynamic(() => import("@/public/assets/icons/game.svg")),
  music: dynamic(() => import("@/public/assets/icons/music.svg")),
  india: dynamic(() => import("@/public/assets/icons/india.svg")),
  swimming: dynamic(() => import("@/public/assets/icons/swimming.svg")),
  gym: dynamic(() => import("@/public/assets/icons/gym.svg")),
  running: dynamic(() => import("@/public/assets/icons/running.svg")),
  me: dynamic(() => import("@/public/assets/icons/me.svg")),
  home: dynamic(() => import("@/public/assets/icons/home.svg")),
  search: dynamic(() => import("@/public/assets/icons/search.svg")),
  tag: dynamic(() => import("@/public/assets/icons/tag.svg")),
  calendar: dynamic(() => import("@/public/assets/icons/calendar.svg")),
  up: dynamic(() => import("@/public/assets/icons/up.svg")),
  heart: dynamic(() => import("@/public/assets/icons/heart.svg")),
  comment: dynamic(() => import("@/public/assets/icons/comment.svg")),
  tableOfContent: dynamic(() => import("@/public/assets/icons/toc.svg")),
  share: dynamic(() => import("@/public/assets/icons/share.svg")),
  clock: dynamic(() => import("@/public/assets/icons/clock.svg")),
  pencil: dynamic(() => import("@/public/assets/icons/pencil.svg")),
  eye: dynamic(() => import("@/public/assets/icons/eye.svg")),
  post: dynamic(() => import("@/public/assets/icons/postbox.svg")),
  location: dynamic(() => import("@/public/assets/icons/location.svg")),
  born: dynamic(() => import("@/public/assets/icons/born.svg")),
  birthday: dynamic(() => import("@/public/assets/icons/birthday-cake.svg")),
  juniorSchool: dynamic(
    () => import("@/public/assets/icons/junior-school.svg"),
  ),
  school: dynamic(() => import("@/public/assets/icons/school.svg")),
  college: dynamic(() => import("@/public/assets/icons/college.svg")),
  work: dynamic(() => import("@/public/assets/icons/work.svg")),
  degree: dynamic(() => import("@/public/assets/icons/degree.svg")),
  growing: dynamic(() => import("@/public/assets/icons/growing.svg")),
  rocket: dynamic(() => import("@/public/assets/icons/rocket.svg")),
  stats: dynamic(() => import("@/public/assets/icons/stats.svg")),
  resume: dynamic(() => import("@/public/assets/icons/resume.svg")),
  reading: dynamic(() => import("@/public/assets/icons/reading.svg")),
  watching: dynamic(() => import("@/public/assets/icons/watching.svg")),
  tool: dynamic(() => import("@/public/assets/icons/tools.svg")),
  quote: dynamic(() => import("@/public/assets/icons/quote.svg")),
  snippet: dynamic(() => import("@/public/assets/icons/snippet.svg")),
  now: dynamic(() => import("@/public/assets/icons/now.svg")),
  photography: dynamic(() => import("@/public/assets/icons/photography.svg")),
  user: dynamic(() => import("@/public/assets/icons/user.svg")),
  contact: dynamic(() => import("@/public/assets/icons/contact.svg")),
  mail: dynamic(() => import("@/public/assets/icons/mail.svg")),
  github: dynamic(() => import("@/public/assets/icons/github-2.svg")),
  linkedin: dynamic(() => import("@/public/assets/icons/linkedin-2.svg")),
  instagram: dynamic(() => import("@/public/assets/icons/instagram.svg")),
  blueTick: dynamic(() => import("@/public/assets/icons/blue_tick.svg")),
  tv: dynamic(() => import("@/public/assets/icons/tv.svg")),
  spotify: dynamic(() => import("@/public/assets/icons/spotify.svg")),
  bookmark: dynamic(() => import("@/public/assets/icons/bookmark.svg")),
  toolbox: dynamic(() => import("@/public/assets/icons/toolbox.svg")),
  hotDrink: dynamic(() => import("@/public/assets/icons/hot-drink.svg")),
  smilingFace: dynamic(() => import("@/public/assets/icons/smiling_face.svg")),

  // tech-stack
  aws: dynamic(() => import("@/public/assets/techstack-icon/aws.svg")),
  cmake: dynamic(() => import("@/public/assets/techstack-icon/cmake.svg")),
  docker: dynamic(() => import("@/public/assets/techstack-icon/docker.svg")),
  git: dynamic(() => import("@/public/assets/techstack-icon/git.svg")),
  golang: dynamic(() => import("@/public/assets/techstack-icon/golang.svg")),
  gradle: dynamic(() => import("@/public/assets/techstack-icon/gradle.svg")),
  java: dynamic(() => import("@/public/assets/techstack-icon/java.svg")),
  javascript: dynamic(
    () => import("@/public/assets/techstack-icon/javascript.svg"),
  ),
  jenkins: dynamic(() => import("@/public/assets/techstack-icon/jenkins.svg")),
  keras: dynamic(() => import("@/public/assets/techstack-icon/keras.svg")),
  linux: dynamic(() => import("@/public/assets/techstack-icon/linux.svg")),
  mariadb: dynamic(() => import("@/public/assets/techstack-icon/mariadb.svg")),
  maven: dynamic(() => import("@/public/assets/techstack-icon/maven.svg")),
  mongodb: dynamic(() => import("@/public/assets/techstack-icon/maven.svg")),
  nextjs: dynamic(() => import("@/public/assets/icons/nextjs.svg")),
  perl: dynamic(() => import("@/public/assets/techstack-icon/perl.svg")),
  python: dynamic(() => import("@/public/assets/techstack-icon/python.svg")),
  reactjs: dynamic(() => import("@/public/assets/techstack-icon/reactjs.svg")),
  redis: dynamic(() => import("@/public/assets/techstack-icon/redis.svg")),
  spring: dynamic(() => import("@/public/assets/techstack-icon/spring.svg")),
  tailwind: dynamic(
    () => import("@/public/assets/techstack-icon/tailwind.svg"),
  ),

  // Courses
  simplilearn: dynamic(() => import("@/public/assets/courses/simplilearn.svg")),
  padhai: dynamic(() => import("@/public/assets/courses/padhai.svg")),
  guvi: dynamic(() => import("@/public/assets/courses/guvi.svg")),

  // Publication
  first_publication: dynamic(
    () => import("@/public/assets/publications/first_publication.svg"),
  ),

  // Tools page icons (prefixed to avoid collisions with techstack)
  sublime: dynamic(() => import("@/public/assets/icons/tools/sublime.svg")),
  intellij: dynamic(() => import("@/public/assets/icons/tools/intellij.svg")),
  insomnia: dynamic(() => import("@/public/assets/icons/tools/insomnia.svg")),
  dockerTool: dynamic(() => import("@/public/assets/icons/tools/docker.svg")),
  drawio: dynamic(() => import("@/public/assets/icons/tools/drawio.svg")),
  githubTool: dynamic(() => import("@/public/assets/icons/tools/github.svg")),
  overleaf: dynamic(() => import("@/public/assets/icons/tools/overleaf.svg")),
  slack: dynamic(() => import("@/public/assets/icons/tools/slack.svg")),
  spotifyTool: dynamic(() => import("@/public/assets/icons/tools/spotify.svg")),
  iterm: dynamic(() => import("@/public/assets/icons/tools/terminal.svg")),
  linuxTool: dynamic(() => import("@/public/assets/icons/tools/linux.svg")),
  bash: dynamic(() => import("@/public/assets/icons/tools/bash.svg")),
  gitbook: dynamic(() => import("@/public/assets/icons/tools/gitbook.svg")),
  notion: dynamic(() => import("@/public/assets/icons/tools/notion.svg")),
  raindrop: dynamic(() => import("@/public/assets/icons/tools/raindrop.svg")),
  airtable: dynamic(() => import("@/public/assets/icons/tools/airtable.svg")),
};

const Icon = ({ kind, size }) => {
  // Since logo is a png we need to specially handle for the light and dark mode
  if (kind === "logo") {
    return (
      <>
        {" "}
        <Image
          className="navbar-logo rotate-0 scale-100 rounded-md transition-all dark:-rotate-90 dark:scale-0"
          src={LogoLight}
          alt="logo"
          width={size}
          height={size}
        />
        <Image
          className="navbar-logo absolute rotate-90 scale-0 rounded-md transition-all dark:rotate-0 dark:scale-100"
          src={LogoDark}
          alt="logo"
          width={size}
          height={size}
        />
      </>
    );
  }

  const IconSvg = components[kind];

  if (!IconSvg) return null;

  return (
    <>
      <i className={`inline-block`}>
        <IconSvg className={size} />
      </i>
    </>
  );
};

export default Icon;
