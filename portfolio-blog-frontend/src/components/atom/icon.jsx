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
};

const Icon = ({ kind, size }) => {
  // Since logo is a png we need to specially handle for the light and dark mode
  if (kind === "logo") {
    return (
      <>
        {" "}
        <Image
          className="rotate-0 scale-100 rounded-md transition-all dark:-rotate-90 dark:scale-0"
          src={LogoLight}
          alt="logo"
          width={size}
          height={size}
        />
        <Image
          className="absolute rotate-90 scale-0 rounded-md transition-all dark:rotate-0 dark:scale-100"
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
        <IconSvg width={size} height={size} />
      </i>
    </>
  );
};

export default Icon;
