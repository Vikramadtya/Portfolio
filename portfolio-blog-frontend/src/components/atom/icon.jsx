import Image from "next/image";

import Dog from "../../../public/dog.svg";
import Congrats from "../../../public/congrats.svg";
import PartyingFace from "../../../public/partying-face.svg";
import ClinkingBeerMugs from "../../../public/beer-mugs.svg";
import Memo from "../../../public/memo.svg";
import Briefcase from "../../../public/briefcase.svg";
import ManWithMonocle from "../../../public/man-with-monocole.svg";
import WrenchAndHammer from "../../../public/wrench-and-hammer.svg";
import Hand from "../../../public/hand.svg";
import Bolt from "../../../public/bolt.svg";
import TailwindCSS from "../../../public/tailwind.svg";
import NextJS from "../../../public/nextjs.svg";
import Umami from "../../../public/umami.svg";
import Vercel from "../../../public/vercel.svg";
import Chart from "../../../public/chart.svg";
import Game from "../../../public/game.svg";
import Music from "../../../public/music.svg";
import India from "../../../public/india.svg";
import Swimming from "../../../public/swimming.svg";
import Gym from "../../../public/gym.svg";
import Running from "../../../public/running.svg";
import Me from "../../../public/me.svg";
import Home from "../../../public/home.svg";
import Search from "../../../public/search.svg";
import Tag from "../../../public/tag.svg";
import Calendar from "../../../public/calendar.svg";
import Heart from "../../../public/heart.svg";
import Share from "../../../public/share.svg";
import TableOfContent from "../../../public/toc.svg";
import Up from "../../../public/up.svg";
import Comment from "../../../public/comment.svg";
import Clock from "../../../public/clock.svg";
import Pencil from "../../../public/pencil.svg";
import Eye from "../../../public/eye.svg";
import PostBox from "../../../public/postbox.svg";
import Location from "../../../public/location.svg";
import Born from "../../../public/born.svg";
import Birthday from "../../../public/birthday-cake.svg";
import Work from "../../../public/work.svg";
import School from "../../../public/school.svg";
import College from "../../../public/college.svg";
import JuniorSchool from "../../../public/junior-school.svg";
import Degree from "../../../public/degree.svg";
import Growing from "../../../public/growing.svg";
import Rocket from "../../../public/rocket.svg";
import Stats from "../../../public/stats.svg";
import Resume from "../../../public/resume.svg";
import Reading from "../../../public/reading.svg";
import Watching from "../../../public/watching.svg";
import Tool from "../../../public/tools.svg";
import Quote from "../../../public/quote.svg";
import Now from "../../../public/now.svg";
import Snippet from "../../../public/snippet.svg";
import Photography from "../../../public/photography.svg";

import LogoLight from "../../../public/logo.png";
import LogoDark from "../../../public/logo-dark.png";

const components = {
  dog: Dog,
  congrats: Congrats,
  partyingFace: PartyingFace,
  clinkingBeerMugs: ClinkingBeerMugs,
  memo: Memo,
  manWithMonocle: ManWithMonocle,
  wrenchAndHammer: WrenchAndHammer,
  briefcase: Briefcase,
  hand: Hand,
  bolt: Bolt,
  tailwindCSS: TailwindCSS,
  nextJS: NextJS,
  umami: Umami,
  vercel: Vercel,
  chart: Chart,
  game: Game,
  music: Music,
  india: India,
  swimming: Swimming,
  gym: Gym,
  running: Running,
  me: Me,
  home: Home,
  search: Search,
  tag: Tag,
  calendar: Calendar,
  up: Up,
  heart: Heart,
  comment: Comment,
  tableOfContent: TableOfContent,
  share: Share,
  clock: Clock,
  pencil: Pencil,
  eye: Eye,
  post: PostBox,
  location: Location,
  born: Born,
  birthday: Birthday,
  juniorSchool: JuniorSchool,
  school: School,
  college: College,
  work: Work,
  degree: Degree,
  growing: Growing,
  rocket: Rocket,
  stats: Stats,
  resume: Resume,
  reading: Reading,
  watching: Watching,
  tool: Tool,
  quote: Quote,
  snippet: Snippet,
  now: Now,
  photography: Photography,
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
  return (
    <>
      <i className={`inline-block`}>
        <IconSvg className={size} />
      </i>
    </>
  );
};

export default Icon;
