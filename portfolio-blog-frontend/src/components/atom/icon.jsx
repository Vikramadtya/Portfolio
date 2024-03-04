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
};

const Icon = ({ kind, size }) => {
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
